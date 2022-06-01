import { Link } from 'react-router-dom';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import { formatPhone } from '../../utils/formatPhone';
import { Container } from './styles';

export interface ContactData {
  id: string;
  name: string;
  email: string;
  phone: string;
  category_name?: string | null;
}

export function Contact({
  id,
  name,
  phone,
  email,
  category_name = null,
}: ContactData) {
  return (
    <Container>
      <div className="info">
        <div className="contact-name">
          <strong>{name}</strong>
          {category_name && <small>{category_name}</small>}
        </div>

        <span>{email}</span>
        <span>{formatPhone(phone)}</span>
      </div>

      <div className="actions">
        <Link to={`/edit/${id}`}>
          <img src={edit} alt="edit" />
        </Link>
        <button type="button">
          <img src={trash} alt="delete" />
        </button>
      </div>
    </Container>
  );
}
