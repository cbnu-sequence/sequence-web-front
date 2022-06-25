import { useCallback, useEffect } from 'react';
import { TimerFormDiv } from './styles';
import useInput from '../../hooks/useInput';
import { useRouter } from 'next/router';

const TimerForm = ({ user, onReset, isActive, setIsActive, onAddPomo }) => {
  const [title, onChangeTitle, setTitle] = useInput('');
  const Router = useRouter();
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!title || !title.trim()) {
        return alert('제목은 필수항목이에요!');
      }
      if (!user) {
        alert('회원가입 후에 이용해주세요!');
        Router.replace('../login');
        return;
      }
      onAddPomo(title);
      setTitle('');
    },
    [title, setTitle, onAddPomo, user, Router],
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
        <div className="timer_btn">
          <button>{isActive ? 'stop' : 'start'}</button>
        </div>
        <input value={title} onChange={onChangeTitle} placeholder={'25분간 할 일을 입력해주세요'}></input>
      </form>
    </TimerFormDiv>
  );
};

export default TimerForm;
