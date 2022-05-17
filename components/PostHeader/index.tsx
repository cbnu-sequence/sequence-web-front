import React from 'react';
import { PostHeaderDiv } from './styles';
import roleToKr from '../../hooks/roleToKr';

function PostHeader({ title, writerName, writerRole }) {
  writerRole = roleToKr(writerRole);
  return (
    <PostHeaderDiv>
      <span className="title">{title}</span>
      <span className="writer">{writerName}</span>
      <span className="user-role">{writerRole}</span>
    </PostHeaderDiv>
  );
}

export default PostHeader;
