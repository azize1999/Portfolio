import Projectslist from '../../components/project/projectlist';
import './projects.scss';

const Projects = () => {
  return (
    <section className="home__projects">
      <h2 id="projets" className="home__projects__title">
        Mes Projets
      </h2>
      <div className="home__projects__content">
        <Projectslist />
      </div>
    </section>
  );
};

export default Projects;
