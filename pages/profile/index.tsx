import React, { useEffect } from 'react';
import { useUser } from '../../hooks/useUser';
import { ProfileDiv, CTDiv, ProfileMainDiv } from '../../styles/profile';
import Router from 'next/router';
import CommonTable from '../../components/Table/CommonTable';
import Link from 'next/link';
import { Tr } from '@chakra-ui/react';
import CommonTd from '../../components/Table/CommonTd';
import dayjs from 'dayjs';
import { loadMyInfoAPI } from '../../apis/user';
import NoList from '../../components/NoList';
import axios from 'axios';
import { dehydrate, QueryClient } from 'react-query';
import { queryKeys } from '../../react-query/constants';
import ProfileMain from '../../components/ProfileMain';

function Profile() {
  const { user: me } = useUser();

  useEffect(() => {
    if (!(me && me._id)) {
      Router.push('/');
    }
  }, [me]);
  if (!me) {
    return '내 정보 로딩중..';
  }

  return (
    <div>
      <ProfileDiv>
        <div className="profile-title">
          {me.name}님의 프로필
          <h2>sequence makes difference</h2>
        </div>
      </ProfileDiv>
      <ProfileMainDiv>
        <ProfileMain me={me} />
      </ProfileMainDiv>
      <CTDiv>
        <span>내 게시글</span>
        {me.posts && me.posts.length > 0 ? (
          <CommonTable headers={['번호', '작성자', '작성일', '제목']}>
            {me.posts.map((item, index) => (
              <Link href={`../../posts/${item._id}`} key={item._id} passHref>
                <Tr>
                  <CommonTd>{index + 1}.</CommonTd>
                  <CommonTd>{me.name}</CommonTd>
                  <CommonTd>{dayjs(item.createdAt).format('YY/MM/DD')}</CommonTd>
                  <CommonTd>{item.title}</CommonTd>
                </Tr>
              </Link>
            ))}
          </CommonTable>
        ) : (
          <NoList krTitle={'작성한 게시글이 없습니다.'} enTitle={'posts'} />
        )}
      </CTDiv>
    </div>
  );
}

export default Profile;

export async function getServerSideProps(context) {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.common.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.common.Cookie = cookie;
  }
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(queryKeys.user, () => loadMyInfoAPI(cookie));

  let cleanInfo = JSON.parse(JSON.stringify(dehydrate(queryClient)));
  if (cleanInfo.queries[0].state.data && typeof cleanInfo.queries[0].state.data != 'undefined') {
    cleanInfo.queries[0].state.data = cleanInfo.queries[0].state.data.data;
  }
  return {
    props: {
      dehydratedState: cleanInfo,
    },
  };
}
