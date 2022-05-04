import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithQueryClient } from '../../../test-utils';
import WriteBoard from '../index';
import { server } from '../../../mocks/server';
import { rest } from 'msw';

test('UItest', () => {
  renderWithQueryClient(<WriteBoard />);

  const TextTest = screen.getAllByText(/글 작성하기|제목|내용|파일 업로드/);
  expect(TextTest).toHaveLength(4);

  const button = screen.getByText('작성하기');
  userEvent.click(button);
  expect(screen.getByText('제목을 입력해주세요')).toBeInTheDocument();

  userEvent.type(screen.getByPlaceholderText('제목을 입력해주세요'), '예시 제목 입력');
  userEvent.click(button);
  expect(screen.getByText('내용을 입력해주세요')).toBeInTheDocument();
});
