import React, { Component } from 'react';
import { ProjectDiv } from './styles';
import Slider from 'react-slick';
import { useProjects } from '../../hooks/useProjects';
import ProjectCard from '../ProjectCard';

function CenterMode() {
  const { projects } = useProjects();

  const dp = [];
  for (let i = projects.length - 1; i > projects.length - 6; i--) {
    if (projects[i] == undefined) break;
    else dp.push(projects[i]);
  }
  return (
    <ProjectDiv>
      <Slider {...settings}>
        {dp &&
          dp.map((item, index) => {
            return (
              <div className={`project_${index + 1} project`} key={item._id}>
                <ProjectCard project={item} />
              </div>
            );
          })}
      </Slider>
    </ProjectDiv>
  );
}
export default CenterMode;

const settings = {
  className: 'center',
  centerMode: true,
  infinite: true,
  centerPadding: '20px',
  slidesToShow: 3,
  speed: 4000,
  dots: true,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
};
