
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Joblisting from './Joblisting';
import Jobsearch from './components/Jobsearch';
import Home from './Home';
import About from './About';
import Jobdetails from './Jobdetails';
import Navigation from './Navigation ';
import Resume from './Resume';
import Jobs from './Jobs';
import Internship from './Internship';
import JobFilter from './JobFilter';
import InterviewSkills from './Interviewskill';
import MockInterviewPage from './Mock';
import Resumewriting from './Resumewriting';
import UserProfile from './Profilepage';
import AuthPage from './AuthPage';
import Communication from './Communication';
import Softskills from './Softskills';
import CareerEvent from './Careerevent';
import ProfessionalDev from './Professionaldev';
import FeedbackPage from './Feedback';
import Registration from './Registration';
import UserEdit from './Edit';
function Allcom() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/about" element={<About />} />
          <Route path="/jobdetails" element={<Jobdetails />} />
          <Route path="/joblisting" element={<Joblisting />} />
          <Route path="/jobsearch" element={<Jobsearch />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/jobfilter" element={<JobFilter />} />
          <Route path="/interviewskills" element={<InterviewSkills />} />
          <Route path="/mock" element={<MockInterviewPage />} />
          <Route path="/resumewriting" element={<Resumewriting />} />
          <Route path="/userprofile" element={<UserProfile />} />
         <Route path="/communication" element={<Communication />} /> 
         <Route path="/communication" element={<Communication />} /> 
         <Route path="/softskills" element={<Softskills />} /> 
         <Route path="/careerevent" element={<CareerEvent />} /> 
         <Route path="/professionaldev" element={<ProfessionalDev/>} /> 
         <Route path="/feedback" element={<FeedbackPage/>} /> 
         <Route path="/registration" element={<Registration/>} /> 
         <Route path="/edit" element={<UserEdit/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default Allcom;
