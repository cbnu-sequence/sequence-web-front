import React from 'react';
import { backUrl } from '../../config/config';

function PostImages({ images }) {
  if (images.length === 1) {
    return (
      <>
        <img role="presentation" src={images[0]} alt={images[0]} />
      </>
    );
  }
  if (images.length === 2) {
    return (
      <div>
        <img role="presentation" width="50%" src={images[0]} alt={images[0]} />
        <img role="presentation" width="50%" src={images[1]} alt={images[1]} />
      </div>
    );
  }
  return (
    <div>
      <img role="presentation" width="50%" src={images[0]} alt={images[0]} />
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
