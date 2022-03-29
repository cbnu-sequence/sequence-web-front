import { useQuery, useQueryClient } from 'react-query';

import { User } from '../interfaces/user';
import { queryKeys } from '../react-query/constants';
import { AxiosResponse } from 'axios';
import { axiosInstance } from '../axiosInstance';
import { clearStoredUser, getStoredUser, setStoredUser } from '../user-storage/user-storage';

async function getUser(userId: string): Promise<User> {
  const { data }: AxiosResponse<{ user: User }> = await axiosInstance.get('auth/me');

  return data.user;
}

interface UseUser {
  user: User | null;
  updateUser: (user: User) => void;
  clearUser: () => void;
}

export function useUser(): UseUser {
  const queryClient = useQueryClient();

  const { data: user } = useQuery(queryKeys.user, () => getUser(user), {
    initialData: getStoredUser,
    onSuccess: (received: null | User) => {
      if (!received) {
        clearStoredUser();
      } else {
        setStoredUser(received._id);
      }
    },
  });

  function updateUser(newUser): void {
    queryClient.setQueryData(queryKeys.user, newUser);
  }

  function clearUser() {
    queryClient.setQueryData(queryKeys.user, null);
    queryClient.removeQueries(queryKeys.user);
  }

  return { user, updateUser, clearUser };
}
