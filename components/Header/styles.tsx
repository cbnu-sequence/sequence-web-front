import styled from '@emotion/styled';
import { sqBlack, sqWhite } from '../../styles/constants';

type HeaderProps = {
  isToggled: boolean;
  userToggled: boolean;
};

export const HeaderDiv = styled.div<HeaderProps>`
  width: 100vw;
  margin: 0 auto;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${sqWhite};
  font-weight: 500;
  font-size: 18px;
  background-color: ${sqBlack};

  .logo {
    margin: 10px;
    padding: 5px 10px;
    width: 140px;
    height: 40px;
    cursor: pointer;
  }

  .header__menulist {
    list-style: none;
    display: flex;
    white-space: nowrap;
    height: 100%;
    text-align: center;
    align-items: center;
    & > li {
      margin: 0 20px;
      display: flex;
      align-items: center;
      cursor: pointer;
      position: relative;
      height: 100%;
    }
  }

  .header__menulist li ul {
    list-style: none;
    display: none;
    width: 110vw;
    height: 30px;
    top: 30px;
    margin-left: calc(-50vw + 50% - 70px);
    margin-top: 20px;
  }

  .header__menulist li:hover ul {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: gray;
    & > li {
      text-align: center;
      margin: 0 20px;
      font-size: 14px;
    }
  }

  .header__left {
    display: flex;
  }

  .header__right {
    list-style: none;
    display: flex;
    & > li {
      cursor: pointer;
      padding: 10px;
    }
  }

  .header__right div {
    margin: 0 1rem;
  }

  .toggle {
    display: none;
    font-size: 1.5rem;
    padding: 1rem 1rem;
  }

  .user {
    display: none;
    font-size: 1.5rem;
    padding: 1rem 1rem;
  }

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;

    .header__right {
      display: ${(props) => (props.userToggled ? 'flex' : 'none')};
      flex-direction: column;
      width: 100%;
      background-color: black;
    }

    .header__menulist {
      display: ${(props) => (props.isToggled ? 'flex' : 'none')};
      flex-direction: column;
      width: 100%;
      background-color: ${sqBlack};
      padding-left: 10px;
    }

    .header__menulist li,
    .header__right li {
      margin: 1rem 0;
      padding: 0;
      & > a {
        background-color: ${sqBlack};
      }
    }

    .toggle {
      display: block;
    }

    .user {
      display: block;
    }
  }
`;
