import React from 'react';

function Student({ htno, name, mailid, mobileno }) {
  return (
    <div>
      <h2>Student Details</h2>
      <p>HT No: {htno}</p>
      <p>Name: {name}</p>
      <p>Mail ID: {mailid}</p>
      <p>Mobile No: {mobileno}</p>
    </div>
  );
}

export default Student;
