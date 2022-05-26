import styled from '@emotion/styled';
import { sqBlack, sqLightGray, sqWhite, sqWhiteBoxShadow } from './constants';

export const Block = styled.div`
  padding-bottom: 2rem;
`;

export const TopBlock = styled.div`
  height: 55rem;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;

  @keyframes imageAppear {
    0% {
      width: 0%;
    }
    50% {
    }
    100% {
      width: 30%;
    }
  }

  img {
    margin: 5rem auto;
    width: 30%;
    animation: imageAppear 2s ease-in-out 1;

    @media screen and (max-width: 786px) {
      width: 70%;
      animation: none;
    }
  }
`;

export const MainBlock = styled.div`
  .sub_title {
    font-size: 2rem;
    font-weight: bold;
    margin: 3rem 2rem;
  }
`;

export const ExecutiveBlock = styled.div`
  margin: 5rem 3rem;

  .cardblock {
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
  }

  .card {
    box-shadow: ${sqWhiteBoxShadow};
    margin: 2rem 3rem;
    padding: 8rem 3rem; //나중에 위아래 패딩만 수정하기
    width: 18%;
    text-align: center;
    cursor: pointer;

    @media screen and (max-width: 786px) {
      width: 100%;
    }
  }
`;

export const ProjectTeamBlock = styled.div`
  margin: 5rem 3rem;
`;

export const TechTeamBlock = styled.div`
  margin: 5rem 3rem;
`;

export const Table = styled.table`
  width: 95%;
  margin: 0 auto;
  border: 1px solid ${sqLightGray};
  text-align: center;

  th,
  td {
    padding: 20px;
  }

  thead th {
    background-color: ${sqBlack};
    color: white;
  }

  tbody td {
    color: black;
  }

  tbody {
    & > tr {
      border-top: 1px solid ${sqLightGray};
    }
    & > tr:nth-of-type(1) {
      border-top: none;
    }
  }

  thead th:nth-of-type(1),
  tbody td:nth-of-type(1) {
    width: 30%;
  }

  thead th:nth-of-type(2),
  tbody td:nth-of-type(2) {
    width: 20%;
  }

  thead th:nth-of-type(3),
  tbody td:nth-of-type(3) {
    width: 15%;
  }

  thead th:nth-of-type(4),
  tbody td:nth-of-type(4) {
    width: 35%;
  }
`;
