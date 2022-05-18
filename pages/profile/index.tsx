import React, { useEffect } from 'react';
import { useUser } from '../../hooks/useUser';
import Header from '../../components/Header';
import Router from 'next/router';
import CommonTable from '../../components/Table/CommonTable';
import Link from 'next/link';
import { Tr } from '@chakra-ui/react';
import CommonTd from '../../components/Table/CommonTd';
import dayjs from 'dayjs';

function Profile() {
  const { user: me } = useUser();

  useEffect(() => {
    if (!(me && me._id)) {
      Router.push('/');
    }
  }, [me && me._id]);
  if (!me) {
    return '내 정보 로딩중..';
  }
  return (
    <div>
      <Header />
      <div>{me.name}님의 프로필</div>
      <h2>sequence makes difference</h2>
      <div>이메일 주소: {me.email}</div>
      <div>회원 등급: {me.role == 'User' ? '일반등급' : '관리자'}</div>
      <div>
        <CommonTable headers={['번호', '작성자', '작성일', '제목']}>
          {me.posts &&
            me.posts.map((item, index) => {
              return (
                <>
                  <Link href={`../../posts/${item._id}`}>
                    <Tr key={item._id}>
                      <CommonTd>{index + 1}.</CommonTd>
                      <CommonTd>{me.name}</CommonTd>
                      <CommonTd>{dayjs(item.createdAt).format('YY/MM/DD')}</CommonTd>
                      <CommonTd>{item.title}</CommonTd>
                    </Tr>
                  </Link>
                </>
              );
            })}
        </CommonTable>
      </div>
    </div>
  );
}

export default Profile;
