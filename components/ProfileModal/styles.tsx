import styled from '@emotion/styled';
import { sqLightGray, sqWhite, sqWhiteBoxShadow } from '../../styles/constants';

export const Block = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 0;
`;

export const ModalContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
  height: 70%;
  max-height: 80%;
  padding: 16px;
  padding-bottom: 40rem;
  box-shadow: ${sqWhiteBoxShadow};
  background: ${sqWhite};
  border-radius: 10px;
  text-align: center;
  .desc {
    display: flex;
    flex-direction: column;
    align-items: center;
    & > img {
      width: 60%;
      height: 25rem;
      object-fit: cover;
      box-shadow: ${sqWhiteBoxShadow};
      border-radius: 5px;
      @media screen and (max-width: 1500px) {
        height: 15rem;
      }
    }
    & > p {
      width: 70%;
      margin-top: 2rem;
      font-size: 1.08rem;
      @media screen and (max-width: 786px) {
        font-size: 1rem;
      }
    }
    font-size: 1.08rem;
    @media screen and (max-width: 786px) {
      font-size: 1rem;
    }
  }
  @media screen and (max-width: 786px) {
    width: 80%;
  }
`;

export const TopBlock = styled.div`
  display: flex;
  .title {
    font-weight: bold;
    font-size: 1.2rem;
    flex: 1;
  }

  .icon {
    cursor: pointer;
    font-size: 1.2rem;
  }
`;

export const ColorLine = styled.div`
  border-top: 1px solid ${sqLightGray};
  margin: 1rem 0;
`;
