import { useQuery, useQueryClient } from 'react-query';
import { loadMyInfoAPI } from '../apis/user';

import { User } from '../interfaces/user';
import { queryKeys } from '../react-query/constants';
// query function

interface UseUser {
  user: User | null;
  updateUser: (user: User) => void;
  clearUser: () => void;
}

export function useUser(): UseUser {
  const queryClient = useQueryClient();

  // call useQuery to update user data from server
  const { data: user } = useQuery(queryKeys.user, loadMyInfoAPI);

  function updateUser(newUser: User): void {
    queryClient.setQueryData(queryKeys.user, newUser);
  }

  function clearUser() {
    queryClient.setQueryData(queryKeys.user, null);
    queryClient.removeQueries(queryKeys.user);
  }

  return { user, updateUser, clearUser };
}
