import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faLock } from "@fortawesome/free-solid-svg-icons";

export default class LoginForm extends Component {
  render() {
    return (
      <div className="loginForm">
        <h4>login to our system</h4>
        <div className="oauth">
          <a className="fbAuth" href="http://localhost:5000/auth/facebook">
            <img src="../images/fbIcon.png" alt="facebook Icon" />
            <p>Login with Facebook</p>
          </a>
          <a className="ggAuth" href="http://localhost:5000/auth/google">
            <img src="../images/ggIcon.png" alt="Google Icon" />
            <p>Login with Google</p>
          </a>
        </div>
        <div className="choiceBreak">
          <div className="line"></div>
          <h5>Or</h5>
          <div className="line"></div>
        </div>
        <form>
          <div className="login">
            <div className="username">
              <FontAwesomeIcon icon={faKey} />
              <input type="text" placeholder="Username" name="username" />
            </div>
            <div className="password">
              <FontAwesomeIcon icon={faLock} />
              <input type="password" placeholder="Password" name="password" />
            </div>
            <div className="handleEvent">
              <div className="login-event">
                <button className="btn login-btn">Log in</button>
                <p>Or</p>
                <div className="register">
                  <p
                    className="signup-link"
                    onClick={() => {
                      this.props.renderReigsterForm();
                    }}
                  >
                    Registration
                  </p>
                </div>
              </div>
              <div className="forget-pass">
                <p>Forgot the password?</p>
                <a href="/user/recover">Password reset</a>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
