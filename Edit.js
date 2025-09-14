// src/components/UserEdit.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UserEdit = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    country: '',
    address: '',
    gender: ''
  });
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3133/users/${id}`)
      .then(response => {
        setUser(response.data);
        setLoading(false);
      })
      .catch(error => {
        alert('Error fetching user: ' + error.message);
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3133/users/${id}`, user)
      .then(() => navigate('/'))
      .catch(error => alert('Error updating user: ' + error.message));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit User</h2>
      <div>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Country</label>
        <input
          type="text"
          name="country"
          value={user.country}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Address</label>
        <input
          type="text"
          name="address"
          value={user.address}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Gender</label>
        <input
          type="text"
          name="gender"
          value={user.gender}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Update</button>
    </form>
  );
};

export default UserEdit;
