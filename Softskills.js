import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const skillsData = [
  { id: 1, name: 'Communication Skills', description: 'Ability to effectively convey ideas and information.' },
  { id: 2, name: 'Teamwork', description: 'Ability to work collaboratively with others towards a common goal.' },
  { id: 3, name: 'Problem Solving', description: 'Ability to find solutions to difficult or complex issues.' },
  { id: 4, name: 'Time Management', description: 'Ability to manage time effectively and prioritize tasks.' },
  { id: 5, name: 'Leadership', description: 'Ability to lead, motivate, and inspire others.' },
];

function SoftSkills() {
  const [skills, setSkills] = useState(skillsData.map(skill => ({ ...skill, rating: 0 })));

  const handleRatingChange = (id, rating) => {
    setSkills(prevSkills => prevSkills.map(skill =>
      skill.id === id ? { ...skill, rating } : skill
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can send the skills data to your server or process it as needed
    console.log(skills);
  };

  return (
    <div className="container">
      <h1 className="my-4">Soft Skills Assessment</h1>
      <form onSubmit={handleSubmit}>
        {skills.map(skill => (
          <div key={skill.id} className="form-group">
            <label>{skill.name}</label>
            <p>{skill.description}</p>
            <input
              type="range"
              className="form-range"
              min="0"
              max="5"
              step="1"
              value={skill.rating}
              onChange={(e) => handleRatingChange(skill.id, parseInt(e.target.value))}
            />
            <small>Rating: {skill.rating}</small>
          </div>
        ))}
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default SoftSkills;
