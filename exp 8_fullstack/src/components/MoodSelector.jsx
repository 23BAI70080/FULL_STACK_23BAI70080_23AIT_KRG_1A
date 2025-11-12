// src/components/MoodSelector.jsx
import React from 'react';

const MoodSelector = ({ mood, setMood }) => {
  return (
    <div className="input-group">
      <label>Select Mood:</label>
      <select value={mood} onChange={(e) => setMood(e.target.value)}>
        <option value="friendly">Friendly</option>
        <option value="sarcastic">Sarcastic</option>
        <option value="professional">Professional</option>
      </select>
    </div>
  );
};

export default MoodSelector;
