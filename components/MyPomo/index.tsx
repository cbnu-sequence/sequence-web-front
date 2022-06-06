import React from 'react';
import { MyPomoDiv } from './styles';

const MyPomo = ({ userName, records }) => {
  return (
    <MyPomoDiv>
      <h2>{userName}의 뽀모도로</h2>
      {records && records.length ? (
        <ul>
          {records.map((item) => (
            <li key={item._id}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <h4>뽀모도로가 처음이시군요?</h4>
      )}
    </MyPomoDiv>
  );
};

export default MyPomo;
