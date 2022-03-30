import React from 'react';
import { useUser } from '../../hooks/useUser';
import Header from '../../components/Header';
import Router from 'next/router';

function Profile() {
  const { user } = useUser();
  if (!user) {
    Router.replace('/');
    return null;
  }

  return (
    <div>
      <Header />
      <div>{user.name}님의 프로필</div>
      <h2>sequence makes difference</h2>
    </div>
  );
}

export default Profile;
