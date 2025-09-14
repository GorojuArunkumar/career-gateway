// //authpage
// import React, { useState } from 'react';
// import Registration from './Registration';
// import Navigation from './Navigation ';
// import './stylesp.css';
// import Allcom from './Allcom';

// function AuthPage() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isNewUser, setIsNewUser] = useState(false);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     try {
//       const response = await fetch('http://localhost:3133/users'); // Assuming your JSON server is running on localhost port 3000
//       const users = await response.json();

//       const user = users.find(user => user.username === username && user.password === password);

//       if (user) {
//         setIsLoggedIn(true);
//       } else {
//         alert('Invalid credentials. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error fetching users:', error);
//       alert('An error occurred. Please try again later.');
//     }
//   };

//   const handleRegistration = () => {
//     setIsNewUser(true);
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//   };

//   return (
//     <div className="auth-page">
//       {!isLoggedIn && !isNewUser && (
//         <div className="login-container">
//           <div className="login-form">
//             <center><h2>Login</h2></center>
//             <label>UserName<span style={{ color: 'red' }}>*</span></label>
//             <input 
//               style={{width:'400px'}}
//               type="text"
//               placeholder="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//             <label>Password<span style={{ color: 'red' }}>*</span></label>
//             <input
//               style={{width:'400px'}}
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <center>
//               <button onClick={handleLogin}>Login</button>
//               <p>New user? <button onClick={handleRegistration}>Register here</button></p>
             
//             </center>
//           </div>
//           <div className="login-image">
//             <img src="https://qph.cf2.quoracdn.net/main-qimg-2f19cab3752df2e074a7864073837660-lq" alt="Login Image" height='350px' width='400px'/>
//           </div>
//         </div>
//       )}
//       {!isLoggedIn && isNewUser && <Registration onCancel={() => setIsNewUser(false)} />}
//       {isLoggedIn && <Allcom/>}
//     </div>
//   );
// }

// export default AuthPage;
import React, { useState } from 'react';
import Registration from './Registration';
import Navigation from './Navigation ';
import './stylesp.css';
import Allcom from './Allcom';

function AuthPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password) {
      // Automatically log in if both fields are filled
      setIsLoggedIn(true);
    } else {
      alert('Please enter both username and password.');
    }
  };

  const handleRegistration = () => {
    setIsNewUser(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="auth-page">
      {!isLoggedIn && !isNewUser && (
        <div className="login-container">
          <div className="login-form">
            <center><h2>Login</h2></center>
            <label>UserName<span style={{ color: 'red' }}>*</span></label>
            <input 
              style={{width:'400px'}}
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Password<span style={{ color: 'red' }}>*</span></label>
            <input
              style={{width:'400px'}}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <center>
              <button onClick={handleLogin}>Login</button>
              <p>New user? <button onClick={handleRegistration}>Register here</button></p>
            </center>
          </div>
          <div className="login-image">
            <img src="https://qph.cf2.quoracdn.net/main-qimg-2f19cab3752df2e074a7864073837660-lq" alt="Login Image" height='350px' width='400px'/>
          </div>
        </div>
      )}
      {!isLoggedIn && isNewUser && <Registration onCancel={() => setIsNewUser(false)} />}
      {isLoggedIn && <Allcom />}
    </div>
  );
}

export default AuthPage;
