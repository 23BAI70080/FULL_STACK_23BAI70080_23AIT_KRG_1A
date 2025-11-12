import React, { useState } from 'react';
import MessageInput from './components/MessageInput';
import MoodSelector from './components/MoodSelector';
import ReplyList from './components/ReplyList';
import './index.css';

const App = () => {
  const [message, setMessage] = useState('');
  const [mood, setMood] = useState('friendly');
  const [replies, setReplies] = useState([]);

  // const generateReplies = () => {
  //   const sampleReplies = {
  //     friendly: [
  //       "Sure, that sounds great!",
  //       "Absolutely! Let’s do it!",
  //       "I’m in. 😊"
  //     ],
  //     sarcastic: [
  //       "Oh yeah, because I totally have nothing else to do 🙄",
  //       "Wow, can’t wait. Really. 😒",
  //       "What an exciting idea... not."
  //     ],
  //     professional: [
  //       "Yes, that works. Let's schedule it.",
  //       "I’ll check my calendar and confirm.",
  //       "Noted. I’ll follow up soon."
  //     ]
  //   };

    const generateReplies = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/generate-reply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, mood }),
      });
      const data = await res.json();
      setReplies([data.reply]);
    } catch (e) {
      setReplies(['Error generating reply.']);
    }
  };

  

  return (
    <div className="app">
      <h1>Mood-Based Reply Suggestor 💬</h1>
      <MessageInput message={message} setMessage={setMessage} />
      <MoodSelector mood={mood} setMood={setMood} />
      <button onClick={generateReplies}>Generate Reply</button>
      <ReplyList replies={replies} />
    </div>
  );
};

export default App;
