import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const jobs = [
  {
    id: 1,
    title: "Frontend developer",
    company: "Tech Solutions",
    location: "Hyderabad, Telangana",
    description: "Develop and maintain software applications."
  },
  {
    id: 2,
    title: "Full stack developer",
    company: "Wipro",
    location: "Hyderabad, Telangana",
    description: "Analyze and interpret complex data."
  },
  {
    id: 3,
    title: "Product Manager",
    company: "Innovate LLC",
    location: "Austin, TX",
    description: "Lead product development teams."
  },
  {
    id: 1,
    title: "Frontend developer",
    company: "Tech Solutions",
    location: "Hyderabad,Telangana",
    description: "Develop and maintain software applications."
  },
  {
    id: 2,
    title: "Full stack developer",
    company: "Wipro",
    location: "Hyderabad,Telangana",
    description: "Analyze and interpret complex data."
  },
  {
    id: 3,
    title: "Product Manager",
    company: "Innovate LLC",
    location: "Austin, TX",
    description: "Lead product development teams."
  },
  {
    id: 2,
    title: "Tester",
    company: "Amazon",
    location: "Hyderabad",
    description: "Analyze and interpret complex data."
  },
  {
    id: 3,
    title: "web developer",
    company: "Goggle",
    location: "Banglore",
    description: "Lead product development teams."
  },
  {
    id: 2,
    title: "Data Scientist",
    company: "Data Corp",
    location: "San Francisco, CA",
    description: "Analyze and interpret complex data."
  },
  {
    id: 3,
    title: "Product Manager",
    company: "Innovate LLC",
    location: "Austin, TX",
    description: "Lead product development teams."
  }
];

function JobListing() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    qualification: ""
  });

  const handleApplyNow = (job) => {
    setSelectedJob(job);
  };

  const handleBack = () => {
    setSelectedJob(null);
  };

  const handleSave = () => {
    // Handle saving the form data, for example, by sending it to a server
    console.log("Form data:", formData);
    // Clear the form data
    setFormData({
      name: "",
      email: "",
      mobile: "",
      qualification: ""
    });
    // Go back to the job listings
    setSelectedJob(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="container">
      <h1 className="my-4">Job Listings</h1>
      {selectedJob ? (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{selectedJob.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{selectedJob.company}</h6>
            <p className="card-text">{selectedJob.location}</p>
            <p className="card-text">{selectedJob.description}</p>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="mobile">Mobile Number</label>
                <input type="text" className="form-control" id="mobile" name="mobile" value={formData.mobile} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="qualification">Qualification</label>
                <input type="text" className="form-control" id="qualification" name="qualification" value={formData.qualification} onChange={handleInputChange} />
              </div>
              <button type="button" className="btn btn-primary" onClick={handleSave}>Save</button>
              <button type="button" className="btn btn-secondary ml-2" onClick={handleBack}>Back</button>
            </form>
          </div>
        </div>
      ) : (
        <div className="row">
          {jobs.map(job => (
            <div className="col-md-4" key={job.id}>
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">{job.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{job.company}</h6>
                  <p className="card-text">{job.location}</p>
                  <p className="card-text">{job.description}</p>
                  <button className="btn btn-primary" onClick={() => handleApplyNow(job)}>Apply Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default JobListing;




