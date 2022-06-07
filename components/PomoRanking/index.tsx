import React, { useState } from 'react';
import { useRanking } from '../../hooks/useRanking';
import { RankingDiv, RangeTabBar } from '../../styles/ranking';
import RankingTabContent from '../RankingTabContent';
const PomoRanking = ({ Range, daily, weekly, monthly, isMobileApp }) => {
  const [currentTab, setCurrentTab] = useState(Range.daily);
  return (
    <RankingDiv id="RK" isMobileApp={isMobileApp}>
      <h2>pomodoro rank</h2>
      <RangeTabBar current={currentTab} isMobileApp={isMobileApp}>
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
        daily={daily.data}
        weekly={weekly.data}
        monthly={monthly.data}
        isMobileApp={isMobileApp}
      />
    </RankingDiv>
  );
};
export default PomoRanking;
