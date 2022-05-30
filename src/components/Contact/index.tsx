import { Link } from 'react-router-dom';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import { Container } from './styles';

export function Contact() {
  return (
    <Container>
      <div className="info">
        <div className="contact-name">
          <strong>Matheus Chein</strong>
          <small>instagram</small>
        </div>

        <span>matheuschein@gmail.com</span>
        <span>(21) 99999-9999</span>
      </div>

      <div className="actions">
        <Link to="/edit/123">
          <img src={edit} alt="edit" />
        </Link>
        <button type="button">
          <img src={trash} alt="delete" />
        </button>
      </div>
    </Container>
  );
}
