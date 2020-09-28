import * as ActionTypes from "../constants/ActionTypes.js";
// import Axios from "axios";
import { api } from "../../api";

export const actGetCourseCategory = () => {
  return (dispatch) => {
    api
      .get("/QuanLyKhoaHoc/LayDanhMucKhoaHoc")
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
      .get(
        `/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${category}&MaNhom=GP01`
      )
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
      .get("/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01")
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
    fetch("http://localhost:5000/login/success", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    })
      .then((response) => {
        if (response.status === 200) return response.json();
        throw new Error("failed to authenticate user");
      })
      .then((responseJson) => {
        dispatch({
          type: ActionTypes.GET_USER_AUTH_LOGIN_INFO,
        });
        localStorage.setItem("clientUser", responseJson.token);
      })
      .catch((error) => {
        throw error;
      });
  };
};
