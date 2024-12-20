import MaPhoto from '../../img/photo/moi.webp';
import GitHub from '../../img/icones/github.png';
import LinkedIn from '../../img/icones/linkedin.png';
import './introduction.scss';

const Introduction = () => {
  return (
    <section className="intro">
      <div className="intro__content">
        <h2 className="intro__title">À propos de moi</h2>
        <p className="intro__description">
         
          Ayant passé 11 années dans le secteur du Tourisme, j'ai décidé de me reconvertir professionnellement, animé par ma passion pour les nouvelles technologies.
        </p>
        <p className="intro__description">
        J'ai suivi des cours desquels j'ai développé des compétences solides en HTML, CSS, JavaScript et React.
        </p>
        <p className="intro__description">  
        Je suis motivé par l'idée d'explorer de nouvelles opportunités et d'approfondir mes compétences en développement web.
        </p>
        <div className="intro__links">
          <a href="https://github.com/xxxxxxxxx" target="blank" className="intro__link">
            <img src={GitHub} alt="Lien vers mon profil GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/xxxxxx/" target="blank" className="intro__link">
            <img src={LinkedIn} alt="Lien vers mon profil LinkedIn" />
          </a>
        </div>
      </div>
      <div className="intro__photo-container">
        <img className="intro__photo" src={MaPhoto} alt="Portrait de Aziz Chatti" />
        <h3 className="intro__name">Aziz Chatti</h3>
        <h4 className="intro__role">Intégrateur Front-End</h4>
      </div>
    </section>
  );
};

export default Introduction;
