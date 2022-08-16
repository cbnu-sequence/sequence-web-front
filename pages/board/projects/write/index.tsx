import React from 'react';
import ProjectWrite from '../../../../components/ProjectWrite';
import { PrefetchCleanInfo } from '../../../../hooks/PrefetchCleanInfo';

function Write() {
  return (
    <div>
      <ProjectWrite />
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
