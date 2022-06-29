import { LogInData, SignUpData, User } from '../interfaces/user';
import { useCustomToast } from './useCustomToast';
import axios, { AxiosResponse } from 'axios';
import { useUser } from './useUser';
import { axiosInstance } from '../axiosInstance';
import { loadMyInfoAPI, logOutAPI } from '../apis/user';

interface UseAuth {
  login: (data: LogInData, setLoginIsLoading) => Promise<void>;
  signup: (data: SignUpData, Router, setSignUpIsLoading) => Promise<void | number>;
  signout: () => void;
}

type UserResponse = { user: User };
type ErrorResponse = { message: string };
type AuthResponseType = UserResponse | ErrorResponse;

export function useAuth(): UseAuth {
  const SERVER_ERROR = '서버와 연결중에 에러가 발생했습니다';
  const toast = useCustomToast();
  const { user, updateUser, clearUser } = useUser();

  async function authLogInCall(urlEndpoint: string, inputData: LogInData | SignUpData, setLoginIsLoading): Promise<void | number> {
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
        setLoginIsLoading(false);
        return;
      }

      if ('userId' in data) {
        let user = await loadMyInfoAPI(data);
        updateUser(user.data);
        toast({
          title: `시퀀스에 로그인 하신 것을 환영합니다`,
          status: 'info',
        });
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
      setLoginIsLoading(false);
    }
  }

  async function authSignUpCall(
    urlEndpoint: string,
    inputData: LogInData | SignUpData,
    Router,
    setSignUpIsLoading
  ): Promise<void | number> {
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
        setSignUpIsLoading(false);
        return;
      }

      if (status === 200) {
        toast({
          title: `시퀀스에 회원가입 하신 것을 환영합니다. 이메일 인증을 부탁드려요!`,
          status: 'info',
        });
        Router.replace('/emailcheck');
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
      setSignUpIsLoading(false);
    }
  }

  async function login(inputData, setLoginIsLoading): Promise<void> {
    authLogInCall('auth/login', inputData, setLoginIsLoading);
  }

  async function signup(inputData, Router, setSignUpIsLoading): Promise<void> {
    authSignUpCall('auth/register', inputData, Router, setSignUpIsLoading);
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
