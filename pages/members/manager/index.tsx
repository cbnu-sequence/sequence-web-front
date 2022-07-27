import React from 'react';
import ManaGer from '../../../components/Manager';

const Manager = () => {
  return <ManaGer />;
};

export default Manager;

export const getStaticProps = async () => {
  return {
    props: {
      layout: 'default',
    },
  };
};
