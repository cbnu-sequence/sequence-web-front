import { Dispatch, SetStateAction, useCallback, useState, useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { getPomoRanking } from '../apis/pomodoro';
import { queryKeys } from '../react-query/constants';

const commonOptions = {
  staleTime: 0,
  cacheTime: 300000,
  refetchOnMount: true,
  refetchOnReconnect: true,
  refetchOnWindowFocus: true,
  refetchInterval: 10000,
};

export function useRanking() {
  const Range = {
    daily: 'daily',
    weekly: 'weekly',
    monthly: 'monthly',
  };
  const fallback = [];
  const queryClient = useQueryClient();

  useEffect(() => {
    [Range.weekly, Range.monthly].forEach((range) => {
      queryClient.prefetchQuery([queryKeys.ranking, range], () => getPomoRanking(range), commonOptions);
    });
  }, [queryClient]);

  const { data: dailyRanking = fallback } = useQuery(
    [queryKeys.ranking, Range.daily],
    () => getPomoRanking(Range.daily),
    {
      ...commonOptions,
    },
  );

  const { data: weeklyRanking = fallback } = useQuery(
    [queryKeys.ranking, Range.weekly],
    () => getPomoRanking(Range.weekly),
    {
      ...commonOptions,
    },
  );

  const { data: monthlyRanking = fallback } = useQuery(
    [queryKeys.ranking, Range.monthly],
    () => getPomoRanking(Range.monthly),
    {
      ...commonOptions,
    },
  );

  return { Range, dailyRanking, weeklyRanking, monthlyRanking };
}
