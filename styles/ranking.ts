import styled from '@emotion/styled';
import { sqWhite, sqDarkGreen, sqDeepDarkGreen, sqWhiteBoxShadow, sqBlack, sqRed } from '../styles/constants';
type TabBarProps = {
  current: 'daily' | 'weekly' | 'monthly';
  isMobileApp?: boolean;
};
type RankingDivProps = {
  isMobileApp?: boolean;
};
type RankingTableProps = {
  isMobileApp?: boolean;
};

export const RankingDiv = styled.div<RankingDivProps>`
  padding-bottom: 6rem;
  display: flex;
  width: 100%;
  height: auto;
  background-color: ${(props) => (props.isMobileApp ? sqWhite : sqDarkGreen)};
  flex-direction: column;
  align-items: center;
  color: ${(props) => (props.isMobileApp ? sqBlack : sqWhite)};
  position: relative;
  font-size: 20px;
  top: 90px;
  & > h2 {
    font-family: 'Noto Serif KR', serif;
    font-size: max(5vw, 30px);
    font-weight: 800;
  }
`;

export const RangeTabBar = styled.div<TabBarProps>`
  display: flex;
  & > ul {
    margin-top: 10px;
    display: flex;
    font-size: 22px;
    font-weight: 200;
    justify-content: space-between;
    list-style: none;
    color: ${(props) => (props.isMobileApp ? sqRed : sqWhite)};

    & > li {
      cursor: pointer;
      padding: 0px 10px 0px 10px;
      margin: 0px 10px 20px 10px;
      transition: all 100ms ease-in-out;
      :nth-of-type(1) {
        //current가 daily 이고 모바일 -> red
        //current가 daily 이고 !모바일 -> white
        border-bottom: ${(props) =>
          props.current === 'daily' ? (props.isMobileApp ? `2px solid ${sqRed}` : `2px solid ${sqWhite}`) : 'none'};
      }

      :nth-of-type(2) {
        border-bottom: ${(props) =>
          props.current === 'weekly' ? (props.isMobileApp ? `2px solid ${sqRed}` : `2px solid ${sqWhite}`) : 'none'};
      }

      :nth-of-type(3) {
        border-bottom: ${(props) =>
          props.current === 'monthly' ? (props.isMobileApp ? `2px solid ${sqRed}` : `2px solid ${sqWhite}`) : 'none'};
      }
    }
  }
`;

export const RankingTable = styled.table<RankingTableProps>`
  margin-top: 4rem;
  width: 70vw;
  & > thead {
    font-size: 16px;
    & > tr {
      align: center;
      & > td {
        border: 20px solid ${(props) => (props.isMobileApp ? sqWhite : sqDarkGreen)};
      }
      & > th {
        border-radius: 30px;
        border: 13px solid ${(props) => (props.isMobileApp ? sqWhite : sqDarkGreen)};
        padding: 10px;
        background-color: ${(props) => (props.isMobileApp ? sqWhite : sqDeepDarkGreen)};
      }
    }
  }
  & > tbody {
    & > tr {
      justify-content: space-between;

      & > td {
        text-align: center;
      }
      & > .blank {
        margin-bottom: 15px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    width: 85vw;
    & > thead {
      font-size: 11px;
    }
    & > tbody {
      & > tr {
        & > th {
          font-size: 13px;
        }
        & > td {
          font-size: 13px;
        }
      }
    }
  }
`;
