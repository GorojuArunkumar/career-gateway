import React, { useState } from 'react';

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'G.Arunkumar',
    email: 'arun@gmail.com',
    phone: '1234567890',
    address: 'Shive street,Hyderabad,India',
    skills: 'React, Node.js, MongoDB,Java',
    experience: '2 years',
    education: 'Bachelor\'s Degree in Computer Science',
    jobPreferences: 'Full-time, Software Developer, Remote',
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSaveChanges = () => {
    // Implement save changes logic here (e.g., update user profile on the server)
    setIsEditing(false);
  };

  return (
    <div className="profile-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className="profile-box" style={{ width: '50%', border: '1px solid #ccc', padding: '20px', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h2>User Profile</h2>
        <div className="profile-details" style={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', gap: '20px' }}>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLQFyHt4fjHt9ncwURGf8CoKIGM9XnrY_BCQ&s" alt="Profile" style={{ width: '200px', height: '200px', borderRadius: '50%' }} />
          </div>
          {isEditing ? (
            <div style={{ flex: '1' }}>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={userInfo.name}
                onChange={handleInputChange}
              />
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={userInfo.email}
                onChange={handleInputChange}
              />
              <label>Phone:</label>
              <input
                type="tel"
                name="phone"
                value={userInfo.phone}
                onChange={handleInputChange}
              />
              <label>Address:</label>
              <input
                type="text"
                name="address"
                value={userInfo.address}
                onChange={handleInputChange}
              />
              <label>Skills:</label>
              <input
                type="text"
                name="skills"
                value={userInfo.skills}
                onChange={handleInputChange}
              />
              <label>Experience:</label>
              <input
                type="text"
                name="experience"
                value={userInfo.experience}
                onChange={handleInputChange}
              />
              <label>Education:</label>
              <input
                type="text"
                name="education"
                value={userInfo.education}
                onChange={handleInputChange}
              />
              <label>Job Preferences:</label>
              <input
                type="text"
                name="jobPreferences"
                value={userInfo.jobPreferences}
                onChange={handleInputChange}
              />
              <button onClick={handleSaveChanges}>Save Changes</button>
            </div>
          ) : (
            <div style={{ flex: '1', textAlign: 'left' }}>
              <p><strong>Name:</strong> {userInfo.name}</p>
              <p><strong>Email:</strong> {userInfo.email}</p>
              <p><strong>Phone:</strong> {userInfo.phone}</p>
              <p><strong>Address:</strong> {userInfo.address}</p>
              <p><strong>Skills:</strong> {userInfo.skills}</p>
              <p><strong>Experience:</strong> {userInfo.experience}</p>
              <p><strong>Education:</strong> {userInfo.education}</p>
              <p><strong>Job Preferences:</strong> {userInfo.jobPreferences}</p>
              <button onClick={handleEditToggle}>Edit</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
