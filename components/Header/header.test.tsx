import { screen } from '@testing-library/react';

import { renderWithQueryClient } from '../../test-utils';
import Header from './index';

test('renders response from query', async () => {
  renderWithQueryClient(<Header />);

  const articleTitles = await screen.getAllByText(/^로고이미지|게시판/);
  expect(articleTitles).toHaveLength(2);
});
