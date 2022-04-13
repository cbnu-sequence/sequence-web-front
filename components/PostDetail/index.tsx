import React from 'react';
import { PostDetailDiv, Wrapper } from './styles';

function PostDetail({ title, writer, content, file }) {
  return (
    <Wrapper>
      <PostDetailDiv>
        <div className="header">
          <h2 className="header__title">{title}</h2>
          <h4 className="header__writer">{writer}</h4>
        </div>
        <div>
          <img />
          <p>{content}</p>
        </div>
      </PostDetailDiv>
    </Wrapper>
  );
}
export default PostDetail;
