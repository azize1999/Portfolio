import { Link } from 'react-router-dom';
import Logo from '../../img/logo/logo.svg';
import Menu from '../../components/menu/menu';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={Logo} alt="Logo Aziz Chatti" />
        </Link>
      </div>
      <h1 className="header__title">Portfolio - Aziz Chatti</h1>
      <Menu />
    </header>
  );
};

export default Header;
