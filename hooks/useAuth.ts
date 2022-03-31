import { LogInData, SignUpData, User } from '../interfaces/user';
import { useCustomToast } from './useCustomToast';
import axios, { AxiosResponse } from 'axios';
import { useUser } from './useUser';
import { axiosInstance } from '../axiosInstance';
import { loadMyInfoAPI, logOutAPI } from '../apis/user';

interface UseAuth {
  login: (data: LogInData) => Promise<void>;
  signup: (data: SignUpData) => Promise<void>;
  signout: () => void;
}

type UserResponse = { user: User };
type ErrorResponse = { message: string };
type AuthResponseType = UserResponse | ErrorResponse;

export function useAuth(): UseAuth {
  const SERVER_ERROR = '서버와 연결중에 에러가 발생했습니다';
  const toast = useCustomToast();
  const { user, updateUser, clearUser } = useUser();

  async function authServerCall(urlEndpoint: string, inputData: LogInData | SignUpData): Promise<void> {
    try {
      const {
        data: { data, status },
      } = await axiosInstance({
        url: urlEndpoint,
        method: 'POST',
        data: inputData,
        headers: { 'Content-Type': 'application/json' },
      });

      if (status === 400) {
        const title = 'message' in data ? data.message : '권한이 없습니다.';
        toast({ title, status: 'warning' });
        return;
      }
      if ('userId' in data) {
        toast({
          title: `시퀀스에 로그인 하신 것을 환영합니다`,
          status: 'info',
        });
        updateUser(await loadMyInfoAPI(data));
      }
    } catch (errorResponse) {
      const title =
        axios.isAxiosError(errorResponse) && errorResponse?.response?.data?.message
          ? errorResponse?.response?.data?.message
          : SERVER_ERROR;
      toast({
        title,
        status: 'error',
      });
    }
  }

  async function login(inputData): Promise<void> {
    authServerCall('auth/login', inputData);
  }

  async function signup(inputData): Promise<void> {
    authServerCall('auth/register', inputData);
  }

  function signout(): void {
    // clear user from stored user data
    logOutAPI().then(clearUser);
    toast({
      title: '로그아웃에 성공했습니다!',
      status: 'info',
    });
  }

  return {
    login,
    signup,
    signout,
  };
}
