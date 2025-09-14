import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';

const TableComponent = ({ name, className }) => {
  return (
    <table className="table" style={{height:"200px",width:"400px"}}>
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr class="table-danger">
          <td>Rollno   :</td>
          <td>2211cs010637</td>
          
        </tr>
        <tr class="table-primary">
          <td>Name   :</td>
          <td>G.Arunkumar</td>
          
        </tr>
        <tr class="table-danger">
          <td>EmailId   :</td>
          <td>arun@gmail.com</td>
          
        </tr>
        <tr class="table-primary">
          <td>MobileNo   :</td>
          <td>1234567890</td>
          
        </tr>
      </tbody>
    </table>
  );
};

const App = () => {
  return (
    <div className="container">
      <h1></h1>
      <TableComponent name="xyz" className="3" />
    </div>
  );
};

export default App;
