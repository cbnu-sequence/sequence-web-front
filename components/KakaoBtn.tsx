import { KAKAO_AUTH_URL } from '../config/config';
import Link from 'next/link';
import styled from '@emotion/styled';

const KaKaoBtn = styled.button`
  background-image: url('../public/kakao.png');
`;

const KakaoBtn = () => {
  return (
    <KaKaoBtn>
      <Link href={KAKAO_AUTH_URL}>카카오로그인</Link>
    </KaKaoBtn>
  );
};

export default KakaoBtn;
