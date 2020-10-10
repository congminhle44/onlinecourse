import React, { Component } from "react";
import Slider from "react-slick";
export default class CourseWrapper extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1030,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 3,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 530,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return <Slider {...settings}>{this.props.value}</Slider>;
  }
}
