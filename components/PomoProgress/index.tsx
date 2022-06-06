import { ProgressDiv } from './styles';

const PomoProgress = ({ progress }) => {
  return (
    <ProgressDiv>
      <p>진행중인 뽀모도로: </p>
      {progress != '' ? <span>{progress}</span> : <span>없음</span>}
    </ProgressDiv>
  );
};
export default PomoProgress;
