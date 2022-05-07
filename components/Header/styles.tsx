import styled from '@emotion/styled';
import { sqBlack, sqWhite, sqRed } from '../../styles/constants';

type HeaderProps = {
  isToggled: boolean;
  userToggled: boolean;
};

export const HeaderDiv = styled.div<HeaderProps>`
  position: fixed;
  width: 100vw;
  margin: 0 auto;
  height: 60px;
  font-weight: 500;
  font-size: 18px;

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
    & > li:hover {
      transition: border-bottom 0.2s ease-in-out;
    }
  }

  .header__menulist li ul {
    list-style: none;
    display: none;
    width: 110vw;
    height: 35px;
    top: 30px;
    margin-left: calc(-50vw + 50% - 70px);
    margin-top: 15px;
  }

  .header__menulist li:hover ul {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    text-align: center;
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
    padding-right: 20px;
    & > li {
      cursor: pointer;
      padding: 10px;
    }
  }

  .toggle {
    display: none;
    font-size: 1.5rem;
    padding: 1rem 1rem;
    &:hover {
      cursor: pointer;
    }
  }

  .user {
    display: none;
    font-size: 1.5rem;
    padding: 1rem 1rem;
  }

  @media screen and (max-width: 768px) {
    .header__right {
      display: ${(props) => (props.userToggled ? 'flex' : 'none')};
      flex-direction: column;
      width: 100%;
    }

    .header__right li {
      text-align: center;
    }

    .header__menulist {
      display: ${(props) => (props.isToggled ? 'flex' : 'none')};
      flex-direction: column;
      width: 100%;
    }

    .header__menulist li:hover ul {
      width: 100%;
      margin: 0 auto;
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
      padding-right: 25px;
      &:hover {
        cursor: pointer;
      }
    }
  }

  .black-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${sqWhite};
    background-color: ${sqBlack};

    .logo_b {
      display: none;
    }

    .header__menulist {
      & > li:hover {
        border-bottom: 4px solid ${sqWhite};
      }
      & > li > ul {
        background-color: ${sqWhite};
        color: ${sqBlack};
      }
    }

    .color_line {
      width: 100%;
      border-top: 1px solid ${sqWhite};
    }

    @media screen and (max-width: 768px) {
      flex-wrap: wrap;

      .header__menulist li ul {
        color: ${sqWhite};
        background-color: ${sqBlack};
      }
    }
  }

  .white-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${sqBlack};
    background-color: ${sqWhite};

    .logo_w {
      display: none;
    }

    .header__menulist {
      & > li:hover {
        border-bottom: 4px solid ${sqRed};
      }
      & > li > ul {
        background-color: ${sqBlack};
        color: ${sqWhite};
      }
    }

    .color_line {
      width: 100%;
      border-top: 1px solid ${sqBlack};
    }

    @media screen and (max-width: 768px) {
      flex-wrap: wrap;

      .header__menulist li ul {
        color: ${sqBlack};
        background-color: ${sqWhite};
      }
    }
  }
`;
