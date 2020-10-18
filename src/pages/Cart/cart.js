import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class Cart extends Component {
  renderCartingCourse = () => {
    const { courseCartList } = this.props;
    if (courseCartList.length > 0) {
      return courseCartList.map((course, index) => {
        return (
          <div key={index} className="carting-item">
            <div className="cart-item-wrapper">
              <div className="carting-item-img">
                <img src={course.courseImage} alt={course.courseName} />
              </div>
              <div className="carting-item-content">
                <h5>{course.courseName}</h5>
                <p className="description">{course.courseDescription}</p>
                <p className="cost">${course.cost}</p>
              </div>
            </div>
            <div
              onClick={() => {
                courseCartList.splice(index, 1);
                localStorage.setItem("cart", JSON.stringify(courseCartList));
                this.forceUpdate();
              }}
              className="cart-item-feature"
            >
              <FontAwesomeIcon icon={faTrash} />
            </div>
          </div>
        );
      });
    } else {
      return (
        <h5
          style={{
            textAlign: "center",
            fontSize: "22px",
            color: "var(--text-color)",
          }}
        >
          You don't have any course in cart basket
        </h5>
      );
    }
  };

  calTotal = () => {
    const { courseCartList } = this.props;
    return courseCartList.reduce((total, course) => total + course.cost, 0);
  };

  render() {
    const { courseCartList } = this.props;
    return (
      <div className="carting">
        <h5>{courseCartList.length} courses in your basket</h5>
        <hr />
        {courseCartList.length > 0 ? (
          <div className="cart-wrapper">
            <div className="cart-list">{this.renderCartingCourse()}</div>
            <div className="cart-payment">
              <div className="cart-detail">
                <h5>Total</h5>
                <h1>${this.calTotal()}</h1>
                <h5>{courseCartList.length} courses:</h5>
                <p>
                  {courseCartList
                    .map((course) => {
                      return course.courseName;
                    })
                    .join(", ")}
                </p>
              </div>
              <div className="cart-button">
                <button
                  onClick={() => {
                    if (!localStorage.getItem("clientUser")) {
                      window.location.pathname = "/login";
                    }
                  }}
                  className="pay-btn"
                >
                  Pay
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="cart-empty">
            <div className="cart-empty-content">
              <FontAwesomeIcon
                className="cart-empty-content-icon"
                icon={faCartArrowDown}
              />
              <p>Your basket is empty. Continue shopping and find a course!</p>
            </div>
            <div className="cart-empty-link">
              <Link className="cart-empty-link-a" to="/">
                Continue your purchase
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  courseCartList: state.courseReducer.courseCartList,
});
export default connect(mapStateToProps, null)(Cart);
