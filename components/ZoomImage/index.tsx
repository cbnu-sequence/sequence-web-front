import { AiFillCloseCircle, AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { Block, ModalContainer } from './styles';

const ZoomImage = ({ setZoomImage, img, onPreviousImage, onNextImage, imgIndex, imgLength }) => {
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
            <img src={img.url} alt={img.name} />
          </div>
        )}
        <div className="zoomImage-bottom">
          <button className="zoomImage-bottom-leftIcon" onClick={onPreviousImage}>
            <AiOutlineArrowLeft />
          </button>
          <div>
            {imgIndex + 1} / {imgLength}
          </div>
          <button className="zoomImage-bottom-rightIcon" onClick={onNextImage}>
            <AiOutlineArrowRight />
          </button>
        </div>
      </ModalContainer>
    </Block>
  );
};

export default ZoomImage;
