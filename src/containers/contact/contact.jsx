import Form from '../../components/form/form';
import './contact.scss';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <h2 className="contact__title">Contactez-moi</h2>
        <p className="contact__subtitle">
          Vous avez une question ou un projet à discuter ? N'hésitez pas à me contacter via le formulaire ci-dessous.
        </p>
        <Form />
      </div>
    </section>
  );
};

export default Contact;
