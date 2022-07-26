import Link from 'next/link';
import React, { useState } from 'react';
import { AddButton, EditInput } from './styles';
import EmailCheckProfile from '../../EmailCheckProfile';
import { ProfileMainScreenBlock } from './styles';
import useInput from '../../../hooks/useInput';
import { ChangeMember, ChangeUserProfile, postEmail } from '../../../apis/user';
import router from 'next/router';

const ProfileMainScreen = ({ BtnClick, me }) => {
  const { guestBtnClick, memberBtnClick, adminBtnClick } = BtnClick;
  const { member, role } = me;

  const [changeMemberProfileBtnClick, setChangeMemberProfileBtnClick] = useState(false);
  const [changeAdminMemberBtnClick, setChangeAdminMemberBtnClick] = useState(false);
  const [emailcheckBtnClick, setEmailCheckBtnClick] = useState(false);

  const [comment, setComment] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [otherUrls, setOtherUrls] = useState([]);

  const [email, setEmailSelected] = useInput('');
  const [team, setTeamSelected] = useState('');
  const [part, setPartSelected] = useState('');

  const onChangeComment = (e) => {
    setComment(e.target.value);
  };

  const onChangeGithubUrl = (e) => {
    setGithubUrl(e.target.value);
  };

  const onChangeTeam = (e) => {
    setTeamSelected(e.target.value);
  };

  const onChangePart = (e) => {
    setPartSelected(e.target.value);
  };

  const onChangeOtherUrls = (e) => {
    const arr = [];
    e.target.value.split(',').forEach((item) => {
      arr.push(item.trim());
    });
    setOtherUrls(arr);
  };

  const onChangeMemberProfile = () => {
    setComment(member.comment);
    setGithubUrl(member.githubUrl);
    setOtherUrls(member.otherUrls);
    setChangeMemberProfileBtnClick(true);
  };

  const onSubmitMemberProfile = () => {
    setChangeMemberProfileBtnClick(false);
    ChangeUserProfile({ githubUrl, otherUrls, comment }).then((response) => {
      if (response.status === 200) {
        router.replace('/');
        alert('수정이 완료되었습니다.');
      } else if (response.status === 403) {
        alert('로그인 해주세요!');
        router.replace('/login');
      } else {
        alert('실패했습니다.');
      }
    });
  };

  const onSubmitAdminMember = () => {
    if (!email) {
      alert('이메일을 입력해주세요');
    } else {
      setChangeAdminMemberBtnClick(false);
      ChangeMember({ email, part, team }).then((response) => {
        if (response.status === 200) {
          router.replace('/');
          alert('수정이 완료되었습니다.');
        } else if (response.status === 403) {
          alert('로그인 해주세요!');
          router.replace('/login');
        } else {
          alert('실패했습니다.');
        }
      });
    }
  };

  const onEmailCheck = () => {
    postEmail().then((response) => {
      if (response.status === 200) {
        setEmailCheckBtnClick(true);
        alert('이메일로 인증번호가 전송되었습니다.');
      } else {
        alert('오류가 발생했습니다.');
      }
    });
  };

  return (
    <ProfileMainScreenBlock>
      {guestBtnClick && (
        <div className="guest">
          <div className="title">
            <div className="line">이메일 주소</div>
            <div className="line">회원 등급</div>
            <div className="line">시퀀스 멤버</div>
            <div className="line">이메일 인증</div>
          </div>
          <div className="content">
            <div className="line">{me.email}</div>
            <div className="line">{role == 'User' ? '일반등급' : '관리자'}</div>
            <div className="line">{member && member.team ? 'O' : 'X'}</div>
            {me.valid ? (
              <div className="valid">인증 완료</div>
            ) : (
              <div className="novalid">
                <button onClick={onEmailCheck}>(미인증) 이메일 인증하기</button>
              </div>
            )}
            {emailcheckBtnClick && <EmailCheckProfile setEmailCheckBtnClick={setEmailCheckBtnClick} />}
          </div>
        </div>
      )}
      {memberBtnClick && (
        <>
          <div className="member">
            <div className="title">
              <div className="line">팀</div>
              <div className="line">파트</div>
              <div className="line">간략한 소개</div>
              <div className="line">깃허브 주소</div>
              <div className="line">기타 주소</div>
            </div>
            <div className="content">
              {changeMemberProfileBtnClick ? (
                <>
                  <div className="line">{member.team ? member.team : '팀이 없습니다'}</div>
                  <div className="line">{member.part ? member.part : '파트가 없습니다'}</div>
                  <div className="line">
                    <EditInput placeholder="소개를 입력해주세요" onChange={onChangeComment} value={comment} />
                  </div>
                  <div className="line__githubUrl">
                    <EditInput placeholder="https://github.com" onChange={onChangeGithubUrl} value={githubUrl} />
                  </div>
                  <div className="line__otherUrl">
                    <EditInput
                      placeholder="https://ex.com,https://ex2.com"
                      onChange={onChangeOtherUrls}
                      value={otherUrls}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="line">{member.team ? member.team : '팀이 없습니다'}</div>
                  <div className="line">{member.part ? member.part : '파트가 없습니다'}</div>
                  <div className="line">{member.comment ? member.comment : '소개가 없습니다'}</div>
                  <div className="line__githubUrl">
                    {member.githubUrl ? <Link href={member.githubUrl}>{member.githubUrl}</Link> : '주소가 없습니다'}
                  </div>

                  <div className="line__otherUrl">
                    {member.otherUrls.length > 0 && member.otherUrls[0] !== ''
                      ? member.otherUrls.map((item) => (
                          <Link href={item} key={item}>
                            <div>{item}</div>
                          </Link>
                        ))
                      : '주소가 없습니다'}
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="member__btn">
            {!changeMemberProfileBtnClick ? (
              <button onClick={onChangeMemberProfile}>편집하기</button>
            ) : (
              <>
                <button onClick={onSubmitMemberProfile}>수정하기</button>
                <button onClick={() => setChangeMemberProfileBtnClick(false)}>취소하기</button>
              </>
            )}
          </div>
        </>
      )}
      {adminBtnClick && (
        <div className="admin">
          {!changeAdminMemberBtnClick ? (
            <button onClick={() => setChangeAdminMemberBtnClick(true)}>시퀀스 멤버 등록 및 변경하기</button>
          ) : (
            <div className="memberbtn__click">
              <button onClick={() => setChangeAdminMemberBtnClick(false)}>시퀀스 멤버 등록 및 변경하기</button>
              <div className="memberemail">
                <EditInput placeholder="이메일을 입력해주세요" onChange={setEmailSelected} value={email} />
              </div>
              <div className="memberselect">
                <select onChange={onChangeTeam}>
                  <option value="">없음</option>
                  <option value="project">project</option>
                  <option value="techCourse">techCourse</option>
                </select>
                <select onChange={onChangePart}>
                  <option value="">없음</option>
                  <option value="frontend">frontend</option>
                  <option value="backend">backend</option>
                  <option value="ios">ios</option>
                  <option value="devops">devops</option>
                </select>
              </div>
              <div className="memberchangebtn">
                <AddButton onClick={onSubmitAdminMember}>변경</AddButton>
                <AddButton onClick={() => setChangeAdminMemberBtnClick(false)}>취소</AddButton>
              </div>
            </div>
          )}
          <hr />
          <Link href="/board/projects/write" passHref>
            <button>프로젝트 추가하기</button>
          </Link>
        </div>
      )}
    </ProfileMainScreenBlock>
  );
};

export default ProfileMainScreen;
