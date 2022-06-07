import PomoRanking from '../../../../components/PomoRanking';
import { useRanking } from '../../../../hooks/useRanking';
import { MobilePomoDiv } from '../../../../styles/pomodoro';

const Ranking = () => {
  const { Range, dailyRanking, weeklyRanking, monthlyRanking } = useRanking();

  return (
    <MobilePomoDiv>
      <PomoRanking
        Range={Range}
        daily={dailyRanking}
        weekly={weeklyRanking}
        monthly={monthlyRanking}
        isMobileApp={true}
      />
    </MobilePomoDiv>
  );
};
export default Ranking;

export const getStaticProps = async () => {
  return {
    props: {
      layout: 'mobilePomo',
    },
  };
};
