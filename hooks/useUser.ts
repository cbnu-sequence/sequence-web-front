import { useQuery, useQueryClient } from 'react-query';

import { User } from '../interfaces/user';
import { queryKeys } from '../react-query/constants';
import { AxiosResponse } from 'axios';
import { axiosInstance } from '../axiosInstance';
import { clearStoredUser, getStoredUser, setStoredUser } from '../user-storage/user-storage';
import { loadMyInfoAPI } from '../apis/user';

interface UseUser {
  user: User | null;
  updateUser: (user) => void;
  clearUser: () => void;
}

export function useUser(): UseUser {
  const queryClient = useQueryClient();

  const { data: user } = useQuery(queryKeys.user, () => loadMyInfoAPI(user), {
    initialData: getStoredUser,
    onSuccess: (received) => {
      if (!received) {
        clearStoredUser();
      } else {
        setStoredUser(received);
      }
    },
  });

  function updateUser(newUser: User): void {
    queryClient.setQueryData(queryKeys.user, newUser);
  }

  function clearUser() {
    queryClient.setQueryData(queryKeys.user, null);
    queryClient.removeQueries(queryKeys.user);
  }

  return { user, updateUser, clearUser };
}
