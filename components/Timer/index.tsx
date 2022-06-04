import { TimerDiv } from './styles';

const Timer = ({ min, sec, mil }) => {
  return (
    <TimerDiv>
      <div>{min}</div> <div>{sec < 10 ? `0${sec}` : sec}</div> <div>{mil < 10 ? `0${mil}` : mil}</div>
    </TimerDiv>
  );
};

export default Timer;
