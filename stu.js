// import React, { useState, useEffect } from 'react';
// // import { Table } from 'react-bootstrap';

// function StudentIn() {
//   const [students, setStudents] = useState([]);

//   useEffect(() => {
//     fetch('https://sindhuravuri666.github.io/StudentList/StudentList.json')
//       .then(response => response.json())
//       .then(data => {
//         setStudents(data);
//       });
//   }, []);

//   return (
//     <div>
//       <h2>Student Information</h2>
//       <table striped bordered hover>
//         <thead>
//           <tr>
//             <th>Hall Ticket</th>
//             <th>Name</th>
//             <th>Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           {students.map(student => (
//             <tr key={student.hallTicket}>
//               <td>{student.hallTicket}</td>
//               <td>{student.name}</td>
//               <td>{student.email}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default StudentIn;
import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

function StudentInfo() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('https://sindhuravuri666.github.io/StudentList/StudentList.json')
      .then(response => response.json())
      .then(data => {
        setStudents(data);
      });
  }, []);

  return (
    <div>
      <h2>Student Information</h2>
      <table>
        <thead>
          <tr>
            <th>Hall Ticket</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.hallTicket}>
              <td>{student.hallTicket}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
            </tr>
          ))}
        </tbody>
        </table>
    </div>
  );
}

export default StudentInfo;
