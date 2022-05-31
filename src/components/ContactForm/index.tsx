import { ChangeEvent, FormEvent, useState } from 'react';
import { useErrors } from '../../hooks/useErrors';
import { formatPhone } from '../../utils/formatPhone';
import { isValidEmail } from '../../utils/isValidEmail';
import { Button } from '../Button';
import { FormGroup } from '../FormGroup';
import { Input } from '../Input';
import { Select } from '../Select';
import { FormContainer, ButtonContainer } from './styles';

interface ContactFormProps {
  buttonLabel: string;
}

export function ContactForm({ buttonLabel }: ContactFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const { addError, removeError, getErrorMessageByFieldName, errors } =
    useErrors();

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

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (errors.length > 0) {
      return;
    }

    console.log({ name, email, phone, category });
  }

  return (
    <FormContainer onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          placeholder="Nome *"
          value={name}
          onChange={handleChangeName}
          error={!!getErrorMessageByFieldName('name')}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          placeholder="Email"
          onChange={handleChangeEmail}
          value={email}
          type="email"
          error={!!getErrorMessageByFieldName('email')}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Telefone"
          value={formatPhone(phone)}
          onChange={handleChangePhone}
          maxLength={15}
        />
      </FormGroup>

      <FormGroup>
        <Select
          value={category}
          onChange={event => setCategory(event.target.value)}
        >
          <option value="" disabled>
            Categoria
          </option>
          <option value="instagram">Instagram</option>
          <option value="discord">Discord</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button disabled={!isFormValid} type="submit">
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </FormContainer>
  );
}
