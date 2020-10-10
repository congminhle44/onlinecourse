import React, { Component } from "react";
import { connect } from "react-redux";
import { faHeart, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import * as Action from "../../Redux/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class CourseCard extends Component {
  render() {
    let { courseInfo, courseCartList, courseAdd, addCourseObj } = this.props;
    if (courseAdd.name && courseAdd.type) {
      setTimeout(() => {
        addCourseObj(null, null);
      }, 1000);
    }
    return (
      <div className="course-card">
        <div className="course-card-detail">
          <div className="course-card-image">
            <img src={courseInfo.courseImage} alt="Avatar" />
          </div>
          <div className="course-card-content">
            <h5>{courseInfo.courseName}</h5>
          </div>
          <div className="course-card-function">
            <button
              className="add-cart-button"
              onClick={() => {
                this.props.courseCartList.push(courseInfo);
                localStorage.setItem("cart", JSON.stringify(courseCartList));
                window.location.pathname = "/cart";
              }}
            >
              ${courseInfo.cost}
            </button>
            <button className="add-wishlist">
              <FontAwesomeIcon icon={faHeart} />
            </button>
            <button className="add-cartPlus">
              <FontAwesomeIcon
                onClick={() => {
                  courseCartList.push(courseInfo);
                  addCourseObj(courseInfo.courseName, "cart");
                  localStorage.setItem("cart", JSON.stringify(courseCartList));
                }}
                icon={faCartPlus}
              />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  courseCartList: state.courseReducer.courseCartList,
  courseAdd: state.courseReducer.courseAdd,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addCourseObj: (name, obj) => {
      dispatch(Action.actCreateNotiObj(name, obj));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CourseCard);
