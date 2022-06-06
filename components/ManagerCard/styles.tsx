import styled from '@emotion/styled';
import { sqWhiteBoxShadow, sqBlack } from '../../styles/constants';

const ManagerCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  box-shadow: ${sqWhiteBoxShadow};
  margin: 3.5rem 3rem;
  padding: 6.2% 2.5%;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${sqBlack};
  text-align: center;
  cursor: pointer;
  & > div {
    & > img {
      width: 100%;
      height: 10rem;
      box-shadow: ${sqWhiteBoxShadow};
      border-radius: 5px;
      object-fit: cover;
      margin-bottom: 10px;
    }
  }
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

export default ManagerCard;
