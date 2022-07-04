import styled from '@emotion/styled';
import { sqGray } from '../../styles/constants';

export const ProjectDetailBlock = styled.div`
  width: 60%;
  margin: 0 auto;

  .projectdetail-bodycontainer {
    font-size: 1rem;
    @media screen and (max-width: 768px) {
      font-size: 0.8rem;
    }
  }

  .projectdetail-bodycontainer-image-page {
    text-align: center;
  }

  .projectdetail-bodycontainer-content {
    margin: 0.4rem 0;
    font-size: 1.3rem;
    font-weight: bold;
    @media screen and (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  .projectdetail-bodycontainer-participants {
    display: flex;
    margin: 0.4rem 0;
    .projectdetail-bodycontainer-participant {
      margin-left: 0.4rem;
    }
  }

  .projectdetail-bodycontainer-link {
    display: flex;
    font-size: 1.5rem;
    margin: 0.4rem 0;
    .projectdetail-bodycontainer-link-githuburl {
      cursor: pointer;
      &:hover {
        font-weight: bold;
      }
    }

    .projectdetail-bodycontainer-link-projecturl {
      margin-left: 0.8rem;
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
