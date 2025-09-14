import React, { useState } from 'react';

const MockInterviewPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [scores, setScores] = useState(Array(3).fill(null));

  const questions = [
    'Tell me about yourself.',
    'What are your strengths and weaknesses?',
    'Why do you want to work here?'
  ];

  const handleNextQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  const handleAnswerChange = (e) => {
    const { value } = e.target;
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[currentQuestion] = value;
      return newAnswers;
    });
  };

  const handleCalculateScore = () => {
    const newScores = answers.map(answer => (answer && answer.length > 20 ? 10 : 5));
    setScores(newScores);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Mock Interview</h1>
      {currentQuestion < questions.length ? (
        <>
          <div style={{ marginBottom: '20px' }}>
            <h2>Question {currentQuestion + 1}</h2>
            <p>{questions[currentQuestion]}</p>
            <textarea
              placeholder="Your answer..."
              value={answers[currentQuestion] || ''}
              onChange={handleAnswerChange}
              style={{ width: '100%', height: '100px', marginBottom: '10px', padding: '5px' }}
            />
            <button onClick={handleNextQuestion} style={{ padding: '5px 10px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}>Next</button>
          </div>
        </>
      ) : (
        <>
          <div style={{ marginBottom: '20px' }}>
            <h2>Interview Complete</h2>
            <h3>Answers:</h3>
            <ul>
              {answers.map((answer, index) => (
                <li key={index}>{`${questions[index]}: ${answer}`}</li>
              ))}
            </ul>
          </div>
          <div>
            <button onClick={handleCalculateScore} style={{ padding: '5px 10px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}>Calculate Score</button>
            <h3>Scores:</h3>
            <ul>
              {scores.map((score, index) => (
                <li key={index}>{`${questions[index]}: ${score}`}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default MockInterviewPage;
