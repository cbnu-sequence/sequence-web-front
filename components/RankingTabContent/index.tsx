import React from 'react';
import { RankingTable } from '../../styles/ranking';

const RankingTabContent = ({ range, daily, weekly, monthly, isMobileApp }) => {
  let data = [];
  if (range === 'daily') {
    data = daily;
  } else if (range === 'weekly') {
    data = weekly;
  } else {
    data = monthly;
  }
  console.log(data);
  if (data) {
    if (data.length === 0 || !data) return <div>아직 등록된 뽀모도로가 없습니다!</div>;
  }

  return (
    <div>
      <RankingTable isMobileApp={isMobileApp}>
        <thead>
          <tr>
            <td></td>
            <th>이름</th>
            <th>공부 시간(분)</th>
            <th>최근 프로젝트</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item.user.name}</td>
                <td>{item.count * 25}</td>
                <td>{item.pomodoro.title}</td>
              </tr>
            ))}
        </tbody>
      </RankingTable>
    </div>
  );
};
export default RankingTabContent;
