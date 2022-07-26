import React, { useState } from 'react';
import { ProfileMainMiddle } from './styles';
import ProfileMainButton from './ProfileMainButton';
import ProfileMainScreen from './ProfileMainScreen';

const ProfileMain = ({ me }) => {
  const [BtnClick, setBtnClick] = useState({ guestBtnClick: true, memberBtnClick: false, adminBtnClick: false });
  return (
    <>
      <ProfileMainButton BtnClick={BtnClick} setBtnClick={setBtnClick} me={me} />
      <ProfileMainMiddle />
      <ProfileMainScreen BtnClick={BtnClick} me={me} />
    </>
  );
};

export default ProfileMain;
