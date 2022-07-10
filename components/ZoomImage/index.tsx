import React from 'react';
import { AiFillCloseCircle, AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { Block, ModalContainer } from './styles';

const ZoomImage = ({ setZoomImage, img, onPreviousImage, onNextImage, imgIndex, imgLength }) => {
  return (
    <Block>
      <ModalContainer>
        <div className="zoomImage">
          <div className="zoomImage__null" />
          <div className="zoomImage__icon" onClick={() => setZoomImage(false)}>
            <AiFillCloseCircle />
          </div>
        </div>
        {img && (
          <div className="zoomImage__img">
            <img src={img.url} alt={img.name} />
          </div>
        )}
        <div className="bottom">
          <button className="bottom__leftIcon" onClick={onPreviousImage}>
            <AiOutlineArrowLeft />
          </button>
          <div>
            {imgIndex + 1} / {imgLength}
          </div>
          <button className="bottom__rightIcon" onClick={onNextImage}>
            <AiOutlineArrowRight />
          </button>
        </div>
      </ModalContainer>
    </Block>
  );
};

export default ZoomImage;
