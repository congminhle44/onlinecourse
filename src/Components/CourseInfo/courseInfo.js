import React, { Component } from "react";
import { connect } from "react-redux";
import * as Action from "../../Redux/action";

class CourseInfo extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.actGetCourseInfo(id);
  }

  renderCourseInfo = () => {
    const { courseInfo } = this.props;
    if (courseInfo) {
      return (
        <div className="course-info">
          <div className="course-info-detail">
            <div className="course-info-detail-content">
              <div className="course-info-detail-content-header">
                <h2>{courseInfo.courseName}</h2>
                <p>Viewers: {courseInfo.viewers}</p>
                <p>
                  Created by{" "}
                  {courseInfo.personCreated
                    ? courseInfo.personCreated.fullName
                    : ""}
                </p>
                <p>
                  Created on{" "}
                  {new Date(courseInfo.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div className="course-info-detail-content-description"></div>
            </div>
            <div className="course-info-detail-pay-card-info"></div>
          </div>
        </div>
      );
    }
  };

  render() {
    return <div>{this.renderCourseInfo()}</div>;
  }
}

const mapStateToProps = (state) => ({
  courseInfo: state.courseReducer.courseInfo,
});

const mapDispatchToProps = (dispatch) => {
  return {
    actGetCourseInfo: (courseId) => {
      dispatch(Action.actGetCourseInfo(courseId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseInfo);
