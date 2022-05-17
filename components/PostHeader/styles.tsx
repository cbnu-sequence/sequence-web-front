import styled from '@emotion/styled';

export const PostHeaderDiv = styled.div`
  padding-top: 20px;
  span {
    display: block;
    font-size: 30px;
    font-weight: 500;
  }
  .header-info {
    display: flex;
    flex-direction: column;
  }
  .writer-div {
    display: flex;
    margin: 0;
    width: 10rem;
  }
  .writer {
    display: inline-block;
    padding-right: 0;
    font-size: 1rem;
    :after {
      content: '|';
      font-weight: 500;
      padding-left: 5px;
    }
  }
  .user-role {
    display: block;
    line-height: 25px;
    font-size: 0.8rem;
    padding-left: 5px;
  }

  .writing-date {
    display: flex;
    span {
      font-size: 0.8rem;
      :first-of-type {
        :after {
          content: '|';
          padding-left: 5px;
        }
      }
      :last-of-type {
        padding-left: 5px;
      }
    }
  }
`;
