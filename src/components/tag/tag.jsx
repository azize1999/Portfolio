import { useParams } from 'react-router-dom';
import Projects from '../../data/projects.json';
import './tag.scss';

const Tag = () => {
  const { id } = useParams();
  const project = Projects.find((project) => project.id === id);

  return (
    <div>
      <ul className="tags">
        {project.tags.map((tag, index) => (
          <li key={index} className="tag">
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tag;
