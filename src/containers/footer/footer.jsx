import { Link } from 'react-router-dom';
import './footer.scss';

const Footer = () => {
 
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer">
      <div className="footer__left">
        <Link className="link-theme" to="/" onClick={handleClick}>
          Accueil
        </Link>
      </div>
      <div className="footer__middle">
        <p>Tous droits réservés © 2024 - Aziz Chatti</p>
      </div>
    </footer>
  );
};

export default Footer;
