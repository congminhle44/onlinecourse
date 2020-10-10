import React, { Component } from "react";
import { connect } from "react-redux";

class TopNoti extends Component {
  render() {
    let { courseAdd } = this.props;
    return (
      <div
        className={
          courseAdd.name && courseAdd.type ? "topNoti show" : "topNoti"
        }
      >
        <h4>
          {courseAdd.name} was added to {courseAdd.type}
        </h4>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  courseAdd: state.courseReducer.courseAdd,
});

export default connect(mapStateToProps, null)(TopNoti);
