import React, { Component } from "react";
import CourseCategories from "./courseCategories";

export default class Course extends Component {
  render() {
    return (
      <div className="course-wrapper" id="course">
        <div className="course-header">
          <h4>The world's largest choice of courses</h4>
          <p>
            Choose from 150,000 online course videos. New courses are added
            every month
          </p>
        </div>
        <CourseCategories />
      </div>
    );
  }
}
