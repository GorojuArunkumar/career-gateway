// // import Week2Component from './components';
// import TableComponent  from './comp';

// import React from 'react';

// // Functional component to display one attribute value
// const AttributeComponent = (props) => {
//   return <p>{props.attribute}</p>;
// };

// // Functional component to display multiple attribute values
// const MultipleAttributeComponent = (props) => {
//   return (
//     <div>
//       <p>{props.attribute1}</p>
//       <p>{props.attribute2}</p>
//     </div>
//   );
// };
// const Studentdet = (props) => {
//   return (
//     <div>
//       <p>Student ID: {props.studentId}</p>
//       <p>Name: {props.studentName}</p>
//       <p>Email: {props.studentEmail}</p>
//     </div>
//   );
// };
// // Functional component to display student details
// const Student = ({ htno, name, mailid, mobileno }) => {
//   return (
//     <div>
//       {/* <p>HT No: {htno}</p>
//       <p>Name: {name}</p>
//       <p>Email: {mailid}</p>
//       <p>Mobile No: {mobileno}</p> */
//       <table className="table" style={{height:"200px", width:"600px"}}>
//         <thead>
//           <tr>
//             <th scope="column">htno</th>
//             <th scope="column">name</th>
//             <th scope="column">mailid</th>
//             <th scope="column">mobileno</th>
//           </tr>
//         </thead>
//         <tbody>
//         <tr class="table-dark">
//         <th scope="row">2211cs010637</th>
//         <td>G.Arunkumar</td>
//         <td>arun@gmail.com</td>
//         <td>1234567890</td>
//         </tr>
//         <tr class="table-secondary">
//         <th scope="row">2211cs010624</th>
//         <td>Charan</td>
//         <td>charan@gmail.com</td>
//         <td>1234567890</td>
//         </tr>
//         <tr class="table-dark">
//         <th scope="row">2211cs010876</th>
//         <td>Naresh</td>
//         <td>naresh@gmail.com</td>
//         <td>1234567890</td>
//         </tr>
//         <tr class="table-success">
//         <th scope="row">2211cs010867</th>
//         <td>Ramu</td>
//         <td>ramu@gmail.com</td>
//         <td>1234567890</td>
//         </tr>
//       </tbody>
      
//       </table>
      
      
      
      
//       }
//     </div>
//   );
// };

// // Class component to display employee details
// //class EmployeeComponent extends React.Component {
//   class EmployeeComponent extends React.Component {
//     render() {
//       return (
//         <table className="table" style={{height:"200px", width:"600px"}}>

//           <thead>
//             <tr>
//               <th scope="col">EmployeeID</th>
//               <th scope="col">EmpName</th>
//               <th scope="col">Designation</th>
//               <th scope="col">Salary</th>
//             </tr>
//             </thead>
//           <tbody>
//             <tr>
//               <td>{this.props.empId}</td>
//               <td>{this.props.empName}</td>
//               <td>{this.props.empDesignation}</td>
//               <td>{this.props.salary}</td>
//             </tr>
//           </tbody>
//           <tbody>
//         <tr class="table-warning">
//         <th scope="row">637</th>
//         <td>G.Arunkumar</td>
//         <td>Manager</td>
//         <td>120000</td>
//         </tr>
//         <tr class="table-danger">
//         <th scope="row">111</th>
//         <td>Ram</td>
//         <td>webdeveloper</td>
//         <td>100000</td>
//         </tr>
//         <tr class="table-warning">
//         <th scope="row">222</th>
//         <td>Krish</td>
//         <td>DataAnalist</td>
//         <td>120000</td>
//         </tr>
//         <tr class="table-danger">
//         <th scope="row">333</th>
//         <td>Raj</td>
//         <td>Webdeveloper</td>
//         <td>123000</td>
//         </tr>
//       </tbody>
//         </table>
//       );
//     }
//   }
  
