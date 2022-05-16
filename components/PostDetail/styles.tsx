import styled from '@emotion/styled';
import { sqBlack, sqRed } from '../../styles/constants';

export const PostDetailDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 100vh;
  margin-top: 20px;
  // .header {
  //   width: 100%;
  //   height: auto;
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: space-between;
  //   border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  //   .header__title {
  //     width: 100%;
  //     overflow: hidden;
  //     line-height: 1em;
  //     text-overflow: clip;
  //     color: ${sqRed};
  //     font-size: 30px;
  //     padding: 0 10px;
  //   }
  //   .header__writer {
  //     font-weight: 700;
  //     align-self: flex-end;
  //     :before {
  //       font-size: 10px;
  //       font-weight: 500;
  //       margin-right: 5px;
  //       content: '작성자: ';
  //     }
  //   }
  // }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
