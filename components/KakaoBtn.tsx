import { KAKAO_AUTH_URL } from '../config/config';
import Link from 'next/link';
import styled from '@emotion/styled';

const KaKaoBtn=styled.button`
  background-image: url("../pages/images/kakao.png");
`

const KakaoBtn=()=>{
  return(
    <KaKaoBtn>
      <Link href={KAKAO_AUTH_URL}>하하</Link>
    </KaKaoBtn>
  )
}

export default KakaoBtn;
