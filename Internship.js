import React from 'react';
import { Link } from 'react-router-dom';

function Internship() {
  const internshipDetails = {
    title: 'Software Development Internship',
    company: 'ABC Corporation',
    location: 'San Francisco, CA',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at ligula nec velit sodales tincidunt.',
    requirements: '- Currently enrolled in a Bachelor’s or Master’s degree program in Computer Science or related field\n- Proficient in Java, C++, or Python\n- Strong problem-solving skills',
    duration: '3 months',
    startDate: 'June 1, 2024',
    endDate: 'August 31, 2024',
    deadline: 'April 30, 2024',
    salary: 'Paid internship',
    applyLink: 'https://amazon.com/apply',
  };

  const { title, company, location, description, requirements, duration, startDate, endDate, deadline, salary, applyLink } = internshipDetails;

  return (
    <div className="internship-page" style={{ padding: '20px' }}>
      <h1>{title}</h1>
      <h2>{company} - {location}</h2>
      <div className="internship-details" style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '5px', marginTop: '20px' }}>
        <h3>Description:</h3>
        <p>{description}</p>
        <h3>Requirements:</h3>
        <p>{requirements}</p>
        <h3>Duration:</h3>
        <p>{duration}</p>
        <h3>Dates:</h3>
        <p>{startDate} - {endDate}</p>
        <h3>Application Deadline:</h3>
        <p>{deadline}</p>
        <h3>Salary:</h3>
        <p>{salary}</p>
        <a href={"https://workforindia.niti.gov.in/intern/InternshipEntry/PCInternshipEntry.aspx"} className="btn" style={{ display: 'inline-block', padding: '8px 20px', marginTop: '20px', backgroundColor: '#007bff', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}>Apply Now</a>
      </div>
      <Link to="/" className="back-btn" style={{ position: 'fixed', bottom: '20px', right: '20px', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}>Back</Link>
    </div>
  );
}

export default Internship;
