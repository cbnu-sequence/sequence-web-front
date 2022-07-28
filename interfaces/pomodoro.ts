export interface firstPomodoroData {
  data: {
    _id: string;
    title: string;
    startDate: string;
  };
  message: string;
  status: number;
  success: boolean;
}

export interface secondPomodoroData {
  success: boolean;
  status: number;
  message: string;
}

export interface myPomosData {
  success: boolean;
  status: number;
  message: string;
  count: number;
  data: Array<{
    _id?: string;
    title?: string;
    isFinished?: boolean;
    writer?: string;
    startDate?: string;
    endDate?: string;
    sequence?: number;
    createdAt?: string;
    updatedAt?: string
  }>
}

export interface RankingData {
  _id: string;
  count: number;
  pomodoro: {
    title: string;
    startDate: Date;
    endDate: Date;
  };
  sequence: number;
  user: {
    _id: string;
    email: string;
    name: string;
  };
}
