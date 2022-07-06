import React from 'react';
import { PostDetailDiv, Wrapper, PostBodyDiv } from './styles';
import PostHeader from '../PostHeader';
import PostImages from '../PostImages';
import PostFiles from '../PostFiles';
import { useUser } from '../../hooks/useUser';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

function PostDetail({
  title,
  content,
  createdAt,
  updatedAt,
  files,
  images,
  writerName,
  writerRole,
  writerId,
  id,
  category,
}) {
  const myStorage = localStorage.getItem('sequence_user');
  const me = JSON.parse(myStorage || '[]');

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
          {images.length > 0 && <PostImages images={images} />}
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
          {files.length > 0 && <PostFiles files={files} />}
        </PostBodyDiv>
        {me && me.data._id === writerId && (
          <div className="editpost">
            <Link href={`/posts/edit/${id}?category=${category}`}>
              <button>수정하기</button>
            </Link>
          </div>
        )}
      </PostDetailDiv>
    </Wrapper>
  );
}
export default PostDetail;
