import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faKey,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
export default class Registration extends Component {
  render() {
    return (
      <div className="signupForm">
        <h4>Registration</h4>
        <form>
          <div className="register">
            <div className="importInfo">
              <div className="username">
                <FontAwesomeIcon icon={faKey} />
                <input type="text" placeholder="Username" name="username" />
              </div>
              <div className="password">
                <FontAwesomeIcon icon={faLock} />
                <input type="password" placeholder="Password" name="password" />
              </div>
            </div>
            <div className="indentify">
              <div className="fullname">
                <FontAwesomeIcon icon={faUser} />
                <input type="text" placeholder="Username" name="fullName" />
              </div>
              <div className="email">
                <FontAwesomeIcon icon={faEnvelope} />
                <input type="email" placeholder="Email" name="email" />
              </div>
              <div className="address">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <input type="text" placeholder="Address" name="address" />
              </div>
            </div>
            <div className="handleEvent">
              <div className="signupEvent">
                <button className="btn signup-btn">Register now</button>
              </div>
            </div>
          </div>
        </form>
        <p
          className="login-link"
          onClick={() => {
            this.props.renderReigsterForm();
          }}
        >
          {"< "}
          Back to login
        </p>
      </div>
    );
  }
}
