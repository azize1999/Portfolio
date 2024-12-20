import './error.scss';
import ErrorImage from '../../img/error/404-page-not-found.png';

const Error = () => {
  return (
    <main className="error">
      <img
        className="error__image"
        src={ErrorImage}
        alt="Erreur 404"
      />
      <h1 className="error__title">404 - Page non trouvée</h1>
      <p className="error__text">
        Désolé, la page que vous recherchez semble introuvable.
      </p>
      <a href="/" className="error__button">
        Retourner à l'accueil
      </a>
    </main>
  );
};

export default Error;
