import styled from '@emotion/styled';
import { sqBlack, sqWhite, sqRed } from '../../styles/constants';

type HeaderProps = {
  isToggled: boolean;
  userToggled: boolean;
};

export const HeaderDiv = styled.div<HeaderProps>`
  position: fixed;
  z-index: 2;
  top: 0;
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
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

    @keyframes shakeFlowerHead {
      0% {
        transform: rotate(10deg);
      }
      100% {
        transform: rotate(-10deg);
      }
    }

    .logo {
      margin: 10px;
      padding: 5px 10px;
      width: 150px;
      height: 40px;
      cursor: pointer;
    }

    .flowerLogo {
      width: 40px;
    }
    .logo_b {
      display: none;
    }

    .logo_w {
      display: flex;
      &:hover {
        .flowerLogo {
          animation: shakeFlowerHead 1s ease-in-out infinite alternate;
        }
      }
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
          border-bottom: 5px solid ${sqWhite};
          transition: border-bottom 0.2s ease-in-out;
        }
        .members_ul {
          margin-left: calc(-50vw + 20% - 70px);
        }
        .board_ul {
          margin-left: calc(-50vw + 50% - 70px);
        }
      }
    }

    .header__menulist li ul {
      list-style: none;
      display: none;
      width: 110vw;
      height: 35px;
      top: 30px;
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
      padding-right: 30px;
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
      padding: 1rem 1rem 1rem 1rem;
    }

    @media screen and (max-width: 820px) {
      flex-wrap: wrap;
      height: 100%;
      .header__right {
        display: ${(props) => (props.userToggled ? 'flex' : 'none')};
        flex-direction: column;
        width: 100%;
      }

      .header__menulist {
        display: ${(props) => (props.isToggled ? 'flex' : 'none')};
        flex-direction: column;
        width: 100%;
        background-color: ${sqBlack};
      }

      .header__menulist li {
        margin: 1rem 0;
        padding: 0;
        color: ${sqWhite};
      }

      .header__menulist li:hover ul {
        width: 100%;
        margin: 0 auto;
        background-color: ${sqBlack};
      }

      .header__right li {
        width: 100%;
        margin: 1rem 0 1rem 1rem;
        padding: 0;
        text-align: center;
      }

      .toggle {
        display: block;
      }

      .user {
        display: block;
      }
    }

    @media screen and (max-width: 320px) {
      .logo {
        margin-top: 13px;
        display: flex;
        justify-content: center;
        width: 100px;
        .logotype {
          display: none;
        }
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
      width: 150px;
      height: 40px;
      cursor: pointer;
      // display: flex;
    }

    .flowerLogo {
      width: 40px;
    }
    .logo_w {
      display: none;
    }

    .logo_b {
      display: flex;
      &:hover {
        .flowerLogo {
          animation: shakeFlowerHead 1s ease-in-out infinite alternate;
        }
      }
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
        .members_ul {
          margin-left: calc(-50vw + 20% - 70px);
        }
        .board_ul {
          margin-left: calc(-50vw + 50% - 70px);
        }
      }
    }

    .header__menulist li ul {
      list-style: none;
      display: none;
      width: 110vw;
      height: 35px;
      top: 30px;
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
      padding-right: 30px;
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
      padding: 1rem 1rem 1rem 1rem;
    }

    @media screen and (max-width: 820px) {
      flex-wrap: wrap;
      height: 100%;
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
      }

      .header__menulist li {
        margin: 1rem 0;
        padding: 0;
        color: ${sqBlack};
      }

      .header__menulist li:hover ul {
        box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px;
        width: 100%;
        margin: 0 auto;
        background-color: ${sqWhite};
      }

      .header__right li {
        width: 100%;
        margin: 1rem 0 1rem 1rem;
        padding: 0;
        text-align: center;
      }

      .toggle {
        display: block;
      }

      .user {
        display: block;
      }
    }
    @media screen and (max-width: 320px) {
      .logo {
        margin-top: 13px;
        display: flex;
        justify-content: center;
        width: 100px;
        .logotype {
          display: none;
        }
      }
    }
  }
`;
