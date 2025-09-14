import React, { useState } from 'react';

const Communication = () => {
  const [messages, setMessages] = useState([
    { id: 1, user: 'Admin', text: 'Welcome to the Career Gateway!' },
    { id: 2, user: 'User1', text: 'Thank you! Looking forward to using this platform.' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleInputChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newMessage.trim() !== '') {
      const newMessageObj = {
        id: messages.length + 1,
        user: 'User', // This can be dynamic based on the logged-in user
        text: newMessage,
      };
      setMessages([...messages, newMessageObj]);
      setNewMessage('');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h2>Communication Page</h2>
      <div style={{ marginBottom: '20px' }}>
        {messages.map((message) => (
          <div
            key={message.id}
            style={{
              marginBottom: '10px',
              padding: '10px',
              borderBottom: '1px solid #ccc',
            }}
          >
            <strong style={{ color: '#007bff' }}>{message.user}: </strong>
            <span>{message.text}</span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
        <input
          type="text"
          value={newMessage}
          onChange={handleInputChange}
          placeholder="Type your message..."
          style={{
            flexGrow: 1,
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            border: 'none',
            backgroundColor: '#007bff',
            color: '#fff',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Communication;
