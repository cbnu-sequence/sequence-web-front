import { FooterDiv } from './styles';

function Footer() {
  return (
    <FooterDiv>
      <img src="/sequence_b.png" />
      <div>
        <p>주소: 충청북도 청주시 서원구 개신동 29</p>
        <p>우편번호: 362804</p>

        <div className="copyright">
          <p>&copy; Sequence. All rights reserved.</p>
          <p>시퀀스는 세상에 좋은 영향력을 미치기 위해 항상 노력하겠습니다.</p>
        </div>
      </div>
    </FooterDiv>
  );
}
export default Footer;
