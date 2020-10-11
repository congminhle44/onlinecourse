import * as ActionTypes from "../constants/ActionTypes.js";
// import Axios from "axios";
import { api } from "../../api";

export const actGetCourseCategory = () => {
  return (dispatch) => {
    api
      .get("/api/coursecategories")
      .then((result) => {
        dispatch({
          type: ActionTypes.GET_COURSE_CATEGORIES,
          courseCategories: result.data,
        });
      })
      .catch((err) => {
        return err;
      });
  };
};

export const actGetCourseByCategory = (category) => {
  return (dispatch) => {
    api
      .get(`/api/coursecategories/category=${category}`)
      .then((result) => {
        dispatch({
          type: ActionTypes.GET_COURSE_BY_CATEGORY,
          courseByCategory: result.data,
        });
        dispatch({
          type: ActionTypes.GET_COURSE_BY_CATEGORY_ERR,
          courseByCategoryErr: null,
        });
      })
      .catch((err) => {
        dispatch({
          type: ActionTypes.GET_COURSE_BY_CATEGORY_ERR,
          courseByCategoryErr: err,
        });
      });
  };
};

export const actGetCourseList = () => {
  return (dispatch) => {
    api
      .get("/api/courses/get-course")
      .then((result) => {
        dispatch({
          type: ActionTypes.GET_COURSE_LIST,
          courseList: result.data,
        });
      })
      .catch((err) => {
        return err;
      });
  };
};

export const actGetOAuthLoginInfo = () => {
  return (dispatch) => {
    api
      .get("/login/success", { withCredentials: true })
      .then((responseJson) => {
        dispatch({
          type: ActionTypes.GET_USER_AUTH_LOGIN_INFO,
        });
        localStorage.setItem("clientUser", responseJson.data.token);
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const actGetCourseInfo = (courseId) => {
  return (dispatch) => {
    api
      .get(`/api/courses/get-course/course-id=${courseId}`)
      .then((result) => {
        dispatch({
          type: ActionTypes.GET_COURSE_INFO,
          courseInfo: result.data,
        });
      })
      .catch((error) => {
        return error;
      });
  };
};

export const actCreateNotiObj = (name, type) => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.CREATE_NOTI_OBJ,
      courseAdd: { name, type },
    });
  };
};
