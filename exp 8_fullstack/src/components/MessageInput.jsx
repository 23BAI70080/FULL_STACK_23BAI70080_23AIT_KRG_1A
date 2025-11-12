// src/components/MessageInput.jsx
import React from 'react';

const MessageInput = ({ message, setMessage }) => {
  return (
    <div className="input-group">
      <label>Incoming Message:</label>
      <input
        type="text"
        placeholder="Type a message here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
    </div>
  );
};

export default MessageInput;