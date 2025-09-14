import React, { useState } from 'react';

const ResumePage = () => {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: ''
  });
  const [education, setEducation] = useState('');
  const [experience, setExperience] = useState('');
  const [skills, setSkills] = useState('');
  const [generatedResume, setGeneratedResume] = useState('');

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value
    }));
  };

  const handleGenerateResume = () => {
    const resume = `
      ----------------------------------------
      |              Resume                  |
      ----------------------------------------
      Full Name: ${personalInfo.fullName}
      Email: ${personalInfo.email}
      Phone: ${personalInfo.phone}
      Address: ${personalInfo.address}

      Education:
      - ${education}
      (Include details about your academic background, such as degree, major, institution, and graduation date)

      Experience:
      - ${experience}
      (Describe your work experience, including job titles, company names, dates of employment, and key responsibilities)

      Skills:
      - ${skills}
      (List your skills, such as technical skills, soft skills, and any certifications or licenses)
    `;

    setGeneratedResume(resume);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Resume Writing</h1>
      <label>Full Name:</label>
      <input
        type="text"
        name="fullName"
        value={personalInfo.fullName}
        onChange={handlePersonalInfoChange}
        style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
      />
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={personalInfo.email}
        onChange={handlePersonalInfoChange}
        style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
      />
      <label>Phone:</label>
      <input
        type="tel"
        name="phone"
        value={personalInfo.phone}
        onChange={handlePersonalInfoChange}
        style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
      />
      <label>Address:</label>
      <textarea
        name="address"
        value={personalInfo.address}
        onChange={handlePersonalInfoChange}
        style={{ width: '100%', height: '100px', marginBottom: '10px', padding: '5px' }}
      ></textarea>
      <label>Education:</label>
      <textarea
        value={education}
        onChange={(e) => setEducation(e.target.value)}
        style={{ width: '100%', height: '100px', marginBottom: '10px', padding: '5px' }}
      ></textarea>
      <label>Experience:</label>
      <textarea
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
        style={{ width: '100%', height: '100px', marginBottom: '10px', padding: '5px' }}
      ></textarea>
      <label>Skills:</label>
      <textarea
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
        style={{ width: '100%', height: '100px', marginBottom: '10px', padding: '5px' }}
      ></textarea>
      <button onClick={handleGenerateResume} style={{ padding: '5px 10px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}>Generate Resume</button>

      {generatedResume && (
        <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px' }}>
          <h2>Generated Resume</h2>
          <pre>{generatedResume}</pre>
        </div>
      )}
    </div>
  );
};

export default ResumePage;
