import React, { ReactElement } from 'react';
import Header from '../../../components/Header';
import CommonHeader from '../../../components/Table/CommonHeader';
import Head from 'next/head';
import { useProjects } from '../../../hooks/useProjects';
import ProjectCard from '../../../components/ProjectCard';
import { ProjectsDiv } from '../../../styles/projects';
import NoList from '../../../components/NoList';

function Projects(): ReactElement {
  const { projects } = useProjects();
  if (!projects || projects.length == 0) {
    return <NoList enTitle={'projects'} krTitle={'등록된 프로젝트가 없습니다'} />;
  }

  return (
    <div>
      <Head>
        <title>시퀀스 | 프로젝트</title>
      </Head>
      <CommonHeader title="프로젝트" />
      <ProjectsDiv>
        {projects && projects.map((item, index) => <ProjectCard key={item._id} project={item} />)}
      </ProjectsDiv>
    </div>
  );
}

export default Projects;
