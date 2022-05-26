import { screen } from '@testing-library/react';
import { renderWithQueryClient } from '../test-utils';
import Index from '../pages/login';

test('UItest', () => {
  renderWithQueryClient(<Index />);

  const LabelTest = screen.getAllByLabelText(/이메일 주소|비밀번호/);
  //console.log(LabelTest);
  expect(LabelTest).toHaveLength(2);

  const LinkTest = screen.getAllByRole('link');
  //console.log(LinkTest);
  expect(LinkTest).toHaveLength(3);
});
