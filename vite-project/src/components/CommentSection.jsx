


import { useState } from "react";
import { addComment } from "../api/api";

const CommentSection = ({ postId, comments, onUpdate }) => {
  const [text, setText] = useState("");

  const submitComment = async () => {
    if (!text.trim()) return;
    await addComment(postId, text);
    setText("");
    onUpdate();
  };

  return (
    <div className="comment-section">
      {comments.map((c) => (
        <div key={c._id} className="comment">
          {c.text}
        </div>
      ))}

      <div className="comment-input">
        <input
          type="text"
          placeholder="Write a comment..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={submitComment}>Post</button>
      </div>
    </div>
  );
};

export default CommentSection;

