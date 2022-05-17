import { FooterDiv } from './styles';
import Link from 'next/link';

function Footer() {
  return (
    <FooterDiv>
      <img src="/sequence_b.png" />
      <div>
        <p>주소: 충청북도 청주시 서원구 개신동 29</p>
        <p>우편번호: 362804</p>
      </div>
    </FooterDiv>
  );
}
export default Footer;
