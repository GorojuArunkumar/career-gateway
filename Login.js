// // Login.js
// import React, { useState } from 'react';

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [isRegistered, setIsRegistered] = useState(false);

//   const handleLogin = async () => {
//     try {
//       const response = await fetch(`http://localhost:3000/users?username=${username}&password=${password}`);
//       if (response.ok) {
//         const data = await response.json();
//         if (data.length === 1) {
//           console.log('Login successful');
//           // Set isRegistered to true if user is found in database
//           setIsRegistered(true);
//         } else {
//           console.error('Invalid username or password');
//         }
//       } else {
//         console.error('Failed to login');
//       }
//     } catch (error) {
//       console.error('Error logging in', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleLogin}>{isRegistered ? 'Login' : 'New User? Register here'}</button>
//       {!isRegistered && <p>New user? <a href="/register">Register here</a></p>}
//       <button onClick={handleLogin}>{isRegistered ? 'Login' : 'New User? Register here'}</button>
//       {!isRegistered && <p>New user? <a href="/register">Register here</a></p>}

//     </div>
    

//   );
// }

// export default Login;


