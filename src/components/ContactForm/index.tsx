import { ChangeEvent, FormEvent, useState } from 'react';
import { isValidEmail } from '../../utils/isValidEmail';
import { Button } from '../Button';
import { FormGroup } from '../FormGroup';
import { Input } from '../Input';
import { Select } from '../Select';
import { FormContainer, ButtonContainer } from './styles';

interface ContactFormProps {
  buttonLabel: string;
}
interface Error {
  field: string;
  message: string;
}

export function ContactForm({ buttonLabel }: ContactFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const [errors, setErrors] = useState<Error[]>([]);

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);

    if (!event.target.value) {
      setErrors(prevState => [
        ...prevState,
        { field: 'name', message: 'Nome é obrigatório' },
      ]);
    } else {
      setErrors(prevState => prevState.filter(error => error.field !== 'name'));
    }
  };

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);

    if (event.target.value && !isValidEmail(event.target.value)) {
      const emailErrorAlreadyExists = errors.find(
        error => error.field === 'email',
      );

      if (emailErrorAlreadyExists) {
        return;
      }

      setErrors(prevState => [
        ...prevState,
        { field: 'email', message: 'Formato inválido de email' },
      ]);
    } else {
      setErrors(prevState =>
        prevState.filter(error => error.field !== 'email'),
      );
    }
  };

  function getErrorMessageByFieldName(fieldName: string) {
    return errors.find(error => error.field === fieldName)?.message;
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    console.log({ name, email, phone, category });
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          placeholder="Nome"
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
          value={phone}
          onChange={event => setPhone(event.target.value)}
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
        <Button type="submit">{buttonLabel}</Button>
      </ButtonContainer>
    </FormContainer>
  );
}
