import { useQuery } from "react-query";
import { getProjectMembers } from "../apis/user";
import { queryKeys } from "../react-query/constants";

interface projectmembers {
  frontenddata: any;
  backenddata: any;
  devopsdata: any;
  iosdata: any;

  frontendError: any;
  backendError: any;
  devopsError: any;
  iosError: any;
}

export const useProjectMembers = (): projectmembers => {
  const { data: frontenddata, isError: frontendError } = useQuery([queryKeys.projectTeam, 'frontend'], () => getProjectMembers('frontend'), {
    refetchOnMount: true,
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
    refetchInterval: 60000,
  });

  const { data: backenddata, isError: backendError } = useQuery([queryKeys.projectTeam, 'backend'], () => getProjectMembers('backend'), {
    refetchOnMount: true,
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
    refetchInterval: 60000,
  });

  const { data: devopsdata, isError: devopsError } = useQuery([queryKeys.projectTeam, 'devops'], () => getProjectMembers('devops'), {
    refetchOnMount: true,
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
    refetchInterval: 60000,
  });

  const { data: iosdata, isError: iosError } = useQuery([queryKeys.projectTeam, 'ios'], () => getProjectMembers('ios'), {
    refetchOnMount: true,
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
    refetchInterval: 60000,
  });



  return { frontenddata, backenddata, devopsdata, iosdata , frontendError, backendError, devopsError, iosError };

}

