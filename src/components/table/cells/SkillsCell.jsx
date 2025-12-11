const SkillChip = ({ skill }) => (
  <span className="skill-chip">{skill}</span>
);

const SkillsCell = ({ skills }) => (
  <div className="skills-wrapper">
    {skills.map((skill, index) => (
      <SkillChip key={index} skill={skill} />
    ))}
  </div>
);

export default SkillsCell;
