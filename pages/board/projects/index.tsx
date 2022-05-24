import React, { ReactElement } from 'react';
import Header from '../../../components/Header';
import CommonHeader from '../../../components/Table/CommonHeader';
import Head from 'next/head';
import { useProjects } from '../../../hooks/useProjects';
import ProjectCard from '../../../components/ProjectCard';
import { ProjectsDiv } from './styles';
function projects(): ReactElement {
  const { projects } = useProjects();
  return (
    <div>
      <Head>
        <title>시퀀스 | 프로젝트</title>
      </Head>
      <Header />
      <CommonHeader title="프로젝트" />
      <ProjectsDiv>
        {projects && projects.map((item, index) => <ProjectCard key={item._id} project={item} />)}
      </ProjectsDiv>
    </div>
  );
}

export default projects;
