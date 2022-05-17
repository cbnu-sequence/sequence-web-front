import React from 'react';
import { backUrl } from '../../config/config';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function PostFiles({ files }) {
  return files.map((item) => {
    return (
      <a key={item} href={`${backUrl}/${item}`} download>
        <FontAwesomeIcon aria-hidden={false} icon={faDownload} />
      </a>
    );
  });
}
export default PostFiles;
