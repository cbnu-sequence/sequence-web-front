import Link from 'next/link';
import React from 'react';
import { MembersBlock, TCIntroductionDiv, TCMemberDiv, TechcourseteamDiv } from './styles';

const TechCourseTeam = ({ data }) => {
  const Data = data.data.data;
  return (
    <>
      <TechcourseteamDiv>
        <TCIntroductionDiv>
          <p className="pullname">정보통신 테크 코스</p>
          <p className="shortname">정 테 코</p>
          <div className="introduceBox">
            <p className="introduce_top">
              프로그래밍 입문부터 함께하는 시퀀스의 <strong>테크코스</strong>
            </p>
            <div className="introduceBox2">
              <div className="introduce_1semester">
                1학기
                <div className="introduce_content_1">
                  멘토멘티 시스템 운영
                  <br />
                  정기세미나 진행
                </div>
              </div>
              <div className="introduce_2semester">
                2학기
                <div className="introduce_content_2">
                  간단한 프로젝트 준비
                  <br />
                  정기세미나 진행
                </div>
              </div>
            </div>
          </div>
        </TCIntroductionDiv>

        <TCMemberDiv>
          <div>테크코스팀</div>
          <div className="tcMemberBox" />
        </TCMemberDiv>
      </TechcourseteamDiv>

      <MembersBlock>
        {Data.map((item) => (
          <div key={item._id} className="item">
            <div className="name">{item.user.name}</div>
            {item.githubUrl && (
              <Link href={item.githubUrl} passHref>
                <img src="/github.png" />
              </Link>
            )}
            <div className="email">
              [{item.user.email.slice(-6) === ':kakao' ? item.user.email.slice(0, -6) : item.user.email} ]
            </div>
          </div>
        ))}
      </MembersBlock>
    </>
  );
};

export default TechCourseTeam;
