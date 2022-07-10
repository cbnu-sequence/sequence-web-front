import styled from '@emotion/styled';
import { sqWhiteBoxShadow, sqBlack } from '../../styles/constants';

const ManagerCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 17%;
  box-shadow: ${sqWhiteBoxShadow};
  margin: 3.3rem 3rem;
  padding: 3.6% 2.2%;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${sqBlack};
  text-align: center;
  cursor: pointer;
  & > div {
    & > img {
      width: 100%;
      height: 13.5rem;
      box-shadow: ${sqWhiteBoxShadow};
      border-radius: 5px;
      object-fit: cover;
      margin-bottom: 18px;
 @media screen and (max-width: 1000px) {
        margin: 0 auto;
        margin-bottom: 1.2rem;
        width: 80%;
        height: 16rem;
      }
    }
  }
  @media screen and (max-width: 1000px) {
    width: 100%;
    padding: 10% 2.2%;
  }
`;

export default ManagerCard;
