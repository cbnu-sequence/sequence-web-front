import { useCallback, useEffect } from 'react';
import { TimerFormDiv } from './styles';
import useInput from '../../hooks/useInput';

const TimerForm = ({ isActive, setIsActive, onAddPomo }) => {
  const [title, onChangeTitle, setTitle] = useInput('');
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!title || !title.trim()) {
        return alert('제목은 필수항목이에요!');
      }
      onAddPomo(title);
      setIsActive(true);
      setTitle('');
    },
    [title, setTitle],
  );
  const onStop = useCallback(
    (e) => {
      e.preventDefault();
      setIsActive(false);
    },
    [setIsActive],
  );
  return (
    <TimerFormDiv>
      <form onSubmit={isActive ? onStop : onSubmit}>
        <button>{isActive ? 'stop' : 'start'}</button>
        <input value={title} onChange={onChangeTitle} placeholder={'25분간 할 일을 입력해주세요'}></input>
      </form>
    </TimerFormDiv>
  );
};

export default TimerForm;
