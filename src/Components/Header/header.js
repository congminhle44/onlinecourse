import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import * as Action from "../../Redux/action";
import {
  faMoon,
  faUser,
  faHeart,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import JwtDecode from "jwt-decode";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "light",
      cartcourse: this.props.courseCartList,
      menuShow: false,
      userLogin: false,
    };
    this.wrapperRef = React.createRef();
    this.toggleTheme = this.toggleTheme.bind(this);
  }
  handleClickOutside = (event) => {
    const { target } = event;
    if (!this.wrapperRef.current.contains(target)) {
      this.setState({
        menuShow: false,
      });
    }
  };
  componentDidMount() {
    this.props.actGetCourseList();
    this.props.actGetUserOAuthLoginInfo();
    document.addEventListener("click", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
  }

  toggleTheme() {
    const theme =
      document.documentElement.getAttribute("data-theme") === "dark"
        ? "light"
        : "dark";
    this.setState({ theme });
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.classList.add("theme-transition");
    window.setTimeout(function () {
      document.documentElement.classList.remove("theme-transition");
    }, 1000);
  }

  render() {
    const { courseCartList } = this.props;
    const user = localStorage.getItem("clientUser")
      ? JwtDecode(localStorage.getItem("clientUser"))
      : "";
    setTimeout(() => {
      this.forceUpdate();
    }, 0);
    return (
      <div className="header-wrapper d-flex justify-content-between align-items-center">
        <div className="header-left">
          <Link className="logo-wrapper" to="/">
            <img
              width="100px"
              height="65px"
              src="../images/logo.png"
              alt="Website logo"
            />
          </Link>
        </div>
        <div className="header-right">
          <div className="wishList">
            <FontAwesomeIcon icon={faHeart} />
          </div>
          <Link to="/cart" className="cart">
            <FontAwesomeIcon icon={faShoppingCart} />
            {courseCartList.length !== 0 ? (
              <div className="cart-amount">
                <p>{courseCartList.length}</p>
              </div>
            ) : null}
          </Link>
          {Object.keys(user).length === 0 ? (
            <div className="user-authenticate">
              <Link className="login-button" to="/login">
                <FontAwesomeIcon icon={faUser} />
              </Link>
            </div>
          ) : (
            <div className="user-wrapper d-flex justify-content-around align-items-center">
              <img
                width="50"
                height="50"
                alt="avatar"
                className="rounded-circle"
                src={user.userAvatar}
              />
              <div className="userChoice">
                <ul>
                  <li>Information</li>
                  <li
                    onClick={() => {
                      localStorage.removeItem("clientUser");
                    }}
                  >
                    <a href="http://localhost:5000/logout">Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          )}
          <div className="toggleMenu ml-2 mobile" ref={this.wrapperRef}>
            <div
              className="navIcon"
              onClick={() => {
                this.setState({
                  menuShow: true,
                });
              }}
            >
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
            <div className={this.state.menuShow ? "menu show" : "menu"}>
              <div className="toggleWrapper">
                <div className="toggleLabel">
                  <div className="toggleIcon">
                    <FontAwesomeIcon className="toggleDarkIcon" icon={faMoon} />
                  </div>
                  <p>Dark mode</p>
                </div>
                <div className="toggleDark">
                  <input
                    type="checkbox"
                    id="switch"
                    name="theme"
                    checked={
                      document.documentElement.getAttribute("data-theme") ===
                      "light"
                        ? false
                        : true
                    }
                    onChange={this.toggleTheme}
                  />
                  <label htmlFor="switch">Toggle</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.state.menuShow ? <div className="coverMenu"></div> : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  courseList: state.courseReducer.courseList,
  courseCartList: state.courseReducer.courseCartList,
  haveProduct: state.courseReducer.haveProduct,
  courseUpdate: state.courseReducer.courseUpdate,
});

const mapDispatchToProps = (dispatch) => {
  return {
    actGetCourseList: () => {
      dispatch(Action.actGetCourseList());
    },
    actGetUserOAuthLoginInfo: () => {
      dispatch(Action.actGetOAuthLoginInfo());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
