import styled from '@emotion/styled';

export const PostHeaderDiv = styled.div`
  padding-top: 20px;
  span {
    display: block;
    font-size: 30px;
    font-weight: 500;
  }
  .writer {
    display: inline-block;
    font-size: 15px;
    :after {
      content: '|';
      font-weight: 500;
      padding-left: 5px;
    }
  }
  .user-role {
    display: inline-block;
    font-size: 12px;
    padding-left: 5px;
  }
`;
