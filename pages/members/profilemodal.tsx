import { Block, ColorLine, ModalContainer, TopBlock } from './profilemodalstyles';
import { AiFillCloseCircle } from 'react-icons/ai';

const ProfileModal = ({ setOpenModal }) => {
  return (
    <>
      <Block>
        <ModalContainer>
          <TopBlock>
            <div className="title">프로필</div>
            <div className="icon" onClick={() => setOpenModal(false)}>
              <AiFillCloseCircle />
            </div>
          </TopBlock>
          <ColorLine />
        </ModalContainer>
      </Block>
    </>
  );
};

export default ProfileModal;
