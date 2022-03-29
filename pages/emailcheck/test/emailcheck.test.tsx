import { screen } from '@testing-library/react';
import { renderWithQueryClient } from '../../../test-utils';
import Index from '../index';

test('UItest', () => {
  renderWithQueryClient(<Index />);

  const TextTest = screen.getAllByText(/이메일 인증|이메일 인증번호|인증번호 확인/);
  //console.log(TextTest);
  expect(TextTest).toHaveLength(3);
});
