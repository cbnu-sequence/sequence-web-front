import { TimerDiv } from './styles';

const Timer = ({ min, sec }) => {
  return (
    <TimerDiv>
      <div className="wrapper">
        <div>
          {min}
          <p className="units">Minutes</p>
        </div>
        <div>
          {sec < 10 ? `0${sec}` : sec} <p className="units">Seconds</p>{' '}
        </div>
      </div>
    </TimerDiv>
  );
};

export default Timer;
