import styled from '@emotion/styled';
import { sqWhiteBoxShadow } from '../../styles/constants';

export const Block = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  z-index: 0;
`;

export const ModalContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 80%;
  max-height: 80%;
  padding: 16px;
  box-shadow: ${sqWhiteBoxShadow};
  background: white;
  border-radius: 10px;

  .zoomImage-top {
    display: flex;
    margin-bottom: 0.5rem;
    .zoomImage-top-null {
      flex: 1;
    }
    .zoomImage-top-icon {
      cursor: pointer;
      font-size: 1.2rem;
    }
  }

  .zoomImage-image {
    width: 100%;
    height: 90%;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
