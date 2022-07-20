import React from 'react';
import { ProfileMainLeftBlock } from './styles';

const ProfileMainLeft = ({ me, BtnClick, setBtnClick }) => {
  const { guestBtnClick, memberBtnClick, adminBtnClick } = BtnClick;
  const { member, role } = me;

  return (
    <ProfileMainLeftBlock>
      <div
        className={guestBtnClick ? 'click' : 'no-click'}
        onClick={() => setBtnClick({ guestBtnClick: true, memberBtnClick: false, adminBtnClick: false })}
      >
        회원
      </div>
      {guestBtnClick && <div className="btnline" />}
      {member && member.team && (
        <>
          <div
            className={memberBtnClick ? 'click' : 'no-click'}
            onClick={() => setBtnClick({ guestBtnClick: false, memberBtnClick: true, adminBtnClick: false })}
          >
            멤버
          </div>
          {memberBtnClick && <div className="btnline" />}
        </>
      )}
      {role === 'Admin' && (
        <>
          <div
            className={adminBtnClick ? 'click' : 'no-click'}
            onClick={() => setBtnClick({ guestBtnClick: false, memberBtnClick: false, adminBtnClick: true })}
          >
            관리자
          </div>
          {adminBtnClick && <div className="btnline" />}
        </>
      )}
    </ProfileMainLeftBlock>
  );
};

export default ProfileMainLeft;
