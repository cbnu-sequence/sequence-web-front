import dayjs from 'dayjs';
import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';

import { axiosInstance } from '../axiosInstance';
import { queryKeys } from '../react-query/constants';
import { useUser } from './useUser';
import { Project } from '../interfaces/post';

const commonOptions = {
  staleTime: 0,
  cacheTime: 300000,
};

// for useQuery call
export async function getProjects(year): Promise<Project> {
  const {
    data: { data },
  } = await axiosInstance.get(`/project?year=${year}`);
  return data;
}

// types for hook return object
interface UseProjects {
  projects: Array<Project> | [];
  year: number;
  updateYear: (yearIncrement: number) => void;
  // showAll: boolean;
  // setShowAll: Dispatch<SetStateAction<boolean>>;
}

export function useProjects(): UseProjects {
  const currentYear = dayjs(new Date()).year();

  const [year, setYear] = useState(currentYear);

  function updateYear(): void {
    setYear((prevData) => prevData + 1);
  }

  const [showAll, setShowAll] = useState(false);

  const { user } = useUser();

  const queryClient = useQueryClient();

  useEffect(() => {
    const nextYear = year + 1;
    queryClient.prefetchQuery([queryKeys.projects, nextYear], () => getProjects(nextYear), commonOptions);
  }, [queryClient]);

  const fallback = [];

  const { data: projects = fallback }: { data: Array<Project> } = useQuery(
    [queryKeys.projects, year],
    () => getProjects(year),
    {
      ...commonOptions,
      // select: showAll ? undefined : selectFn,
      refetchOnMount: true,
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
      refetchInterval: 1000000,
    },
  );

  return { projects, year, updateYear };
}
