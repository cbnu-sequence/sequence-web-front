import styled from '@emotion/styled';
import { sqWhite, sqDarkGreen, sqDeepDarkGreen, sqWhiteBoxShadow } from '../styles/constants';
type TabBarProps = {
  current: 'daily' | 'weekly' | 'monthly';
};

export const RankingDiv = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  background-color: ${sqDarkGreen};
  flex-direction: column;
  align-items: center;
  color: white;
  position: relative;
  font-size: 20px;
  top: 200px;
  & > h2 {
    font-family: 'Noto Serif KR', serif;
    font-size: 5rem;
    font-weight: 800;
  }
`;

export const RangeTabBar = styled.div<TabBarProps>`
  display: flex;
  & > ul {
    margin-top: 10px;
    display: flex;
    font-size: 25px;
    font-weight: 200;
    justify-content: space-between;
    list-style: none;
    & > li {
      cursor: pointer;
      padding: 0px 10px 0px 10px;
      margin: 0px 10px;
      transition: all 100ms ease-in-out;
      :nth-of-type(1) {
        border-bottom: ${(props) => (props.current === 'daily' ? `2px solid ${sqWhite}` : 'none')};
      }
      :nth-of-type(2) {
        border-bottom: ${(props) => (props.current === 'weekly' ? `2px solid ${sqWhite}` : 'none')};
      }
      :nth-of-type(3) {
        border-bottom: ${(props) => (props.current === 'monthly' ? `2px solid ${sqWhite}` : 'none')};
      }
    }
  }
`;

export const RankingTable = styled.table`
  margin-top: 4rem;
  width: 70vw;
  & > thead {
    font-size: 16px;
    & > tr {
      align: center;
      & > th {
        border-radius: 4px;
        padding: 10px;
        margin: 10px;
        border-spacing: 30px;
        background-color: ${sqDeepDarkGreen};
        box-shadow: ${sqWhiteBoxShadow};
      }
    }
  }
  & > tbody {
    & > tr {
      justify-content: space-between;
    }
  }
`;
