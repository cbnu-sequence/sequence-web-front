import React from 'react';
import { useUser } from '../../hooks/useUser';
import Header from '../../components/Header';
import { useRouter } from 'next/router';
import CommonTable from '../../components/Table/CommonTable';
import Link from 'next/link';
import { Tr } from '@chakra-ui/react';
import CommonTd from '../../components/Table/CommonTd';
import dayjs from 'dayjs';

function Profile() {
  const { user } = useUser();
  const Router = useRouter();
  if (!user) {
    Router.replace('/');
    return null;
  }
  return (
    <div>
      <Header />
      <div>{user.name}님의 프로필</div>
      <h2>sequence makes difference</h2>
      <div>이메일 주소: {user.email}</div>
      <div>회원 등급: {user.role == 'User' ? '일반등급' : '관리자'}</div>
      <div>
        <CommonTable headers={['번호', '작성자', '작성일', '제목']}>
          {user.posts &&
            user.posts.map((item, index) => {
              return (
                <>
                  <Link href={`../../posts/${item._id}`}>
                    <Tr key={item._id}>
                      <CommonTd>{index + 1}.</CommonTd>
                      <CommonTd>{user.name}</CommonTd>
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
