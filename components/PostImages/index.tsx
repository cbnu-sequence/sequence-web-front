import React from 'react';
import { Img } from '../../interfaces/post';

function PostImages({ images }: { images: Img[] }) {
  if (images.length === 1) {
    return (
      <>
        <img role="presentation" src={images[0].url} alt={images[0].filename} />
      </>
    );
  }
  if (images.length === 2) {
    return (
      <div>
        <img role="presentation" width="50%" src={images[0].url} alt={images[0].filename} />
        <img role="presentation" width="50%" src={images[1].url} alt={images[1].filename} />
      </div>
    );
  }
  return (
    <div>
      <img role="presentation" width="50%" src={images[0].url} alt={images[0].filename} />
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
