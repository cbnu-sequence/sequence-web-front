import React, { useCallback, useEffect, useState } from 'react';
import { useUser } from '../../hooks/useUser';
import { ProfileDiv, CTDiv, AddButton, EditInput, Example } from '../../styles/profile';
import Header from '../../components/Header';
import Router from 'next/router';
import CommonTable from '../../components/Table/CommonTable';
import Link from 'next/link';
import { Input, Tr } from '@chakra-ui/react';
import CommonTd from '../../components/Table/CommonTd';
import dayjs from 'dayjs';
import { ChangeMember, ChangeUserProfile, postEmail } from '../../apis/user';
import router from 'next/router';
import NoList from '../../components/NoList';
import EmailCheckProfile from '../../components/EmailCheckProfile';
import useInput from '../../hooks/useInput';

function Profile() {
  const [guestBtnClick, setGuestBtnClick] = useState(true);
  const [memberBtnClick, setMemberBtnClick] = useState(false);
  const [adminBtnClick, setAdminBtnClick] = useState(false);

  const [changeMemberProfileBtnClick, setChangeMemberProfileBtnClick] = useState(false);
  const [changeAdminMemberBtnClick, setChangeAdminMemberBtnClick] = useState(false);

  const [comment, setComment] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [otherUrls, setOtherUrls] = useState([]);

  const [email, setEmailSelected] = useInput('');
  const [team, setTeamSelected] = useState('');
  const [part, setPartSelected] = useState('');

  console.log(email, team, part);

  const [emailcheckBtnClick, setEmailCheckBtnClick] = useState(false);

  const { user: me } = useUser();

  useEffect(() => {
    if (!(me && me._id)) {
      Router.push('/');
    }
  }, [me]);
  if (!me) {
    return '내 정보 로딩중..';
  }

  const onBtnClick = (button) => {
    setGuestBtnClick(false);
    setMemberBtnClick(false);
    setAdminBtnClick(false);
    if (button === 'guest') {
      setGuestBtnClick(true);
    } else if (button === 'member') {
      setMemberBtnClick(true);
    } else if (button === 'admin') {
      setAdminBtnClick(true);
    }
  };

  const onChangeComment = (e) => {
    setComment(e.target.value);
  };

  const onChangeGithubUrl = (e) => {
    setGithubUrl(e.target.value);
  };

  const onChangeOtherUrls = (e) => {
    const arr = [];
    e.target.value.split(',').forEach((item) => {
      arr.push(item.trim());
    });
    setOtherUrls(arr);
  };

  const onChangeMemberProfile = () => {
    setComment(me.member.comment);
    setGithubUrl(me.member.githubUrl);
    setOtherUrls(me.member.otherUrls);
    setChangeMemberProfileBtnClick(true);
  };

  const onChangeTeam = (e) => {
    setTeamSelected(e.target.value);
  };

  const onChangePart = (e) => {
    setPartSelected(e.target.value);
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
    <div>
      <ProfileDiv>
        <div className="profile-title">
          {me.name}님의 프로필
          <h2>sequence makes difference</h2>
        </div>
      </ProfileDiv>
      <Example>
        <div className="left">
          <div className={guestBtnClick ? 'left__button--click' : 'left__button'} onClick={() => onBtnClick('guest')}>
            회원
          </div>
          {me.member && (
            <div
              className={memberBtnClick ? 'left__button--click' : 'left__button'}
              onClick={() => onBtnClick('member')}
            >
              멤버
            </div>
          )}
          {me.role === 'Admin' && (
            <div className={adminBtnClick ? 'left__button--click' : 'left__button'} onClick={() => onBtnClick('admin')}>
              관리자
            </div>
          )}
        </div>
        <div className="middle" />
        <div className="right">
          {guestBtnClick && (
            <div className="guest">
              <div className="guest__title">
                <div className="guest__line">이메일 주소</div>
                <div className="guest__line">회원 등급</div>
                <div className="guest__line">시퀀스 멤버</div>
                <div className="guest__line">이메일 인증</div>
              </div>
              <div className="guest__content">
                <div className="guest__line">{me.email}</div>
                <div className="guest__line">{me.role == 'User' ? '일반등급' : '관리자'}</div>
                <div className="guest__line">{me.member ? 'O' : 'X'}</div>
                {me.valid ? (
                  <div className="guest__email--valid">인증 완료</div>
                ) : (
                  <div className="guest__email--novalid">
                    <button onClick={onEmailCheck}>(미인증 상태) 이메일 인증하기</button>
                  </div>
                )}
                {emailcheckBtnClick && <EmailCheckProfile setEmailCheckBtnClick={setEmailCheckBtnClick} />}
              </div>
            </div>
          )}
          {memberBtnClick && (
            <>
              <div className="member">
                <div className="member__title">
                  <div className="member__line">팀</div>
                  <div className="member__line">파트</div>
                  <div className="member__line">간략한 소개</div>
                  <div className="member__line">깃허브 주소</div>
                  <div className="member__line">기타 주소</div>
                </div>
                <div className="member__content">
                  {changeMemberProfileBtnClick ? (
                    <>
                      <div className="member__line">{me.member.team ? me.member.team : '팀이 없습니다'}</div>
                      <div className="member__line">{me.member.part ? me.member.part : '파트가 없습니다'}</div>
                      <div className="member__line">
                        <EditInput placeholder="소개를 입력해주세요" onChange={onChangeComment} value={comment} />
                      </div>
                      <div className="member__line--githubUrl">
                        <EditInput placeholder="https://github.com" onChange={onChangeGithubUrl} value={githubUrl} />
                      </div>
                      <div className="member__line--otherUrl">
                        <EditInput
                          placeholder="https://ex.com,https://ex2.com"
                          onChange={onChangeOtherUrls}
                          value={otherUrls}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="member__line">{me.member.team ? me.member.team : '팀이 없습니다'}</div>
                      <div className="member__line">{me.member.part ? me.member.part : '파트가 없습니다'}</div>
                      <div className="member__line">{me.member.comment ? me.member.comment : '소개가 없습니다'}</div>
                      <div className="member__line--githubUrl">
                        {me.member.githubUrl ? (
                          <Link href={me.member.githubUrl}>{me.member.githubUrl}</Link>
                        ) : (
                          '주소가 없습니다'
                        )}
                      </div>

                      <div className="member__line--otherUrl">
                        {me.member.otherUrls.length > 0 && me.member.otherUrls[0] !== ''
                          ? me.member.otherUrls.map((item) => (
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
              <div className="member-btn">
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
                <>
                  <>
                    <EditInput placeholder="이메일" onChange={setEmailSelected} value={email} />
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
                  </>
                  <AddButton onClick={onSubmitAdminMember}>변경</AddButton>
                  <AddButton onClick={() => setChangeAdminMemberBtnClick(false)}>취소</AddButton>
                </>
              )}
              <hr />
              <Link href="/board/projects/write">
                <button>프로젝트 추가하기</button>
              </Link>
            </div>
          )}
        </div>
      </Example>
      <CTDiv>
        <span>내 게시글</span>
        {me.posts && me.posts.length > 0 ? (
          <CommonTable headers={['번호', '작성자', '작성일', '제목']}>
            {me.posts.map((item, index) => (
              <Link href={`../../posts/${item._id}`} key={item._id}>
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
