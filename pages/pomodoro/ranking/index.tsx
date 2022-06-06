import PomoRanking from '../../../components/PomoRanking';
import { useRanking } from '../../../hooks/useRanking';

const Ranking = () => {
  const { Range, dailyRanking, weeklyRanking, monthlyRanking } = useRanking();

  return (
    <div>
      <PomoRanking Range={Range} daily={dailyRanking} weekly={weeklyRanking} monthly={monthlyRanking} />
    </div>
  );
};
export default Ranking;
