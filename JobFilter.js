import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const jobsData = [
  { id: 1, title: 'software developer', company: 'google', location: 'hyderabad', role: 'Full Stack Developer' },
  { id: 2, title: 'Data Analyst', company: 'google', location: 'San Francisco', role: 'Data Analyst' },
  { id: 3, title: 'Web Designer', company: 'google', location: 'Chicago', role: 'Frontend Developer' },
  { id: 1, title: 'software developer', company: 'google', location: 'hyderabad', role: 'Full Stack Developer' },
  { id: 2, title: 'Data Analyst', company: 'google', location: 'San Francisco', role: 'Data Analyst' },
  { id: 1, title: 'software developer', company: 'google', location: 'hyderabad', role: 'Full Stack Developer' },
  { id: 2, title: 'Data Analyst', company: 'google', location: 'San Francisco', role: 'Data Analyst' },
  { id: 1, title: 'software developer', company: 'google', location: 'hyderabad', role: 'Full Stack Developer' },
  { id: 2, title: 'Data Analyst', company: 'google', location: 'San Francisco', role: 'Data Analyst' },
  { id: 1, title: 'software developer', company: 'google', location: 'hyderabad', role: 'Full Stack Developer' },
  { id: 2, title: 'Data Analyst', company: 'google', location: 'San Francisco', role: 'Data Analyst' },
];

function JobFilterPage() {
  const [locationFilter, setLocationFilter] = useState('');
  const [titleFilter, setTitleFilter] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [filteredJobs, setFilteredJobs] = useState(jobsData);

  const handleLocationChange = (e) => {
    setLocationFilter(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitleFilter(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRoleFilter(e.target.value);
  };

  const handleFilter = () => {
    let filtered = jobsData;

    if (locationFilter) {
      filtered = filtered.filter(job => job.location.toLowerCase().includes(locationFilter.toLowerCase()));
    }

    if (titleFilter) {
      filtered = filtered.filter(job => job.title.toLowerCase().includes(titleFilter.toLowerCase()));
    }

    if (roleFilter) {
      filtered = filtered.filter(job => job.role === roleFilter);
    }

    setFilteredJobs(filtered);
  };

  return (
    <div className="container">
      <h1 className="my-4">Job Filter</h1>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Filter Jobs</h5>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input type="text" className="form-control" id="location" value={locationFilter} onChange={handleLocationChange} />
          </div>
          <div className="form-group">
            <label htmlFor="title">Job Title</label>
            <input type="text" className="form-control" id="title" value={titleFilter} onChange={handleTitleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="role">Role:</label>
            <select className="form-control" id="role" value={roleFilter} onChange={handleRoleChange}>
              <option value="">Select Role</option>
              <option value="Full Stack Developer">Full Stack Developer</option>
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="Backend Developer">Backend Developer</option>
              <option value="Data Analyst">Data Analyst</option>
              <option value="Web Designer">Web Designer</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <button className="btn btn-primary" onClick={handleFilter}>Filter</button>
        </div>
      </div>
      <div className="mt-4">
        <h3>Filtered Jobs</h3>
        {filteredJobs.length > 0 ? (
          <ul className="list-group">
            {filteredJobs.map(job => (
              <li key={job.id} className="list-group-item">{job.title} at {job.company} - {job.location} ({job.role})</li>
            ))}
          </ul>
        ) : (
          <p>No jobs found.</p>
        )}
      </div>
    </div>
  );
}

export default JobFilterPage;
