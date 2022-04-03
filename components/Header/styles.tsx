import styled from '@emotion/styled';
import { sqBlack, sqWhite } from '../../styles/constants';

type HeaderProps = {
  isToggled: boolean;
  userToggled: boolean;
};

export const HeaderDiv = styled.div<HeaderProps>`
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
    position: relative;
    & > li {
      width: 100%;
      margin: 0px 20px;
      cursor: pointer;
      position: relative;
    }
  }

  .header__menulist li ul {
    list-style: none;
    display: none;
  }

  .header__menulist li:hover ul {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 200%;
    position: absolute;
    background-color: ${sqBlack};
    & > li {
      text-align: center;
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
