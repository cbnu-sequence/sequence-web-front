import styled from '@emotion/styled';
import { sqBlack, sqWhite, sqDarkGray, sqDeepLightGray } from '../../styles/constants';

export const PaginationNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  margin: 15px;
  margin-top: 25px;
  margin-right: 10%;
`;

export const Limit = styled.label`
  display: flex;
  align-items: center;
  & > label {
    padding-top: 0.8px;
    font-weight: 700;
    font-size: 15.2px;
    white-space: nowrap;
    padding-right: 10px;
  }
`;

export const Select = styled.select`
  font-weight: 425;
  font-size: 15.2px;
  cursor: pointer;
  border: none;
`

export const ButtonLeft = styled.button`
margin: 0 auto;
border: none;
border-radius: 0.3rem;
width: 2.05rem;
height: 2.05rem;
font-size: 1.3rem;
text-align: center;
color: ${sqBlack};
background-color: ${sqWhite};
&:hover {
  color: ${sqBlack};
  background-color: ${sqDeepLightGray};  
  cursor: pointer;
}
`;

export const ButtonCenter = styled.button`
margin: 0 auto;
border: none;
border-radius: 0.3rem;
width: 2.05rem;
height: 2.05rem;
font-size: 0.8rem;
text-align: center;
color: ${sqWhite};
background-color: ${sqBlack};
&:hover {
  color: ${sqWhite};
  background-color: ${sqDarkGray};  
  cursor: pointer;
}
`;

export const ButtonRight = styled.button`
margin: 0 auto;
border: none;
border-radius: 0.3rem;
width: 2.05rem;
height: 2.05rem;
font-size: 1.3rem;
text-align: center;
color: ${sqBlack};
background-color: ${sqWhite};
&:hover {
  color: ${sqBlack};
  background-color: ${sqDeepLightGray};  
  cursor: pointer;
}
`;