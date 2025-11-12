// src/components/ReplyList.jsx
import React from 'react';
import ReplyItem from './ReplyItem';

const ReplyList = ({ replies }) => {
  console.log('replies:', replies);
  return (
    <div className="reply-list">
      <h3>Suggested Replies:</h3>
      {(replies  || []).map((reply, index) => (
        <ReplyItem key={index} reply={reply} />
      ))}
    </div>
  );
};

export default ReplyList;
