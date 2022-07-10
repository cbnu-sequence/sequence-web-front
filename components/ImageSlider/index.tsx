import React from 'react';
import { useCallback, useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import ZoomImage from '../ZoomImage';
import { Block } from './styles';

const ImageSlider = ({ data }) => {
  const [zoomImage, setZoomImage] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  const onPreviousImage = useCallback(() => {
    if (imgIndex === 0) {
      setImgIndex(data.images.length - 1);
    } else {
      setImgIndex(imgIndex - 1);
    }
  }, [data.images.length, imgIndex]);

  const onNextImage = useCallback(() => {
    if (imgIndex === data.images.length - 1) {
      setImgIndex(0);
    } else {
      setImgIndex(imgIndex + 1);
    }
  }, [data.images.length, imgIndex]);

  return (
    <Block>
      {data.images.length > 0 && (
        <>
          <div className="image">
            <button className="image__leftIcon" onClick={onPreviousImage}>
              <BiChevronLeft />
            </button>
            <div className="image__img" onClick={() => setZoomImage(true)}>
              <img src={data.images[imgIndex].url} alt={data.images[imgIndex].name} />
            </div>
            <button className="image__rightIcon" onClick={onNextImage}>
              <BiChevronRight />
            </button>
          </div>
          <div className="image__page">
            {imgIndex + 1} / {data.images.length}
          </div>
        </>
      )}
      {zoomImage && (
        <ZoomImage
          setZoomImage={setZoomImage}
          img={data.images[imgIndex]}
          onPreviousImage={onPreviousImage}
          onNextImage={onNextImage}
          imgIndex={imgIndex}
          imgLength={data.images.length}
        />
      )}
    </Block>
  );
};

export default ImageSlider;
