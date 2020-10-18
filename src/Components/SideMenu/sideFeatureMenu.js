import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AnchorLink from "react-anchor-link-smooth-scroll";

import {
  faMoon,
  faSun,
  faBook,
  faBars,
  faSitemap,
} from "@fortawesome/free-solid-svg-icons";
export default class SideFeatureMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "light",
    };
    this.toggleTheme = this.toggleTheme.bind(this);
  }
  toggleTheme() {
    const theme =
      document.documentElement.getAttribute("data-theme") === "dark"
        ? "light"
        : "dark";
    this.setState({ theme });
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    document.documentElement.classList.add("theme-transition");
    window.setTimeout(function () {
      document.documentElement.classList.remove("theme-transition");
    }, 1000);
  }
  render() {
    return (
      <div className="side-menu">
        <div className="feature-menu">
          <div className="toggleWrapper" onClick={this.toggleTheme}>
            <div className="toggleLabel">
              <div className="toggleIcon">
                <FontAwesomeIcon
                  className="toggleDarkIcon"
                  icon={
                    document.documentElement.getAttribute("data-theme") ===
                    "light"
                      ? faMoon
                      : faSun
                  }
                />
              </div>
              <p>
                {document.documentElement.getAttribute("data-theme") === "light"
                  ? "Dark"
                  : "Light"}{" "}
                mode
              </p>
            </div>
          </div>
        </div>
        {window.location.pathname === "/" ? (
          <div className="nav-menu">
            <AnchorLink href="#course" className="menu-item course">
              <FontAwesomeIcon className="courseIcon" icon={faBook} />
              <p>Course</p>
            </AnchorLink>
            <AnchorLink href="#category" className="menu-item categories">
              <FontAwesomeIcon className="categoryIcon" icon={faBars} />
              <p>Best Categories</p>
            </AnchorLink>
            <AnchorLink href="#organization" className="menu-item organization">
              <FontAwesomeIcon className="organizationIcon" icon={faSitemap} />
              <p>Trust Organization</p>
            </AnchorLink>
          </div>
        ) : null}
      </div>
    );
  }
}
