import { useState } from 'react';
import { Link } from 'react-router-dom';
import Projects from '../../data/projects.json';
import './projectlist.scss';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('Tout');

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const filteredProjects = filter === 'Tout' 
    ? Projects 
    : Projects.filter((project) => project.category === filter);

  return (
    <div className="projectsGrid__container">
      <Filter onFilterChange={handleFilterChange} />
      <ProjectsGrid projects={filteredProjects} />
    </div>
  );
};

const Filter = ({ onFilterChange }) => {
  return (
    <div className="filter__container">
      <select className="filter__container-bar" onChange={(e) => onFilterChange(e.target.value)}>
        <option value="Tout">Tout</option>
        <option value="HTML">HTML</option>
        <option value="JavaScript">JavaScript</option>
        <option value="React">React</option>
        <option value="Debug">Debug</option>
        <option value="SEO">SEO</option>
      </select>
    </div>
  );
};

const ProjectsGrid = ({ projects }) => {
  return (
    <div className="grid__project">
      {projects.map((project) => (
        <Link key={project.id} to={`/projects/${project.id}`} className="grid__project__card">
          <img className="grid__project__card-img" src={project.cover} alt={project.alt} />
          <h3 className="grid__project__card-title">{project.title}</h3>
        </Link>
      ))}
    </div>
  );
};

export default ProjectsPage;
