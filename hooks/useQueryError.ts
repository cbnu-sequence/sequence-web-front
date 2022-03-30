import { useCustomToast } from './useCustomToast';

export function useQueryError(): (error: unknown) => void {
  const toast = useCustomToast();

  function queryErrorToast(error: unknown) {
    const title =
      typeof error === 'string' ? error : 'error connecting to server';
    toast({ title, status: 'error' });
  }
  return queryErrorToast;
}
