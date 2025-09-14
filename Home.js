import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {
  return (
    <div className="home">
      <div className="header">
        <center>
          <h1>Welcome to Career Gateway</h1>
          <p>Your gateway to a successful career !</p>
        </center>
      </div>
      <div className="content" style={{ display: 'flex' }}>
        <div className="image-container" style={{ flex: '1', textAlign: 'center', marginLeft: '200px' }}>
          <img
            src="https://www.sapphiresolutions.net/images/job_new_portfolio/job_portal_about.svg"
            alt="Career Gateway"
            height='300px'
            width='800px'
            className="image"
          />
        </div>
        <div className="side-box" style={{ flex: '1', backgroundColor: '#f8f9fa', padding: '20px', margin: '20px', borderRadius: '5px', marginTop: '-40px' }}>
          {/* <h3>Resources</h3> */}
          <ul style={{ listStyleType: 'none', padding: '0' }}>
            <li><Link to="/interviewskills" className="btn" style={{ display: 'block', margin: '5px 0', backgroundColor: 'red', color: 'white', textDecoration: 'none', borderRadius: '5px', padding: '5px 10px', transition: 'transform 0.3s' }}>Interview Skills</Link></li>
            <li><Link to="/mock" className="btn" style={{ display: 'block', margin: '5px 0', backgroundColor: 'red', color: 'white', textDecoration: 'none', borderRadius: '5px', padding: '5px 10px', transition: 'transform 0.3s' }}>Mock Interviews</Link></li>
            <li><Link to="/resumewriting" className="btn" style={{ display: 'block', margin: '5px 0', backgroundColor: 'red', color: 'white', textDecoration: 'none', borderRadius: '5px', padding: '5px 10px', transition: 'transform 0.3s' }}>Resume Writing</Link></li>
            <li><Link to="/communication" className="btn" style={{ display: 'block', margin: '5px 0', backgroundColor: 'red', color: 'white', textDecoration: 'none', borderRadius: '5px', padding: '5px 10px', transition: 'transform 0.3s' }}>Communication</Link></li>
            <li><Link to="/softskills" className="btn" style={{ display: 'block', margin: '5px 0', backgroundColor: 'red', color: 'white', textDecoration: 'none', borderRadius: '5px', padding: '5px 10px', transition: 'transform 0.3s' }}>SoftSkills Assessment </Link></li>
            <li><Link to="/careerevent" className="btn" style={{ display: 'block', margin: '5px 0', backgroundColor: 'red', color: 'white', textDecoration: 'none', borderRadius: '5px', padding: '5px 10px', transition: 'transform 0.3s' }}>CareerEvent Calendar</Link></li>
            <li><Link to="/professionaldev" className="btn" style={{ display: 'block', margin: '5px 0', backgroundColor: 'red', color: 'white', textDecoration: 'none', borderRadius: '5px', padding: '5px 10px', transition: 'transform 0.3s' }}>Professional Development</Link></li>
          </ul>
        </div>
      </div>
      <div className="cta" style={{ textAlign: 'center', marginTop: '50px' }}>
        <Link
          to="/jobs"
          className="btn"
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            margin: '10px',
            backgroundColor: 'blue',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
            transition: 'background-color 0.3s, transform 0.3s',
          }}
        >
          View Jobs
        </Link>
        <Link
          to="/internship"
          className="btn"
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            margin: '10px',
            backgroundColor: 'blue',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
            transition: 'background-color 0.3s, transform 0.3s',
          }}
        >
          Post Internship
        </Link>
      </div>
    </div>
  );
}

export default Home;
