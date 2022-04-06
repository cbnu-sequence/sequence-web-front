import React from 'react';
import { TitleDiv, Title } from './styles';

function CommonHeader({ title }) {
  return (
    <TitleDiv>
      <Title>{title}</Title>
    </TitleDiv>
  );
}

export default CommonHeader;
