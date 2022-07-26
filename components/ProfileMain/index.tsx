import React, { useState } from 'react';
import { ProfileMainMiddle } from './styles';
import ProfileMainLeft from './ProfileMainLeft';
import ProfileMainRight from './ProfileMainRight';

const ProfileMain = ({ me }) => {
  const [BtnClick, setBtnClick] = useState({ guestBtnClick: true, memberBtnClick: false, adminBtnClick: false });
  return (
    <>
      <ProfileMainLeft BtnClick={BtnClick} setBtnClick={setBtnClick} me={me} />
      <ProfileMainMiddle />
      <ProfileMainRight BtnClick={BtnClick} me={me} />
    </>
  );
};

export default ProfileMain;
