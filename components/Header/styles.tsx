import styled from '@emotion/styled';
import { sqBlack, sqWhite, sqRed } from '../../styles/constants';

type HeaderProps = {
  isToggled: boolean;
  userToggled: boolean;
};

export const HeaderDiv = styled.div<HeaderProps>`
  position: fixed;
  .black-header {
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
    .logo_b {
      display: none;
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
        :hover {
          border-bottom: 5px solid;
          transition: border-bottom.2s ease-in-out;
        }
      }
    }

    .header__menulist li ul {
      list-style: none;
      display: none;
      width: 110vw;
      height: 35px;
      top: 30px;
      margin-left: calc(-50vw + 50% - 70px);
      margin-top: 25px;
    }

    .header__menulist li:hover ul {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      text-align: center;
      background-color: ${sqWhite};
      color: ${sqBlack};
      box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 10px;
      & > li {
        text-align: center;
        padding: 0 10px;
        font-size: 14px;
      }
      & > li:hover {
        color: ${sqRed};
        transition: width 2s, height 2s, color 200ms, transform 4s;
      }
    }

    . .header__left {
      display: flex;
    }

    .header__right {
      list-style: none;
      display: flex;
      padding-right: 10px;
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
      height: 100%;
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
      }

      .header__menulist li,
      .header__right li {
        margin: 1rem 0;
        padding: 0;
      }

      .toggle {
        display: block;
      }

      .user {
        display: block;
      }
    }
  }

  .white-header {
    width: 100vw;
    margin: 0 auto;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${sqBlack};
    font-weight: 500;
    font-size: 18px;
    background-color: ${sqWhite};
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

    .logo {
      margin: 10px;
      padding: 5px 10px;
      width: 140px;
      height: 40px;
      cursor: pointer;
    }
    .logo_w {
      display: none;
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
        :hover {
          border-bottom: 5px solid ${sqRed};
          transition: border-bottom 0.2s ease-in-out;
        }
      }
    }

    .header__menulist li ul {
      list-style: none;
      display: none;
      width: 110vw;
      height: 35px;
      top: 30px;
      margin-left: calc(-50vw + 50% - 70px);
      margin-top: 25px;
    }

    .header__menulist li:hover ul {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      text-align: center;
      background-color: ${sqWhite};
      color: ${sqBlack};
      box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 10px;
      & > li {
        text-align: center;
        padding: 0 10px;
        font-size: 14px;
      }
      & > li:hover {
        color: ${sqRed};
        transition: width 2s, height 2s, color 200ms, transform 4s;
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
      }

      .header__menulist {
        display: ${(props) => (props.isToggled ? 'flex' : 'none')};
        flex-direction: column;
        width: 100%;
        background-color: ${sqWhite};
        padding-left: 10px;
      }

      .header__menulist li,
      .header__right li {
        margin: 1rem 0;
        padding: 0;
        & > a {
          background-color: ${sqWhite};
        }
      }

      .header__menulist li:hover ul {
        box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px;
        width: 100%;
        margin: 0 auto;
      }

      .toggle {
        display: block;
        color: ${sqBlack};
      }

      .user {
        display: block;
        color: ${sqBlack};
      }
    }
  }
`;
