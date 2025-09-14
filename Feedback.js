import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function FeedbackPage() {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send the feedback to your backend or handle it as needed
    setSubmitted(true);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>Feedback</h1>
      {submitted ? (
        <div>
          <p>Thank you for your feedback!</p>
          <p><Link to="/">Back to Home</Link></p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Your Feedback:
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              style={{ width: '100%', height: '150px' }}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default FeedbackPage;
