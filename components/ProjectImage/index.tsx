import React from 'react';
import { ProjectImg, ProjectImgDiv } from './styles';
import { Img } from '../../interfaces/post';

function ProjectImage({ image }: { image: Img }) {
  return <ProjectImgDiv>{image && <ProjectImg src={image.url} alt={image.filename} />}</ProjectImgDiv>;
}
export default ProjectImage;
