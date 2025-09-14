// // import React from 'react';

// // function InterviewSkills() {
// //   return (
// //     <div className="interview-skills">
// //       <center>
// //       <h2>Interview Skills</h2>
// //       <div className="video">
// //         <iframe
// //           width="560"
// //           height="315"
// //           src="https://www.shutterstock.com/image-vector/video-player-template-web-mobile-260nw-1710114787.jpg"
// //           title="Interview Skills Video"
// //           frameborder="0"
// //           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// //           allowfullscreen
// //         ></iframe>
// //       </div>
// //       <div className="theory">
// //         <h3>Interview Skills Theory</h3>
// //         <p>
// //           Interview skills are crucial for success in the job market. They include the ability to communicate effectively, showcase your
// //           qualifications, and demonstrate your suitability for a position. Here are some key interview skills to focus on:
// //         </p>
// //         <ul>
// //           <li><strong>Communication:</strong> Practice active listening and clear, concise speaking.</li>
// //           <li><strong>Preparation:</strong> Research the company and role, and prepare answers to common interview questions.</li>
// //           <li><strong>Professionalism:</strong> Dress appropriately and maintain a positive attitude.</li>
// //           <li><strong>Confidence:</strong> Project confidence in your abilities and experiences.</li>
// //           <li><strong>Adaptability:</strong> Be prepared to think on your feet and adapt to different interview formats.</li>
// //         </ul>
// //         <p>
// //           By honing these skills, you can increase your chances of impressing potential employers and landing your dream job.
// //         </p>
// //       </div>
// //       </center>
// //     </div>
// //   );
// // }

// // export default InterviewSkills;
// import React from 'react';

// function InterviewSkillsPage() {
//   return (
//     <div className="interview-skills-page">
//       <header>
//         <h1>Interview Skills</h1>
//         <p>Prepare for your job interview with these helpful tips and video lectures.</p>
//       </header>
//       <main>
//         <section className="preparation">
//           <h2>Preparation</h2>
//           <p>Research the company and the role you're applying for. Understand their values, mission, and culture.</p>
//           <p>Review common interview questions and prepare your answers. Practice with a friend or family member.</p>
//           <p>Choose a professional outfit that is appropriate for the company's dress code.</p>
//         </section>
//         <section className="body-language">
//           <h2>Body Language</h2>
//           <p>Maintain good posture and make eye contact with the interviewer.</p>
//           <p>Give a firm handshake and smile to show confidence and friendliness.</p>
//           <p>Listen actively and nod to show that you're engaged in the conversation.</p>
//         </section>
//         <section className="communication">
//           <h2>Communication</h2>
//           <p>Speak clearly and confidently. Avoid using filler words like "um" or "like".</p>
//           <p>Answer questions concisely, providing specific examples from your experience.</p>
//           <p>Ask thoughtful questions about the company and the role to show your interest.</p>
//         </section>
//         <section className="questions">
//           <h2>Common Interview Questions</h2>
//           <ul>
//             <li>Can you tell me about yourself?</li>
//             <li>What are your strengths and weaknesses?</li>
//             <li>Why do you want to work for our company?</li>
//             <li>Describe a challenging situation you faced at work and how you handled it.</li>
//           </ul>
//         </section>
//         <section className="video-lectures">
//           <h2>Video Lectures</h2>
//           <div className="video-container">
//             <video controls>
//               <source src="path_to_your_video.mp4" type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </div>
//         </section>
//         <section className="follow-up">
//           <h2>Follow-Up</h2>
//           <p>Send a thank-you email to the interviewer within 24 hours of the interview. Express your gratitude for the opportunity and reiterate your interest in the position.</p>
//           <p>Follow up with the company if you haven't heard back after a week or two. Express your continued interest and inquire about the status of your application.</p>
//         </section>
//       </main>
//       <footer>
//         <p>Good luck with your interview!</p>
//       </footer>
//     </div>
//   );
// }

// export default InterviewSkillsPage;
import React from 'react';
import { Link } from 'react-router-dom';

function InterviewSkillsPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <header style={{ textAlign: 'center' }}>
        <h1>Interview Skills</h1>
        <p>Prepare for your job interview with these helpful tips.</p>
      </header>
      <main>
        <section style={{ marginBottom: '20px' }}>
          <h2>Preparation</h2>
          <p>Research the company and the role you're applying for. Understand their values, mission, and culture.</p>
          <p>Review common interview questions and prepare your answers. Practice with a friend or family member.</p>
          <p>Choose a professional outfit that is appropriate for the company's dress code.</p>
        </section>
        <section style={{ marginBottom: '20px' }}>
          <h2>Body Language</h2>
          <p>Maintain good posture and make eye contact with the interviewer.</p>
          <p>Give a firm handshake and smile to show confidence and friendliness.</p>
          <p>Listen actively and nod to show that you're engaged in the conversation.</p>
        </section>
        <section style={{ marginBottom: '20px' }}>
          <h2>Communication</h2>
          <p>Speak clearly and confidently. Avoid using filler words like "um" or "like".</p>
          <p>Answer questions concisely, providing specific examples from your experience.</p>
          <p>Ask thoughtful questions about the company and the role to show your interest.</p>
        </section>
        <section style={{ marginBottom: '20px' }}>
          <h2>Follow-Up</h2>
          <p>Send a thank-you email to the interviewer within 24 hours of the interview. Express your gratitude for the opportunity and reiterate your interest in the position.</p>
          <p>Follow up with the company if you haven't heard back after a week or two. Express your continued interest and inquire about the status of your application.</p>
        </section>
      </main>
      <footer>
        <Link to="/" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}>Back to Home</Link>
      </footer>
    </div>
  );
}

export default InterviewSkillsPage;
