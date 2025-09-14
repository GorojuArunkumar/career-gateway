// import React from 'react';
// import dashboard from './dashboard.js';
// import dashboard from './Routerex.js/dashboard';
import React, { useState } from 'react';
    import { Link } from 'react-router-dom';
    
const Jobs=()=>{
  
    
      const [jobs, setJobs] = useState([
        { id: 1, title: 'Software Engineer', company: 'ABC Inc.', location: 'New York', salary: '$100,000', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 2, title: 'Web Developer', company: 'XYZ Corp.', location: 'San Francisco', salary: '$90,000', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { id: 3, title: 'Data Analyst', company: '123 Co.', location: 'Chicago', salary: '$80,000', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
      ]);
    
      const [filter, setFilter] = useState('');
      const [searchTerm, setSearchTerm] = useState('');
    
      const filteredJobs = jobs.filter(job => job.title.toLowerCase().includes(searchTerm.toLowerCase()));
    
      const handleFilterChange = (e) => {
        setFilter(e.target.value);
      };
    
      const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
      };
    
      return (
        <div style={styles.container}>
          <h1>Jobs</h1>
          <input type="text" placeholder="Search jobs" value={searchTerm} onChange={handleSearchChange} />
          <select value={filter} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="full-time">Full Time</option>
            <option value="part-time">Part Time</option>
            <option value="contract">Contract</option>
          </select>
          <div>
            {filteredJobs.map(job => (
              <div key={job.id} style={styles.job}>
                <h3>{job.title}</h3>
                <p>Company: {job.company}</p>
                <p>Location: {job.location}</p>
                <p>Salary: {job.salary}</p>
                <p>{job.description}</p>
                <hr />
              </div>
            ))}
          </div>
          <div style={styles.backButtonContainer}>
            <Link to="/" style={styles.backButton}>Back</Link>
          </div>
        </div>
      );
    }
    
    const styles = {
      container: {
        position: 'relative',
        padding: '20px',
        backgroundColor: '#f8f8f8',
      },
      job: {
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        marginBottom: '10px',
      },
      backButtonContainer: {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
      },
      backButton: {
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        borderRadius: '5px',
        textDecoration: 'none',
      },
    };
    
   
    
   
    

export default Jobs;