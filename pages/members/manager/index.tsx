import React from 'react';
import ManaGer from '../../../components/Manager';
import { PrefetchCleanInfo } from '../../../hooks/PrefetchCleanInfo';

const Manager = () => {
  return <ManaGer />;
};

export default Manager;

export async function getServerSideProps(context) {
  const cleanInfo = await PrefetchCleanInfo(context);

  return {
    props: {
      dehydratedState: cleanInfo,
    },
  };
}
