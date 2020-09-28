import React, { Component } from "react";
import { connect } from "react-redux";
class CourseCard extends Component {
  render() {
    let { courseInfo } = this.props;
    return (
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src={courseInfo.hinhAnh}
              alt="Avatar"
              style={{ width: 250, height: 230 }}
            />
          </div>
          <div className="flip-card-back">
            <h1>{courseInfo.tenKhoaHoc}</h1>
            <p className="course-descrip">{courseInfo.moTa}</p>
            <button
              className="add-cart-button"
              onClick={() => {
                this.props.courseCartList.push(courseInfo);
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  courseCartList: state.courseReducer.courseCartList,
});
export default connect(mapStateToProps, null)(CourseCard);
