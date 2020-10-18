import React, { Component } from "react";
import { connect } from "react-redux";

class TopNoti extends Component {
  render() {
    let { courseAdd } = this.props;
    return (
      <div
        className={
          courseAdd.name && courseAdd.type
            ? "topNoti-wrapper show"
            : "topNoti-wrapper"
        }
      >
        <div className="topNoti">
          <h4>
            {courseAdd.name} was added to {courseAdd.type}
          </h4>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  courseAdd: state.courseReducer.courseAdd,
});

export default connect(mapStateToProps, null)(TopNoti);
