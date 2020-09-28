import React, { Component } from "react";
import Carousel from "../../Components/Carousel/carousel";
import Course from "../../Components/CourseChoice/course";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    return (
      <div className="homepage">
        <Carousel />
        <Course />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  courseCartList: state.courseReducer.courseCartList,
});

export default connect(mapStateToProps, null)(Home);
