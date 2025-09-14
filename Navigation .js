// import React from 'react';
// import { Link } from 'react-router-dom';
// import './nav.css';
// import Footer from './Footer';

// function Navigation() {
//   const handleLogout = () => {
//     // Perform any logout logic here
//     // For now, just navigate to '/authpage'
//     window.location.href = '/authpage';
//   };

//   return (
//     <nav className="navbar">
//       <div className="nav-container">
//         <h1 className='heading'>CAREER GATEWAY</h1>
//         <ul className="nav-links">
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/jobsearch">Jobsearch</Link></li>
//           <li><Link to="/jobdetails">Job Details</Link></li>
//           <li><Link to="/joblisting">Job Listing</Link></li>
//           <li><Link to="/resume">Resume Upload</Link></li>
//           <li><Link to="/jobfilter">JobFilter</Link></li>
          
//         </ul>
//         <div className="logout-button" onClick={handleLogout}>
//           Logout
//         </div>
//       </div>
     
//     </nav>
    
//   );
// }

// export default Navigation;
import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
import Footer from './Footer';

function Navigation() {
  const handleLogout = () => {
    // Perform any logout logic here
    // For now, just navigate to '/authpage'
    window.location.href = '/authpage';
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className='heading'>CAREER GATEWAY</h1>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/jobsearch">Jobsearch</Link></li>
          <li><Link to="/jobdetails">Job Details</Link></li>
          <li><Link to="/joblisting">Job Listing</Link></li>
          <li><Link to="/resume">Resume Upload</Link></li>
          <li><Link to="/jobfilter">JobFilter</Link></li>
          <li><Link to="/feedback">Feedback</Link></li>
          
          
        </ul>
        <div style={{ position: 'absolute', top: 14, right: 40, padding: '10px' }}>
          <Link to="/userprofile" className="profile-link">
            <div className="profile-icon">
              {/* Your user profile logo or icon goes here */}
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2NIXc73ZgxZfbifJP3Bsv35sekQyklo-9JA&s" alt="User Profile" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
            </div>
          </Link>
        </div>
        <div className="logout-button" onClick={handleLogout}>
          Logout
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
