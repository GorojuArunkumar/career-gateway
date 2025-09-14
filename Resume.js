import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Resume() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    // Simulate a successful upload
    setUploadSuccess(true);
    // Clear form fields and reset upload success after 2 seconds
    setTimeout(() => {
      setName('');
      setEmail('');
      setSelectedFile(null);
      setUploadSuccess(false);
    }, 2000);
  };

  return (
    <div className="container">
      <h1 className="my-4">Resume Upload</h1>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Upload Your Resume</h5>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" value={name} onChange={handleNameChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" value={email} onChange={handleEmailChange} />
          </div>
          <div className="form-group">
            <label htmlFor="resume">Resume</label>
            <input type="file" className="form-control-file" id="resume" onChange={handleFileChange} />
          </div>
          {uploadSuccess && <p className="text-success">Upload successful!</p>}
          <button className="btn btn-primary mt-3" onClick={handleUpload}>Upload</button>
        </div>
      </div>
    </div>
  );
}

export default Resume;
