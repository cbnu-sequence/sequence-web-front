import React from 'react';
import { PostHeaderDiv } from './styles';
import roleToKr from '../../hooks/roleToKr';
import dayjs from 'dayjs';

function PostHeader({ title, writerName, writerRole, createdAt, updatedAt }) {
  return (
    <PostHeaderDiv>
      <span className="title">{title}</span>
      <div className="header-info">
        <div className="writer-div">
          <span className="writer">{writerName}</span>
          <span className="user-role">{roleToKr(writerRole)}</span>
        </div>
        <div className="writing-date">
          <span>최종 수정일 {dayjs(updatedAt).format('YYYY.MM.DD')}</span>
          <span>작성일 {dayjs(createdAt).format('YYYY.MM.DD')}</span>
        </div>
      </div>
    </PostHeaderDiv>
  );
}

export default PostHeader;
