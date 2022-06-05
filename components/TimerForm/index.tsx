import { useCallback, useEffect } from 'react';
import { TimerFormDiv } from './styles';
import useInput from '../../hooks/useInput';

const TimerForm = ({ onReset, isActive, setIsActive, onAddPomo }) => {
  const [title, onChangeTitle, setTitle] = useInput('');
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!title || !title.trim()) {
        return alert('제목은 필수항목이에요!');
      }
      onAddPomo(title);
      setTitle('');
    },
    [title, setTitle],
  );
  const onStop = useCallback(
    (e) => {
      e.preventDefault();
      let stopConfirm = confirm('stop하시면 타이머가 초기화됩니다. stop하시겠어요?');
      if (stopConfirm) {
        setIsActive(false);
        onReset();
      }
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
