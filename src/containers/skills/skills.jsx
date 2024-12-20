import ToolsGrid from '../../components/skillslist/tools';
import LanguagesGrid from '../../components/skillslist/languages';
import './skills.scss';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2 className="skills__title">Mes compétences</h2>
      <div className="skills__display">
        <div className="skills__card skills__tools">
          <h3 className="skills__card-title">Logiciels</h3>
          <ToolsGrid />
        </div>
        <div className="skills__card skills__languages">
          <h3 className="skills__card-title">Langages / Frameworks</h3>
          <LanguagesGrid />
        </div>
      </div>
    </section>
  );
};

export default Skills;
