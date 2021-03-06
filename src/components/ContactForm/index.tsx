import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useErrors } from '../../hooks/useErrors';
import CategoriesService from '../../services/CategoriesService';
import { formatPhone } from '../../utils/formatPhone';
import { isValidEmail } from '../../utils/isValidEmail';
import { Button } from '../Button';
import { FormGroup } from '../FormGroup';
import { Input } from '../Input';
import { Select } from '../Select';
import { FormContainer, ButtonContainer } from './styles';

interface FormData {
  name: string;
  email: string;
  phone: string;
  categoryId: string;
}

interface ContactFormProps {
  buttonLabel: string;
  onSubmit: (formData: FormData) => Promise<void>;
}

interface Category {
  id: string;
  name: string;
}

export function ContactForm({ buttonLabel, onSubmit }: ContactFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { addError, removeError, getErrorMessageByFieldName, errors } =
    useErrors();

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const categoriesList = await CategoriesService.listCategories();

        setCategories(categoriesList);
      } catch {
        // catch vazio, apenas para capturar o erro, mas sem nada visual para o user
      } finally {
        setIsLoadingCategories(false);
      }
    };

    loadCategories();
  }, []);

  const isFormValid = name && errors.length === 0;

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);

    if (!event.target.value) {
      addError({ field: 'name', message: 'Nome é obrigatório' });
    } else {
      removeError('name');
    }
  };

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);

    if (event.target.value && !isValidEmail(event.target.value)) {
      addError({ field: 'email', message: 'Formato inválido de email' });
    } else {
      removeError('email');
    }
  };

  function handleChangePhone(event: ChangeEvent<HTMLInputElement>) {
    setPhone(event.target.value);
  }

  async function handleSubmit(event: FormEvent) {
    setIsSubmitting(true);
    event.preventDefault();

    if (errors.length > 0) {
      return;
    }

    await onSubmit({
      name,
      email,
      phone,
      categoryId,
    });

    setIsSubmitting(false);
  }

  return (
    <FormContainer onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          placeholder="Nome *"
          value={name}
          onChange={handleChangeName}
          error={!!getErrorMessageByFieldName('name')}
          disabled={isSubmitting}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          placeholder="Email"
          onChange={handleChangeEmail}
          value={email}
          type="email"
          error={!!getErrorMessageByFieldName('email')}
          disabled={isSubmitting}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Telefone"
          value={formatPhone(phone)}
          onChange={handleChangePhone}
          maxLength={15}
          disabled={isSubmitting}
        />
      </FormGroup>

      <FormGroup isLoading={isLoadingCategories}>
        <Select
          value={categoryId}
          onChange={event => setCategoryId(event.target.value)}
          disabled={isLoadingCategories || isSubmitting}
        >
          <option value="">Sem categoria</option>
          {categories.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button disabled={!isFormValid} isLoading={isSubmitting} type="submit">
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </FormContainer>
  );
}
