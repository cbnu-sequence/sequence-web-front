import React from 'react';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function PostFiles({ files }) {
  return files.map((item) => {
    return (
      <a key={item._id} href={item.url} download={item.filename}>
        <div>
          {item.filename}
          <FontAwesomeIcon aria-hidden={false} icon={faDownload} />
        </div>
      </a>
    );
  });
}
export default PostFiles;
