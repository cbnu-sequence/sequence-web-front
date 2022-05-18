import React from 'react';
import { useQuery } from 'react-query';
import { axiosInstance } from '../../../axiosInstance';
import axios from 'axios';
import { useCustomToast } from '../../../hooks/useCustomToast';
import { queryKeys } from '../../../react-query/constants';

interface useTable {
  noticeList;
}

async function getTable(category: string, page: number): Promise<void> {
  const { data } = await axiosInstance.get(`/post/${category}?page=${page}&limit=10`);
  return data;
}

// function useTable(): useTable {
//   const fallback = {};
//   const { data: noticeList = fallback } = useQuery(
//     queryKeys.notice,
//     (queryKeys.notice, page) => getTable(queryKeys.notice, page),
//     {
//       refetchOnMount: true,
//       refetchOnReconnect: true,
//       refetchOnWindowFocus: true,
//       refetchInterval: 60000,
//     },
//   );
//
//   return noticeList;
}
//
// export default useTable;
