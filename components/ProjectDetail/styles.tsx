import styled from '@emotion/styled';
import { sqGray } from '../../styles/constants';

export const ProjectDetailBlock = styled.div`
  width: 60%;
  margin: 0 auto;

  .projectdetail-bodycontainer {
    font-size: 1.2rem;
  }

  .projectdetail-bodycontainer-image {
    display: flex;
    justify-content: space-around;
    margin: 2rem 0;
    img {
      width: 300px;
      height: 300px;
      @media screen and (max-width: 768px) {
        width: 200px;
        height: 200px;
      }
    }
  }
  .projectdetail-bodycontainer-content {
    margin: 0.4rem 0;
    font-size: 1.5rem;
    font-weight: bold;
  }

  .projectdetail-bodycontainer-participants {
    display: flex;
    margin: 0.4rem 0;
    .projectdetail-bodycontainer-participant {
      margin-left: 0.4rem;
    }
  }

  .projectdetail-bodycontainer-githuburl {
    margin: 0.4rem 0;
    display: flex;
    .projectdetail-bodycontainer-githuburl-link {
      margin-left: 0.4rem;
      cursor: pointer;
      &:hover {
        font-weight: bold;
      }
    }
  }

  .projectdetail-bodycontainer-projecturl {
    margin: 0.4rem 0;
    display: flex;
    .projectdetail-bodycontainer-projecturl-link {
      margin-left: 0.4rem;
      cursor: pointer;
      &:hover {
        font-weight: bold;
      }
    }
  }

  .projectdetail-bodycontainer-year {
    margin: 0.4rem 0;
  }

  .projectdetail-bodycontainer-tags {
    display: flex;
    .projectdetail-bodycontainer-tag {
      margin-right: 1rem;
      color: ${sqGray};
    }
  }
`;
