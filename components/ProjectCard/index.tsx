import React from 'react';
import ProjectImage from '../ProjectImage';
import { Project } from '../../interfaces/post';

function ProjectCard({ project }: { project: Project }) {
  return (
    <div>
      <ProjectImage image={project.images[0]} />
      <p>{project.year}</p>
      <p>{project.title}</p>
      <p>{project.content}</p>
      {project.tags &&
        project.tags.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
    </div>
  );
}

export default ProjectCard;
