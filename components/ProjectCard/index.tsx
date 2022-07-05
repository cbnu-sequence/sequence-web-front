import React from 'react';
import ProjectImage from '../ProjectImage';
import { Project } from '../../interfaces/post';
import { ProjectCardBox, ProjectTags } from './styles';
import Link from 'next/link';

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link key={project._id} href={`../../project/${project._id}`}>
      <ProjectCardBox>
        <ProjectImage image={project.images[0]} />
        <p className="project__year">{project.year}</p>
        <p className="project__title">{project.title}</p>
        <p className="project__content">{project.content}</p>
        <ProjectTags>
          {project.tags &&
            project.tags.map((item, index) => {
              return <span key={index}>{item}</span>;
            })}
        </ProjectTags>
      </ProjectCardBox>
    </Link>
  );
}

export default ProjectCard;
