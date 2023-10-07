import React from "react";

function PostPopup({ post, onClose }) {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>{post.tittle}</h2>
        <p>Author: {post.author}</p>
        <p>Date: {post.date}</p>
        <p>{post.content}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default PostPopup;
