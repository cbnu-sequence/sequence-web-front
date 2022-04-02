import React from 'react';
import { useQuery } from 'react-query';
import { axiosInstance } from '../../../axiosInstance';
import axios from 'axios';
import { useCustomToast } from '../../../hooks/useCustomToast';
import { queryKeys } from '../../../react-query/constants';

interface useTable {
  noticeList;
}

function useTable(): useTable {
  const SERVER_ERROR = '서버와 연결중에 에러가 발생했습니다';
  const toast = useCustomToast();
  async function getTableListServerCall(urlEndpoint: string): Promise<void> {
    try {
      const {
        data: { data, status },
      } = await axiosInstance({
        url: urlEndpoint,
        method: 'get',
        headers: { 'Content-Type': 'application/json' },
      });

      if (status === 400) {
        const title = 'message' in data ? data.message : '권한이 없습니다.';
        toast({ title, status: 'warning' });
        return;
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

  const fallback = {};
  const { data: noticeList = fallback } = useQuery(
    queryKeys.notice,
    (page) => getTableListServerCall(`posts/notice?page=${page}&limit=10`),
    {
      refetchOnMount: true,
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
      refetchInterval: 60000,
    },
  );

  return { noticeList };
}

export default useTable;
