import { useState, useEffect } from 'react';
import { TimerDiv } from './styles';
import { secondPomodoroAPI } from '../../apis/pomodoro';

const Timer = ({ isActive, onEndPomo }) => {
  const [min, setMin] = useState(25);
  const [sec, setSec] = useState(0);
  const [mil, setMil] = useState(0);
  useEffect(() => {
    let timer;
    clearInterval(timer);
    if (isActive) {
      //   timer = setInterval(() => {
      //     if (sec > 0) {
      //       setSec(sec - 1);
      //     }
      //     if (sec === 0) {
      //       if (min === 0) {
      //         clearInterval(timer);
      //         // onCheckTime();
      //       } else {
      //         setMin(min - 1);
      //         setSec(59);
      //       }
      //     }
      //   }, 1000);
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

  return (
    <TimerDiv>
      {min} {sec < 10 ? `0${sec}` : sec} {mil < 10 ? `0${mil}` : mil}
    </TimerDiv>
  );
};

export default Timer;
