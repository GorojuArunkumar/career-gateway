import React, { useState } from 'react';

function Profile({ user }) {
  const [isOpen, setIsOpen] = useState(false);
  const [resume, setResume] = useState(null);

  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    setResume(file);
  };

  const handleSubmit = () => {
    // Implement logic to upload resume (e.g., using fetch or a library like Axios)
    console.log('Uploading resume:', resume);
  };

  return (
    <div style={styles.container}>
      <div style={styles.profileButton} onClick={() => setIsOpen(!isOpen)}>
        <img src="https://example.com/human-icon.png" alt="Human Icon" style={styles.icon} />
      </div>
      {isOpen && (
        <div style={styles.profileCard}>
          <h2>Profile</h2>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Contact: {user.contact}</p>
          <p>Resume: {resume ? resume.name : 'No resume uploaded'}</p>
          <input type="file" onChange={handleResumeChange} />
          <button onClick={handleSubmit}>Upload Resume</button>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    position: 'fixed',
    top: '20px',
    right: '20px',
    zIndex: '9999',
  },
  profileButton: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: '#333',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
  icon: {
    width: '30px',
    height: '30px',
    fill: '#fff',
  },
  profileCard: {
    position: 'absolute',
    top: '60px',
    right: '0',
    width: '250px',
    backgroundColor: '#fff',
    padding: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    borderRadius: '5px',
    zIndex: '9999',
  },
};

export default Profile;
