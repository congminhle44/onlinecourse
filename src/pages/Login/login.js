import React, { Component } from "react";
import LoginForm from "./form/loginForm";
import RegistrationForm from "./form/registrationForm.js";
import { Redirect } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      register: false,
    };
  }

  renderRegisterForm = () => {
    this.setState({
      register: !this.state.register,
    });
  };

  render() {
    if (!localStorage.getItem("clientUser")) {
      return (
        <div className="loginBackground">
          <div className="loginWrapper">
            <div className="loginImg">
              <img src="../images/loginImg.jpg" alt="login" />
            </div>
            <div className="form">
              {!this.state.register ? (
                <LoginForm renderReigsterForm={this.renderRegisterForm} />
              ) : (
                <RegistrationForm
                  renderReigsterForm={this.renderRegisterForm}
                />
              )}
            </div>
          </div>
        </div>
      );
    }
    return Redirect("/");
  }
}
