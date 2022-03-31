import styled from '@emotion/styled';
import { sqBlack } from '../../styles/constants';

type HeaderProps = {
  isToggled: boolean;
  userToggled: boolean;
};

export const HeaderDiv = styled.div<HeaderProps>`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  background-color: ${sqBlack};

  .logo {
    margin: 0 1rem;
    & > a {
      & > img {
        width: 120px;
        height: 50px;
      }
    }
  }

  .header__menulist {
    list-style: none;
    display: flex;
  }

  .header__left {
    display: flex;
  }

  .header__right {
    list-style: none;
    display: flex;
    & > li {
      cursor: pointer;
    }
  }

  .header__right div {
    margin: 0 1rem;
  }

  li {
    padding: 0 1rem;
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
