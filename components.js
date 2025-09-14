import React from "react";


function MyComponentWithJSX(){
const name = 'Goroju Arun kumar';
const age = 19;
var cTime = new Date().toTimeString();
const isLoggedIn = true;
const n=<hr></hr>
const ele=<h3 style={{color:'orange'}}>Hello World!</h3>
 return(
<div className="container-fluid">
          <hr></hr>
          <center>
           
            <h3 className="text-danger">Question-2</h3>
            <h3>This is a React based component with JSX..</h3>
            <h5 className="text-muted">JSX Examples</h5>
            
            <p>{ele}</p>

            <hr/>
            <h3>1.SYNTAX FOR ATTRIBUTE:</h3>
            <h3 style={{color:'brown'}}>Computer Science Dept</h3>
            <p>Welcome to MERN !</p>
            <hr/>
            <h3>2.EXAMPLE FOR NESTED ELEMENTS:</h3>
            <h3 className="text-primary">MallaReddy University</h3>
            <h4>CSE Dept</h4>
            <p><h5>Group-8D</h5></p>
            
            <hr/>
            <h3>3. EXPRESSIONS:</h3>
            <h3 style={{color:'Green', fontWeight:'120px'}}>Hello, {name}!</h3>
             <p className="p"><h3>You are {age} years old.</h3></p>
            <hr/>

            <h3>4.FUNCTION IN JSX</h3>
            
            <div><p><h4>Current Time: {cTime}</h4></p></div>
            <hr/>
<h3>5.HTML TAGS</h3>
<h5>Hello, Mern Stack</h5>
<hr></hr>
            <h3>6.FRAGMENTS:</h3>
            </center><center>
            <>
                <h3>This is Fragment Example!</h3>
                <hr></hr>

            </>
            <h3>7.CONDITION RENDERING:</h3>
            <h4>{isLoggedIn ? 'Hello !' : 'Please log in...'}</h4>
          

            </center>
        
            </div>
    );
}
<hr/>

function MyComponentWithoutJSX(){
    return(
        <div>
          
          <center>
          <h2>Week2-G.Arunkumar(2211cs010637) grp:8D</h2>
          <hr></hr>
          <h3 className="text-danger">Question-1</h3>
            <h1 style={{color:"blue"}}>Hello World!</h1>
            <h3>This is react based component without jsx!</h3>
            </center>
        </div>
    );
}
<hr/>

    function MyFunctionComponent(){

        return(
            <div >
              <hr></hr>
              <center>
                <h3 className="text-danger">Question-3</h3>
                <h2 className="text-secondary">Fuction Component Example!</h2>
                <h3>Student Information</h3>

                <table  className='table' style={{ width:'600px',height:'200px'}}>
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Name</th>
              <th scope="col">RollNo</th>
              <th scope="col">subject</th>
              <th scope="col">Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr class="table-primary">
              <th scope="row">1</th>
              <td>G.Arunkumar</td>
              <td>2211cs010637</td>
              <td>Mern</td>
              <td>A</td>
            </tr>
            <tr class="table-warning">
              <th scope="row">2</th>
              <td>Ayan</td>
              <td>2211cs110632</td>
              <td>Mern</td>
              <td>B</td>
            </tr>
            <tr class="table-primary">
              <th scope="row">3</th>
              <td>Ramu</td>
              <td>2211cs93894</td>
              <td>Mern</td>
              <td>A</td>
            </tr>
            <tr class="table-warning">
              <th scope="row">4</th>
              <td>varun kumar</td>
              <td>221345478789</td>
              <td>Mern</td>
              <td>B+</td>
            </tr>
            <tr class="table-primary">
              <th scope="row">5</th>
              <td>kumar</td>
              <td>2213454787</td>
              <td>Mern</td>
              <td>B</td>
            </tr>
          </tbody>
        </table>

        </center>
        <hr></hr>
            </div>
        );
    }
    <hr/>



    class MyClassComponent extends React.Component {

        render() {
        
        return (
        
        <div className="Container-fluid">
          <center>
          <h3 className="text-danger">Question-4</h3>
        <h2 className="text-secondary">Class Component Example!</h2>
        <h3>Employee Details</h3>
        <table  className='table' style={{ tableLayout:'centre',width:'600px',height:'200px', alignContent:'center'}}>
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">EmployeeName</th>
              <th scope="col">id</th>
              <th scope="col">Salary</th>
              <th scope="col">Phone-No</th>
            </tr>
          </thead>
          <tbody>
            <tr class="table-secondary">
              <th scope="row">1</th>
              <td>Ram</td>
              <td>111</td>
              <td>200000</td>
              <td>1234567890</td>
            </tr>
            <tr class="table-danger">
              <th scope="row">2</th>
              <td>raju</td>
              <td>112</td>
              <td>100000</td>
              <td>123456</td>
            </tr>
            <tr class="table-secondary">
              <th scope="row">3</th>
              <td>Hari</td>
              <td>113</td>
              <td>150000</td>
              <td>123456789</td>
            </tr>
            <tr class="table-danger">
              <th scope="row">4</th>
              <td>vishnu</td>
              <td>114</td>
              <td>250000</td>
              <td>123456789</td>
            </tr>
            
        <hr></hr>
          </tbody>
        </table>
        
        
        </center>
        </div>
        
        );
        
        }
        
        } 
    
    
export { MyComponentWithoutJSX, MyComponentWithJSX, MyFunctionComponent,MyClassComponent, };;