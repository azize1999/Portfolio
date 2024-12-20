import './menu.scss';

const Menu = () => {
  return (
    <nav className="header__menu">
      <ul>
        <li>
          <a className="link-theme" href="/#a-propos">
            À PROPOS
          </a>
        </li>
        <li>
          <a className="link-theme" href="/#skills">
            COMPÉTENCES
          </a>
        </li>
        <li>
          <a className="link-theme" href="/#projets">
            PROJETS
          </a>
        </li>
        <li>
          <a className="link-theme" href="/#contact">
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
