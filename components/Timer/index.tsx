import { TimerDiv } from './styles';

const Timer = ({ min, sec, mil }) => {
  return (
    <TimerDiv>
      <div>
        {min}
        <p className="units">Minutes</p>
      </div>{' '}
      <div>
        {sec < 10 ? `0${sec}` : sec} <p className="units">Seconds</p>{' '}
      </div>{' '}
      <div>
        {mil < 10 ? `0${mil}` : mil}
        <p className="units">Miliseconds</p>
      </div>
    </TimerDiv>
  );
};

export default Timer;
