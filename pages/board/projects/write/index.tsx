import React from 'react';
import ProjectWrite from '../../../../components/ProjectWrite';

function Write() {
  return (
    <div>
      <ProjectWrite />
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
