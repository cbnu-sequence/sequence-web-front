import React from 'react';
import { useUser } from '../../hooks/useUser';
import Header from '../../components/Header';
import { useRouter } from 'next/router';
import CommonTable from '../../components/Table/CommonTable';
import Link from 'next/link';
import { Tr } from '@chakra-ui/react';
import CommonTd from '../../components/Table/CommonTd';
import dayjs from 'dayjs';
import { ProjectAddButton } from '../../components/Buttons/styles';

function Profile() {
  const { user } = useUser();
  console.log(user);
  const Router = useRouter();
  if (!user) {
    Router.replace('/');
    return null;
  }
  return (
    <div>
      <Header />
      <div>{user.data.name}님의 프로필</div>
      <h2>sequence makes difference</h2>
      <div>이메일 주소: {user.data.email}</div>
      <div>회원 등급: {user.data.role == 'User' ? '일반등급' : '관리자'}</div>
      {user.data.role === 'Admin' && (
        <Link href="/">
          <ProjectAddButton>프로젝트 추가하기</ProjectAddButton>
        </Link>
      )}
      <div>
        <CommonTable headers={['번호', '작성자', '작성일', '제목']}>
          {user.data.posts &&
            user.data.posts.map((item, index) => {
              return (
                <>
                  <Link href={`../../posts/${item._id}`}>
                    <Tr key={item._id}>
                      <CommonTd>{index + 1}.</CommonTd>
                      <CommonTd>{user.data.name}</CommonTd>
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
