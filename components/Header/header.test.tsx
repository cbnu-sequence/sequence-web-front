import { screen } from '@testing-library/react';
import { renderWithQueryClient } from '../../test-utils';
import Header from './index';
import { mockUser } from '../../mocks/mockData';
import { useUser } from '../../hooks/useUser';

jest.mock('../../hooks/useUser', () => ({
  __esModule: true,
  useUser: () => ({ user: mockUser }),
}));

test('renders Header and check lists', async () => {
  renderWithQueryClient(<Header />);

  const listTitles = await screen.getAllByText(/^시퀀스 소개|부원 소개|뽀모도로|게시판|로그인|회원가입/);
  expect(listTitles).toHaveLength(6);
});
