import React, { useState } from 'react';
import { useRanking } from '../../hooks/useRanking';
import { RankingDiv, RangeTabBar } from '../../styles/ranking';
import RankingTabContent from '../RankingTabContent';
const PomoRanking = () => {
  const { Range, dailyRanking, weeklyRanking, monthlyRanking } = useRanking();
  const [currentTab, setCurrentTab] = useState(Range.daily);

  return (
    <RankingDiv id="RK">
      <h2>pomodoro rank</h2>
      <RangeTabBar current={currentTab}>
        <ul className="tabs">
          {[Range.daily, Range.weekly, Range.monthly].map((item, id) => (
            <li key={id} onClick={() => setCurrentTab(item)}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </li>
          ))}
        </ul>
      </RangeTabBar>
      <RankingTabContent
        range={currentTab}
        daily={dailyRanking.data}
        weekly={weeklyRanking.data}
        monthly={monthlyRanking.data}
      />
    </RankingDiv>
  );
};
export default PomoRanking;
