import styled from '@emotion/styled';
import { sqWhiteBoxShadow } from '../../styles/constants';

export const Block = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  z-index: 1;
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
  @media screen and (max-width: 768px) {
    width: 80%;
    height: 65%;
  }

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

  .zoomImage-bottom {
    margin: 1rem 0;
    display: flex;
    justify-content: space-between;
    .zoomImage-bottom-leftIcon,
    .zoomImage-bottom-rightIcon {
      font-size: 1.2rem;
      font-weight: bold;
    }
  }
`;
