import React from 'react';

function About() {
  return (
    <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#f7f7f7' }}>
      <h1 style={{ marginBottom: '20px', color: '#333' }}>About Career Gateway</h1>
      <p style={{ marginBottom: '20px', color: '#666' }}>Welcome to Career Gateway, your gateway to a successful career! We are dedicated to helping you find the perfect job or internship opportunity.</p>
      
      <div style={{ textAlign: 'left', marginLeft: '40px', marginBottom: '20px', color: '#444' }}>
        <h2>Our Services</h2>
        <ul>
          <li><strong>Home:</strong> Discover the latest job and internship opportunities.</li>
          <li><strong>Job Search:</strong> Search for jobs based on your preferences.</li>
          <li><strong>Internship:</strong> Explore internship opportunities to kickstart your career.</li>
          <li><strong>Job Listing:</strong> Browse through our extensive job listings.</li>
          <li><strong>Job Search:</strong> Use our advanced search to find the perfect job for you.</li>
          <li><strong>Resume Upload:</strong> Upload your resume to increase your chances of getting hired.</li>
        </ul>
      </div>

      <h2 style={{ marginBottom: '20px', color: '#333' }}>Our Mission</h2>
      <p style={{ marginBottom: '20px', color: '#666' }}>Our mission is to connect talented individuals with top companies and help them achieve their career goals.</p>

      <h2 style={{ marginBottom: '20px', color: '#333' }}>Get Started</h2>
      <p>Ready to take the next step in your career? Sign up for Career Gateway today!</p>
    </div>
  );
}

export default About;
