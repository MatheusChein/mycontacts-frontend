import { ContactForm } from '../../components/ContactForm';
import { PageHeader } from '../../components/PageHeader';
import ContactsService from '../../services/ContactsService';

export interface handleSubmitData {
  name: string;
  email: string;
  phone: string;
  categoryId: string;
}

export function NewContact() {
  async function handleSubmit({
    name,
    email,
    phone,
    categoryId,
  }: handleSubmitData) {
    try {
      const response = await ContactsService.createContact({
        name,
        email,
        phone,
        category_id: categoryId,
      });

      console.log(response);
    } catch {}
  }

  return (
    <>
      <PageHeader title="Novo contato" />
      <ContactForm buttonLabel="Cadastrar" onSubmit={handleSubmit} />
    </>
  );
}
