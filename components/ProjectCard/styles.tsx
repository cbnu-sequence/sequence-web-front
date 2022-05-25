import styled from '@emotion/styled';
import { sqRed } from '../../styles/constants';

export const ProjectCardBox = styled.div`
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  .project__year {
    font-weight: 600;
    font-size: 12px;
    color: ${sqRed};
  }
  .project__title {
    font-weight: 600;
    font-size: 20px;
    padding-bottom: 10px;
  }
  .project__content {
    font-weight: 500;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-bottom: 3px;
  }
`;

export const ProjectTags = styled.span`
  display: flex;
  span {
    font-size: 12px;
    margin: 2px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    :hover {
      background-color: rgba(0,0,0,0.1)
      }
    }
  }
`;
