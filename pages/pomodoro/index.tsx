import Head from 'next/head';
import Timer from '../../components/Timer';
import TimerForm from '../../components/TimerForm';
import { useCallback, useState } from 'react';
import { firstPomodoroAPI, secondPomodoroAPI } from '../../apis/pomodoro';
import { PomodoroBlock, RankingBtn } from '../../styles/pomodoro';
import Header from '../../components/Header';
import Link from 'next/link';

const Pomodoro = () => {
  const [isActive, setIsActive] = useState(false);
  const [pomoId, setPomoId] = useState('');
  const [progress, setProgress] = useState('');
  const onAddPomo = useCallback((title) => {
    firstPomodoroAPI({ title, date: new Date() })
      .then((res) => {
        if (res.status === 400) {
          alert('title을 입력해주세요');
          return;
        } else {
          setPomoId(res.data._id);
          setProgress(res.data.title);
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
  }, [setIsActive]);

  return (
    <>
      <Head>
        <title>시퀀스 | 뽀모도로</title>
      </Head>
      <Header />
      <PomodoroBlock>
        <Timer isActive={isActive} onEndPomo={onEndPomo} />
        {progress != '' ? <span>{progress}</span> : <span>현재 진행중인 뽀모도로가 없습니다..</span>}
        <TimerForm isActive={isActive} setIsActive={setIsActive} onAddPomo={onAddPomo} />
        <Link href={'/ranking'}>
          <RankingBtn>일간, 주간, 월간 랭킹보기</RankingBtn>
        </Link>
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
