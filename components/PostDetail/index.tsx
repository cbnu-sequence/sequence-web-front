import React from 'react';
import { PostDetailDiv, Wrapper, PostBodyDiv, ButtonDiv } from './styles';
import PostHeader from '../PostHeader';
import PostImages from '../PostImages';
import PostFiles from '../PostFiles';
import { useUser } from '../../hooks/useUser';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { getStoredUser } from '../../user-storage/user-storage';

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
  const me = getStoredUser();

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
        <hr />
        <ButtonDiv>
          <>
            {me && me._id === writerId && (
              <div className="editpost">
                <Link href={`/posts/edit/${id}?category=${category}`} passHref>
                  <button>수정하기</button>
                </Link>
              </div>
            )}
          </>
        </ButtonDiv>
      </PostDetailDiv>
    </Wrapper>
  );
}
export default PostDetail;
