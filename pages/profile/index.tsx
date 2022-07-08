import React, { useEffect, useState } from 'react';
import { useUser } from '../../hooks/useUser';
import { ProfileDiv, CTDiv, AddButton, EditInput } from '../../styles/profile';
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
  const [FirstBtnclick, setFirstBtnClick] = useState(false);
  const [SecondBtnClick, setSecondBtnClick] = useState(false);

  const [comment, setComment] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [otherUrls, setOtherUrls] = useState([]);

  const [emailcheck, setEmailCheck] = useState(false);

  const [email, setEmailSelected] = useInput('');
  const [team, setTeamSelected] = useState('');
  const [part, setPartSelected] = useState('');

  const { user: me } = useUser();

  useEffect(() => {
    if (!(me && me._id)) {
      Router.push('/');
    }
  }, [me]);
  if (!me) {
    return '내 정보 로딩중..';
  }

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

  const onChangeProfile = () => {
    if (me.member) {
      setComment(me.member.comment);
      setGithubUrl(me.member.githubUrl);
      setOtherUrls(me.member.otherUrls);
    }
    setFirstBtnClick(true);
  };

  const onChangeTeam = (e) => {
    setTeamSelected(e.target.value);
  };

  const onChangePart = (e) => {
    setPartSelected(e.target.value);
  };

  const onSubmitProfile = () => {
    setFirstBtnClick(false);
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

  const onSubmitMember = () => {
    if (!email) {
      alert('이메일을 입력해주세요');
    } else {
      setSecondBtnClick(false);
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
        setEmailCheck(true);
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
        <div className="profile-contents">
          <img className="flowerlogo" src="/flowerLogo_b.png" />
          이메일 주소: {me.email}
        </div>
        <div className="profile-contents">
          <img className="flowerlogo" src="/flowerLogo_b.png" />
          회원 등급: {me.role == 'User' ? '일반등급' : '관리자'}
        </div>
        {FirstBtnclick && me.member && (
          <>
            <div className="profile-contents">
              <img className="flowerlogo" src="/flowerLogo_b.png" />
              간략한 소개:
              <EditInput placeholder="소개를 입력해주세요" onChange={onChangeComment} value={comment} />
            </div>
            <div className="profile-contents">
              <img className="flowerlogo" src="/flowerLogo_b.png" />
              깃허브 URL:
              <EditInput placeholder="https://github.com" onChange={onChangeGithubUrl} value={githubUrl} />
            </div>
            <div className="profile-contents">
              <img className="flowerlogo" src="/flowerLogo_b.png" />
              나머지 URL:
              <EditInput placeholder="https://ex.com,https://ex2.com" onChange={onChangeOtherUrls} value={otherUrls} />
            </div>
          </>
        )}

        {!FirstBtnclick && me.member && me.member.comment && me.member.comment !== '' && (
          <>
            <div className="profile-contents">
              <img className="flowerlogo" src="/flowerLogo_b.png" />
              간략한 소개:
              <div style={{ marginLeft: '0.5rem' }}>{me.member.comment}</div>
            </div>
          </>
        )}
        {!FirstBtnclick && me.member && me.member.githubUrl && me.member.githubUrl !== '' && (
          <>
            <div className="profile-contents">
              <img className="flowerlogo" src="/flowerLogo_b.png" />
              깃허브 URL:
              <div>
                <Link href={me.member.githubUrl}>
                  <div style={{ cursor: 'pointer', marginLeft: '0.5rem' }}>{me.member.githubUrl}</div>
                </Link>
              </div>
            </div>
          </>
        )}
        {!FirstBtnclick && me.member && me.member.otherUrls.length > 0 && me.member.otherUrls[0] !== '' && (
          <>
            <div className="profile-contents">
              <img className="flowerlogo" src="/flowerLogo_b.png" />
              나머지 URL:
              <div style={{ display: 'flex' }}>
                {me.member.otherUrls.map((item) => (
                  <Link href={item} key={item}>
                    <div style={{ marginLeft: '0.5rem', cursor: 'pointer' }}>{item}</div>
                  </Link>
                ))}
              </div>
            </div>
          </>
        )}

        {SecondBtnClick && (
          <>
            <div className="profile-contents">
              <img className="flowerlogo" src="/flowerLogo_b.png" />
              <EditInput placeholder="이메일" onChange={setEmailSelected} value={email} />
              <div>
                <select onChange={onChangeTeam}>
                  <option value="project" selected>
                    project
                  </option>
                  <option value="techcourse">techCourse</option>
                  <option value="">없음</option>
                </select>
                <select onChange={onChangePart}>
                  <option value="frontend" selected>
                    frontend
                  </option>
                  <option value="backend">backend</option>
                  <option value="ios">ios</option>
                  <option value="dev">devops</option>
                  <option value="">없음</option>
                </select>
              </div>
            </div>
          </>
        )}

        <div style={{ display: 'flex' }}>
          {me.member && !SecondBtnClick && (
            <>
              {!FirstBtnclick ? (
                <AddButton onClick={onChangeProfile}>프로필 수정하기</AddButton>
              ) : (
                <>
                  <AddButton onClick={onSubmitProfile}>수정하기</AddButton>
                  <AddButton onClick={() => setFirstBtnClick(false)}>취소하기</AddButton>
                </>
              )}
            </>
          )}
          {!FirstBtnclick && me.role === 'Admin' && (
            <>
              {!SecondBtnClick ? (
                <AddButton onClick={() => setSecondBtnClick(true)}>시퀀스 멤버 등록 및 변경하기</AddButton>
              ) : (
                <>
                  <AddButton onClick={onSubmitMember}>변경하기</AddButton>
                  <AddButton onClick={() => setSecondBtnClick(false)}>취소하기</AddButton>
                </>
              )}
            </>
          )}

          {!FirstBtnclick && !SecondBtnClick && me.role === 'Admin' && (
            <Link href="/board/projects/write">
              <AddButton>프로젝트 추가하기</AddButton>
            </Link>
          )}
          {!me.valid && <AddButton onClick={onEmailCheck}>이메일 인증하기</AddButton>}
        </div>
        {emailcheck && <EmailCheckProfile setEmailCheck={setEmailCheck} />}
      </ProfileDiv>
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
