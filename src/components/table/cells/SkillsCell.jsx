const SkillsCell = ({ skills }) => (
  <div className="hira-skills-wrapper">
    {skills.map((skill, index) => (
      <span key={index} className="hira-skill-chip">{skill}</span>
    ))}
  </div>
);

export default SkillsCell;
