import React, { Component } from "react";
import Carousel from "../../Components/Carousel/carousel";
import Course from "../../Components/CourseChoice/course";
import TopNoti from "../../Components/Notification/topNoti";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    return (
      <div className="homepage">
        <TopNoti />
        <div className="main">
          <Carousel />
          <Course />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  courseAdd: state.courseReducer.courseAdd,
});

export default connect(mapStateToProps, null)(Home);
