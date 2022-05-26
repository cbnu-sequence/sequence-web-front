import React, { Component } from 'react';
import { Projects } from './styles';
import Slider from 'react-slick';

export default class CenterMode extends Component {
  render() {
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
    return (
      <Projects>
        <Slider {...settings}>
          <div className="project_1 project">
            <h3>1</h3>
          </div>
          <div className="project_2 project">
            <h3>2</h3>
          </div>
          <div className="project_3 project">
            <h3>3</h3>
          </div>
          <div className="project_4 project">
            <h3>4</h3>
          </div>
          <div className="project_5 project">
            <h3>5</h3>
          </div>
          <div className="project_6 project">
            <h3>6</h3>
          </div>
        </Slider>
      </Projects>
    );
  }
}
