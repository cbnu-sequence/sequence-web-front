import { screen } from '@testing-library/react';
import { renderWithQueryClient } from '../../../test-utils';
import Index from '../index';

test('UItest', () => {
  renderWithQueryClient(<Index />);

  const LabelTest = screen.getAllByLabelText(/이메일 주소|이름|전화번호|비밀번호|비밀번호 확인/);
  //console.log(LabelTest);
  expect(LabelTest).toHaveLength(5);

  const LinkTest = screen.getAllByRole('link');
  //console.log(LinkTest);
  expect(LinkTest).toHaveLength(2);
});
