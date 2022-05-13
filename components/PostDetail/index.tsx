import React from 'react';
import { PostDetailDiv, Wrapper } from './styles';
import PostHeader from '../PostHeader';
function PostDetail({ title, content, file, images, writerName, writerRole }) {
  return (
    <Wrapper>
      <PostDetailDiv>
        <PostHeader title={title} writerName={writerName} writerRole={writerRole} />
        <div>
          <img />
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
      </PostDetailDiv>
    </Wrapper>
  );
}
export default PostDetail;
