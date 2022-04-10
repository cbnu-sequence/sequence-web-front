import React from 'react';

function PostDetail({ title, writer, content }) {
  return (
    <div>
      <div className="header">
        <h2>{title}</h2>
        <h4>{writer}</h4>
      </div>
      <div>
        <p>{content}</p>
      </div>
    </div>
  );
}
export default PostDetail;
