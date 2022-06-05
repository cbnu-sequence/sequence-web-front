import Head from 'next/head';
import Timer from '../../components/Timer';
import TimerForm from '../../components/TimerForm';
import { useCallback, useEffect, useState } from 'react';
import { firstPomodoroAPI, myPomosAPI, secondPomodoroAPI } from '../../apis/pomodoro';
import { PomodoroBlock, RankingBtn } from '../../styles/pomodoro';
import Header from '../../components/Header';
import PomoProgress from '../../components/PomoProgress';
import MyPomo from '../../components/MyPomo';
import { useQuery } from 'react-query';
import { queryKeys } from '../../react-query/constants';
import { useUser } from '../../hooks/useUser';
import PomoRanking from '../../components/PomoRanking';
import { useRanking } from '../../hooks/useRanking';

const Pomodoro = () => {
  const [isActive, setIsActive] = useState(false);
  const [pomoId, setPomoId] = useState('');
  const [progress, setProgress] = useState('');
  const [min, setMin] = useState(25);
  const [sec, setSec] = useState(0);
  const [mil, setMil] = useState(0);
  const [isRankingOpen, setIsRankingOpen] = useState(false);
  const { user } = useUser();
  const { dailyRanking, weeklyRanking, monthlyRanking } = useRanking();
  const { data, isLoading, isError } = useQuery([queryKeys.myPomos, user?._id], myPomosAPI, {
    refetchOnMount: true,
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
    refetchInterval: 60000,
    enabled: !!user?._id,
  });
  let myPomos = data?.data;

  useEffect(() => {
    let timer;
    clearInterval(timer);
    if (isActive) {
      timer = setInterval(() => {
        if (mil > 0) {
          setMil(mil - 1);
        }
        if (mil === 0) {
          if (sec > 0 || min != 0) {
            setSec(sec - 1);
            setMil(10);
          }
          if (sec === 0) {
            if (min === 0) {
              clearInterval(timer);
              onEndPomo();
            } else {
              setMin(min - 1);
              setSec(59);
              setMil(10);
            }
          }
        }
      }, 100);
    }
    return () => clearInterval(timer);
  }, [min, sec, mil, isActive]);

  const onAddPomo = useCallback((title) => {
    firstPomodoroAPI({ title, date: new Date() })
      .then((res) => {
        if (res.status === 400) {
          alert('title을 입력해주세요');
          return;
        } else {
          setPomoId(res.data._id);
          setProgress(res.data.title);
          setIsActive(true);
        }
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  const onEndPomo = useCallback(() => {
    setIsActive(false);
    onReset();
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
  }, [setIsActive]);

  const onReset = useCallback(() => {
    setMin(25);
    setSec(0);
    setMil(0);
  }, [setMin, setSec, setMil]);

  return (
    <>
      <Head>
        <title>시퀀스 | 뽀모도로</title>
      </Head>
      <Header />
      <PomodoroBlock>
        <p>pomodoro</p>
        <Timer min={min} sec={sec} mil={mil} />
        <PomoProgress progress={progress} />
        <TimerForm onReset={onReset} isActive={isActive} setIsActive={setIsActive} onAddPomo={onAddPomo} />
        {user && <MyPomo userName={user.name} records={myPomos} />}
        <RankingBtn onClick={() => setIsRankingOpen(!isRankingOpen)}>일간, 주간, 월간 랭킹보기</RankingBtn>
        {isRankingOpen && <PomoRanking />}
      </PomodoroBlock>
    </>
  );
};

export default Pomodoro;

export const getStaticProps = async () => {
  return {
    props: {
      layout: 'onlyBody',
    },
  };
};
