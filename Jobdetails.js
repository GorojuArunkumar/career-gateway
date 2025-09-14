// import React from 'react';

  

  // Use the useParams hook to get the job ID from the URL
 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function JobDetails() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3133/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users', error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3133/users/${id}`)
      .then(() => setUsers(users.filter(user => user._id !== id)))
      .catch(error => console.error('Error deleting user', error));
  };

  return (
    <div>
      <Link to="/registration">Add User</Link>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user._id}>
            {user.username} - {user.email}
            <Link to={"/edit"}>Edit</Link>
            <button onClick={() => handleDelete(user._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};



export default JobDetails;
