import React, { useState, useCallback } from 'react';
import { Img } from '../../interfaces/post';
import ImagesZoom from '../ImagesZoom';

function PostImages({ images }: { images: Img[] }) {
  const [showImagesZoom, setShowImagesZoom] = useState(false);
  const onZoom = useCallback(() => {
    setShowImagesZoom(true);
  }, []);

  const onClose = useCallback(() => {
    setShowImagesZoom(false);
  }, []);

  if (images.length === 1) {
    return (
      <>
        <img role="presentation" src={images[0].url} alt={images[0].filename} onClick={onZoom} />
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
      </>
    );
  }
  if (images.length === 2) {
    return (
      <div>
        <img role="presentation" width="50%" src={images[0].url} alt={images[0].filename} onClick={onZoom} />
        <img role="presentation" width="50%" src={images[1].url} alt={images[1].filename} onClick={onZoom} />
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
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
        onClick={onZoom}
      >
        <br />
        {images.length - 1}
        개의 사진 더보기
      </div>
      {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
    </div>
  );
}

export default PostImages;
