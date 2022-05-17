import React from 'react';
import { backUrl } from '../../config/config';
function PostImages({ images }) {
  if (images.length === 1) {
    return (
      <>
        <img role="presentation" src={`${backUrl}/${images[0].src}`} alt={images[0].src} />
      </>
    );
  }
  if (images.length === 2) {
    return (
      <div>
        <img role="presentation" width="50%" src={`${backUrl}/${images[0].src}`} alt={images[0].src} />
        <img role="presentation" width="50%" src={`${backUrl}/${images[0].src}`} alt={images[1].src} />
      </div>
    );
  }
  return (
    <div>
      <img role="presentation" width="50%" src={`http://localhost:8080/${images[0].src}`} alt={images[0].src} />
      <div
        role="presentation"
        style={{
          display: 'inline-block',
          width: '50%',
          textAlign: 'center',
          verticalAlign: 'middle',
        }}
        // onClick={onZoom}
      >
        <br />
        {images.length - 1}
        개의 사진 더보기
      </div>
      {/*{showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}*/}
    </div>
  );
}

export default PostImages;