// // Functional component to display student details
// // App component to render all components
// const App = () => {
//     return (
//       <div>
//         <center>
//           <h2>Week-3:G.Arunkumar(2211cs010637) Group-8D</h2>
//           <hr></hr>
//           <u><h4 className="text-danger">Question 1</h4></u>
//           <u><h2 className="text-secondary">Attribute Component Using Props</h2></u>
//         <AttributeComponent attribute=<h3 className='text-info'> Name:G.Arunkumar <br></br>RollNo:</h3> />
  
//         <u><h2 className="text-secondary">Multiple Attribute Component Using props</h2></u>
//         <MultipleAttributeComponent attribute1=<h3 className='text-info'>Name:G.Arunkumar</h3> attribute2=<h3 className='text-info'>RollNo:2211cs010637</h3> />
//         <hr></hr>
//         <u><h4 className="text-danger">Question 2</h4></u>
//         <u><h2 className="text-secondary">Displaying Student info using props through function</h2></u>
//         <Student/>
//         <hr></hr>
//         <u><h4 className="text-danger">Question 3</h4></u>
//         <u><h2 className="text-secondary">Displaying Employ using props through class</h2></u>
//         <EmployeeComponent/>
//         <hr></hr>
//         <u><h4 className="text-danger">Question 4</h4></u>
//         <u><h2 className="text-secondary">Student Details using object destructing function</h2></u>
        
//         <TableComponent/>
        
//         </center></div>
//     );
//   };
  
//   export default App;
  
  
  
  
import React, { useState, useEffect } from 'react';

const EmployeeAndStudentList = () => {
  const [employees, setEmployees] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Simulated array of employee details
    const employeeData = [
      {  name: 'Dr.Meeravali shaik ',Employeeid :' MRUE2111T020', Designation: 'HOD' },
      { name: 'Dr. Harikrishna Kamatham', Employeeid :' MRUE2111T060', Designation: ' Assistant Professor' },
      {  name: 'Mr. M.Gouthamm', Employeeid :' MRUE2111T010',Designation: ' Assistant Professor' },
      {  name: 'Dr.Arun Singh Chouhan', Employeeid :' MRUE2111T460',Designation: ' Assistant Professor'},
      { name: 'Dr. K. Asish Vardhan', Employeeid :' MRUE2111T033',Designation: ' Assistant Professor' }
    ];

    setEmployees(employeeData);

    fetch('https://sindhuravuri666.github.io/StudentList/StudentList.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch student data');
        }
        return response.json();
      })
      .then(data => setStudents(data.slice(0, 5))) // Limit to 5 students
      .catch(error => console.error('Error fetching student data:', error));
  }, []);

  return (
    <div className="container">
      
      <center>
      <u><h1>Displaying Employee Details using bootstrap card</h1></u>
      </center>
      <div className="row">
        {employees.map((employee, index) => (
          <div key={employee.id} className="col-lg-4 col-md-6 mb-4">
            <div className={`card bg-${index % 2 === 0 ? 'info' : 'warning'}`}>
              <div className="card-body">
                <center>
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" height="180px" width="180px"/>
                <h5 className="card-title">{employee.name}</h5>
                
                <p className="card-text">EmployeeId: {employee.Employeeid}</p>
                <p className="card-text">Designation: {employee.Designation}</p></center>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr></hr>
      <center>
        
      <u><h1>Displaying Student Details using bootstrap card</h1></u>
      </center>
      <div className="row">
        {students.map((student, index) => (
          <div key={student.id} className="col-lg-4 col-md-6 mb-4">
            <div className={`card bg-${index % 2 === 0 ? 'info' : 'warning'}`}>
              <div className="card-body">
                <center>
                <img src="https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png"  height="180px" width="180px"/>
                <h5 className="card-title">{student.Name}</h5>
                <p className="text-dark">RollNumber: {student.RollNo}</p>
                <p className="card-text">EmailId: {student.EmailID}</p></center>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeAndStudentList;
