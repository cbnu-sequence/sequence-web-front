import React from 'react';
import WriteBoard from '../../../components/WriteBoard';
import { PrefetchCleanInfo } from '../../../hooks/PrefetchCleanInfo';

function Write() {
  return (
    <div>
      <WriteBoard />
    </div>
  );
}

export default Write;

export async function getServerSideProps(context) {
  const cleanInfo = await PrefetchCleanInfo(context);

  return {
    props: {
      dehydratedState: cleanInfo,
    },
  };
}
