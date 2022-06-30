import { AiFillCloseCircle } from 'react-icons/ai';
import { Block, ModalContainer } from './styles';

const ZoomImage = ({ setZoomImage, img }) => {
  return (
    <Block>
      <ModalContainer>
        <div className="zoomImage-top">
          <div className="zoomImage-top-null" />
          <div className="zoomImage-top-icon" onClick={() => setZoomImage(false)}>
            <AiFillCloseCircle />
          </div>
        </div>
        {img && (
          <div className="zoomImage-image">
            <img src={img.url} />
          </div>
        )}
      </ModalContainer>
    </Block>
  );
};

export default ZoomImage;
