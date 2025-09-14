
import React, { useState } from 'react';
import './stylesp.css';

function Registration() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  // const [userType, setUserType] = useState(''); // New state for user type
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegistration = async () => {
    if (!username || !password || !email || !country || !address || !gender){
      setErrorMessage('Please fill in all fields');
      return;
    }

    try {
      const response = await fetch('http://localhost:3133/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
          email,
          country,
          address,
          gender,
          // Include userType in the payload if needed
        }),
      });
      if (response.ok) {
        // Registration successful
        alert('Registration successful!');
        // Redirect to login page after successful registration
        window.location.href = '/authpage';  // Uncomment this if you want to navigate to the login page
      } else {
        const errorData = await response.json();
        setErrorMessage(`Failed to register user: ${errorData.message}`);
        console.error('Failed to register user', errorData);
      }
    } catch (error) {
      setErrorMessage('Error registering user. Please try again later.');
      console.error('Error registering user', error);
    }
  };

  return (
    <div className="reg-container">
      <center><h2>Registration</h2></center>
      <label>Username <span style={{ color: 'red' }}>*</span></label>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label>Password <span style={{ color: 'red' }}>*</span></label>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <label>Email <span style={{ color: 'red' }}>*</span></label>
      <input className='arr'
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Country <span style={{ color: 'red' }}>*</span></label>
      <input
        type="text"
        placeholder="Country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <label>Address <span style={{ color: 'red' }}>*</span></label>
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <label style={{ marginRight: '10px' }}>Gender <span style={{ color: 'red' }}>*</span></label>
        <label><input type="radio" name="gender" value="male" checked={gender === 'male'} onChange={() => setGender('male')} /> Male</label>
        <label style={{ marginLeft: '10px', marginRight: '10px' }}><input type="radio" name="gender" value="female" checked={gender === 'female'} onChange={() => setGender('female')} /> Female</label>
        <label><input type="radio" name="gender" value="other" checked={gender === 'other'} onChange={() => setGender('other')} /> Other</label>
      </div>

      {/* <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
        <label style={{ marginRight: '10px' }}>User Type <span style={{ color: 'red' }}>*</span></label>
        <label><input type="radio" name="userType" value="job-seeker" checked={userType === 'job-seeker'} onChange={() => setUserType('job-seeker')} /> Job Seeker</label>
        <label style={{ marginLeft: '10px', marginRight: '10px' }}><input type="radio" name="userType" value="job-holder" checked={userType === 'job-holder'} onChange={() => setUserType('job-holder')} /> Job Holder</label>
      </div> */}

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <center>
        <button onClick={handleRegistration}>Register</button>
      </center>
    </div>
  );
}

export default Registration;
