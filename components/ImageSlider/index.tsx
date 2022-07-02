import { useCallback, useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import ZoomImage from '../ZoomImage';
import { Block } from './styles';

const ImageSlider = ({ data }) => {
  const [zoomImage, setZoomImage] = useState(false);
  const [img, setImg] = useState(null);
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

  const onZoomImage = useCallback((image) => {
    setZoomImage(true);
    setImg(image);
  }, []);

  return (
    <Block>
      {data.images.length > 0 && (
        <>
          <div className="projectdetail-bodycontainer-image">
            <button className="projectdetail-bodycontainer-leftIcon" onClick={onPreviousImage}>
              <BiChevronLeft />
            </button>
            <div className="projectdetail-bodycontainer-img" onClick={() => onZoomImage(data.images[imgIndex])}>
              <img src={data.images[imgIndex].url} alt={data.images[imgIndex].name} />
            </div>
            <button className="projectdetail-bodycontainer-rightIcon" onClick={onNextImage}>
              <BiChevronRight />
            </button>
          </div>
          <div className="projectdetail-bodycontainer-image-page">
            {imgIndex + 1} / {data.images.length}
          </div>
        </>
      )}
      {zoomImage && <ZoomImage setZoomImage={setZoomImage} img={img} />}
    </Block>
  );
};

export default ImageSlider;
