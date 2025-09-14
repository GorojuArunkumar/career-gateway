// 
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
//import './style';

function UseStateExample() {
  const [details, setDetails] = useState(
    <div>
      <h3>Name: </h3>
      <h3>Roll No: </h3>
    </div>
  );

  const getDetails = () => {
    const name = "narendra reddy";
    const rno = "2211CS010524";
    const group = "8C";
    const phoneno = "9978987989";
    setDetails(
      <div>
        <h3>Name: {name}</h3>
        <h3>Roll No: {rno}</h3>
        <h3>Group: {group}</h3>
        <h3>Phoneno: {phoneno}</h3>
      </div>
    );
  };

  return (
    <div className="div">
      <h2 style={{ color: 'pink' }}>
        1. Create a React Component, Display initial State of Student
        Hall-ticket and Name and change its State by using useState().
      </h2>
      <h2 style={{ textDecorationLine: "underline" }}>Use State Example</h2>
      <div className="">
        <h3>{details}</h3>
        <button onClick={getDetails}>Click to get Details</button>
      </div>
    </div>
  );
}

function UseEffectExample() {
  const headings = ["SNO", "Name of the student", "Roll No", "Email ID"];
  const [Details, setDetails] = useState([]);

  useEffect(() => {
    const fetchStudentDetails = async () => {
      const response = await fetch(
        "https://sindhuravuri666.github.io/StudentList/StudentList.json"
      );
      const data = await response.json();
      setDetails(data);
    };

    fetchStudentDetails();
  }, []);

  return (
    <div className="Anwar">
      <h2 style={{ color: 'pink' }}>
        2. Create a React Component, Display student Hall-ticket, Name and
        Email-Id using useEffect() fetch student info from student.json.
      </h2>
      <h2 style={{ textDecorationLine: "underline" }}>
        Use effect example by fetching data from student.json
      </h2>
      <div>
        <Table striped bordered hover variant="primary">
          <thead>
            <tr>
              {headings.map((h) => (
                <th key={h}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Details.slice(14, 19).map((student, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{student.Name}</td>
                <td>{student.RollNo}</td>
                <td>{student.EmailID}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

function Week4() {
  return (
    <div className="">
      <h2>
        Week 4 - Create React App and Implement API Calls using React Hooks...
      </h2>
      <hr />
      <UseStateExample />
      <br />
      <UseEffectExample />
    </div>
  );
}

export default Week4;
<style>
  
</style>