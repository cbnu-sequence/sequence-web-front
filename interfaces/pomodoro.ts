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
