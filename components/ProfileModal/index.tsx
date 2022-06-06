import { Block, ColorLine, ModalContainer, TopBlock } from './styles';
import { AiFillCloseCircle } from 'react-icons/ai';

const ProfileModal = ({ setOpenModal, item }) => {
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
          <div className="desc">
            <img src={item.img} />
            {item.description && <p>{item.description}</p>}
          </div>
        </ModalContainer>
      </Block>
    </>
  );
};

export default ProfileModal;
