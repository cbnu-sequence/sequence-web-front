import React from 'react';
import WriteBoard from '../../../components/WriteBoard';

function Write() {
  return (
    <div>
      <WriteBoard />
    </div>
  );
}

export default Write;

export const getStaticProps = async () => {
  return {
    props: {
      layout: 'default',
    },
  };
};
