import Head from 'next/head';
import NoList from '../../components/NoList';
import Timer from '../../components/Timer';
import TimerForm from '../../components/TimerForm';
import { useCallback, useState } from 'react';
import useInput from '../../hooks/useInput';
import Router from 'next/router';
import { firstPomodoroAPI, secondPomodoroAPI } from '../../apis/pomodoro';

const Pomodoro = () => {
  const [isActive, setIsActive] = useState(false);
  const [pomoId, setPomoId] = useState('');

  const onAddPomo = useCallback((title) => {
    firstPomodoroAPI({ title, date: new Date() })
      .then((res) => {
        if (res.status === 400) {
          alert('title을 입력해주세요');
          return;
        } else {
          setPomoId(res.data._id);
        }
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  const onEndPomo = useCallback(() => {
    setIsActive(false);
    secondPomodoroAPI(pomoId, { date: new Date() })
      .then((res) => {
        if (res.status === 400) {
          alert('무언가 잘못됐어요. 다시 시작해 주시겠어요?');
          return;
        } else {
          setPomoId('');
        }
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  return (
    <>
      <Head>
        <title>시퀀스 | 뽀모도로</title>
      </Head>
      <Timer isActive={isActive} onEndPomo={onEndPomo} />
      <TimerForm isActive={isActive} setIsActive={setIsActive} onAddPomo={onAddPomo} />
    </>
  );
};

export default Pomodoro;
