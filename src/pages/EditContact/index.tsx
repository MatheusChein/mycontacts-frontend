import { ContactForm } from '../../components/ContactForm';
import { PageHeader } from '../../components/PageHeader';

export function EditContact() {
  return (
    <>
      <PageHeader title="Editar contato" />
      <ContactForm
        buttonLabel="Salvar alterações"
        onSubmit={async () => {
          console.log('hello');
        }}
      />
    </>
  );
}
