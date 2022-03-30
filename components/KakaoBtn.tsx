import { KAKAO_AUTH_URL } from '../config/config';
import Link from 'next/link';
import styled from '@emotion/styled';

const KaKaoBtn = styled.button`
  border: none;
  background-repeat: no-repeat;
  background-size: auto;
  width: 200px;
  height: 50px;
  & > img {
    border-radius: 6px;
  }
`;

const KakaoBtn = () => {
  return (
    <KaKaoBtn>
      <Link href={KAKAO_AUTH_URL}>
        <img src="/kakao.png" />
      </Link>
    </KaKaoBtn>
  );
};

export default KakaoBtn;
