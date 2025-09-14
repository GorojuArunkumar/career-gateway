// ProfessionalDevelopmentPage.js

import React from 'react';

const ProfessionalDev = () => {
  // Dummy data for training and courses
  const courses = [
    { title: 'Digital Marketing Fundamentals', provider: 'Coursera', duration: '6 weeks' },
    { title: 'Data Science Bootcamp', provider: 'Udacity', duration: '12 weeks' },
    { title: 'Leadership Essentials', provider: 'edX', duration: '4 weeks' }
  ];

  return (
    <div>
      <h1>Professional Development</h1>

      {/* Skill Assessment */}
      <section>
        <h2>Skill Assessment</h2>
        <p>Take our skill assessment quiz to identify areas for improvement.</p>
        {/* Add a link or button to the assessment tool */}
        <a href="https://www.proprofs.com/quiz-school/quizshow.php?title=professional-development&q=1">Take Skill Assessment</a>
      </section>

      {/* Training and Courses */}
      <section>
        <h2>Training and Courses</h2>
        <ul>
          {courses.map(course => (
            <li key={course.title}>
              <strong>{course.title}</strong> - {course.provider} ({course.duration})
            </li>
          ))}
        </ul>
      </section>

      {/* Career Advice */}
      <section>
        <h2>Career Advice</h2>
        <p>Read our latest articles and blogs for valuable career advice.</p>
        {/* Add a link to the career advice section */}
        <a href="/career-advice">Read Career Advice</a>
      </section>

      {/* Job Market Trends */}
      <section>
        <h2>Job Market Trends</h2>
        <p>Stay updated with the latest job market trends and industry insights.</p>
        {/* Add a link to job market trends section */}
        <a href="/job-market-trends">View Job Market Trends</a>
      </section>
    </div>
  );
};

export default ProfessionalDev;
