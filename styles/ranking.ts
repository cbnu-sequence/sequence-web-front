import styled from '@emotion/styled';
import { sqWhite, sqDarkGreen, sqDeepDarkGreen, sqWhiteBoxShadow } from '../styles/constants';
type TabBarProps = {
  current: 'daily' | 'weekly' | 'monthly';
};

export const RankingDiv = styled.div`
  padding-bottom: 6rem;
  display: flex;
  width: 100%;
  height: auto;
  background-color: ${sqDarkGreen};
  flex-direction: column;
  align-items: center;
  color: white;
  position: relative;
  font-size: 20px;
  top: 90px;
  & > h2 {
    font-family: 'Noto Serif KR', serif;
    font-size: max(5vw, 32px);
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
    & > li {
      cursor: pointer;
      padding: 0px 10px 0px 10px;
      margin: 0px 10px 20px 10px;
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
      & > td {
        border: 20px solid ${sqDarkGreen};
      }
      & > th {
        border-radius: 30px;
        border: 13px solid ${sqDarkGreen};
        padding: 10px;
        background-color: ${sqDeepDarkGreen};
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
