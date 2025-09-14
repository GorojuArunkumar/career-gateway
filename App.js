// // import React from 'react';
// //  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './components/Home';
// //  import About from './About';
// //  import Jobdetails from './Jobdetails';
// //  import JobFilter from './JobFilter';
// //  import Contactpage from './Contactpage';
// // import Navigation from './Navigation ';
// // import Joblisting from './Joblisting';
// // import JobApplicationForm from './components/JobApplicationForm';
// //  import Registration from './Registration';
// //  import Login from './Login';
// // import Footer from './Footer';
// // // // Define the routing configuration
// // const App = () => {
// //    return (
// //     <Router>
// //       <div>
// //         <h1 style={{ textAlign: 'center', padding: '4px', background: '#333', color: '#fff', margin: '0' }}>CAREER GATEWAY</h1>
// //         <Navigation />
// //          <Routes>
// //        <Route path="/registration" element={<Registration />} />
// //          <Route path="/login" element={<Login />} />
// //           <Route path="/" element={<Home />} />
// //           <Route path="/about" element={<About />} />
// //           <Route path="/jobdetails" element={<Jobdetails />} />
// //            <Route path="/jobFilter" element={<JobFilter />} />
// //          <Route path="/contactpage" element={<Contactpage />} />
// //            <Route path="/joblisting" element={<Joblisting />} /> {/* Add this route */}
// //            <Route path="/jobApplicationForm" element={<JobApplicationForm />} />
        
// //          </Routes>
// //          <Footer/> 
// //        </div>
// //     </Router>
// //   );
// // }

// //  export default App;

// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './Login';
// import Registration from './Registration';
// import Navigation from './Navigation ';

// function App() {
//   return (
//     <Router>
//       <div>
//       <Navigation/>
//       <Routes >
        
//         <Route exact path="/" element={<Login/>} />
//         <Route path="/registration" element={<Registration/>} />
//         <Route path="/home" element={<Home/>} />
//       </Routes >
//       </div>
//     </Router>
//   );
// }

// export default App;
// App.js
// App.js
import React from 'react';
import AuthPage from './AuthPage';

function App() {
  return (
   
      <div>
      <AuthPage />
    </div>
   
    
  );

}

export default App;
