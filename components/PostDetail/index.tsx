import React from 'react';
import { PostDetailDiv, Wrapper, PostBodyDiv } from './styles';
import PostHeader from '../PostHeader';
import PostImages from '../PostImages';
import PostFiles from '../PostFiles';

function PostDetail({ title, content, createdAt, updatedAt, files, images, writerName, writerRole }) {
  return (
    <Wrapper>
      <PostDetailDiv>
        <PostHeader
          title={title}
          writerName={writerName}
          writerRole={writerRole}
          createdAt={createdAt}
          updatedAt={updatedAt}
        />
        <PostBodyDiv>
          {images && <PostImages images={images} />}
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
          {files && <PostFiles files={files} />}
        </PostBodyDiv>
      </PostDetailDiv>
    </Wrapper>
  );
}
export default PostDetail;
