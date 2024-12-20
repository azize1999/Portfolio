import { useParams, Link } from 'react-router-dom';
import Error from '../error/index';
import Projects from '../../data/projects.json';
import Tag from '../../components/tag/tag'; 
import './project.scss';

const Project = () => {
  const { id } = useParams();
  const project = Projects.find((proj) => proj.id === id);

  if (!project) {
    return <Error />;
  }

  return (
    <main className="project">
      <Header title={project.title} />
      <section className="project__section">
        <ProjectDetails project={project} />
        <ProjectImage imageSrc={project.pictures[0]} title={project.title} />
      </section>
    </main>
  );
};

const Header = ({ title }) => (
  <header className="project__header">
    <Link to="/" className="project__header-back">
      &larr; Retour
    </Link>
    <h1 className="project__header-title">{title}</h1>
  </header>
);

const ProjectDetails = ({ project }) => (
  <div className="project__details">
    <h2 className="project__details-heading">Le projet</h2>
    <p className="project__details-text">{project.description}</p>

    <h3 className="project__details-heading">La mission</h3>
    <p className="project__details-text">{project.mission}</p>

    <h3 className="project__details-heading">Compétences acquises</h3>
    <ul className="project__details-list">
      {project.competences.map((competence, index) => (
        <li key={index} className="project__details-item">
          {competence}
        </li>
      ))}
    </ul>

    <Tag />

    <ProjectLinks github={project.github} site={project.site} />
  </div>
);

const ProjectLinks = ({ github, site }) => (
  <div className="project__links">
    <a href={github} target="_blank" rel="noopener noreferrer" className="project__link-button">
      <span>🔗</span> Code GitHub
    </a>
    {site && (
      <a href={site} target="_blank" rel="noopener noreferrer" className="project__link-button">
        <span>🌐</span> Démo du site
      </a>
    )}
  </div>
);

const ProjectImage = ({ imageSrc, title }) => (
  <div className="project__image-container">
    <img src={imageSrc} alt={`Aperçu du projet ${title}`} className="project__image" />
  </div>
);

export default Project;
