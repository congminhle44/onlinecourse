/** @format */

import * as ActionTypes from '../constants/ActionTypes.js';
// import Axios from "axios";
import { api } from '../../api';

export const actGetCourseCategory = () => {
  return (dispatch) => {
    api
      .get('/api/coursecategories')
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
      })
      .catch((err) => {
        return err;
      });
  };
};

export const actGetCourseList = () => {
  return (dispatch) => {
    api
      .get('/api/courses/get-course')
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
      .get('/login/success', { withCredentials: true })
      .then((responseJson) => {
        dispatch({
          type: ActionTypes.GET_USER_AUTH_LOGIN_INFO,
        });
        localStorage.setItem('clientUser', responseJson.data.token);
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

export const buyCourse = (id, amount) => {
  return (dispatch) => {
    api
      .post(
        `/api/courses/buy-course`,
        { id, amount, courseIds: ['5f4e01b524a99e2854094750'] },
        {
          headers: {
            token:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Zjc5OGQzNjkwODdiNTJkMWNiY2Q3ZmEiLCJ1c2VybmFtZSI6Im5ob2tkZXZpbDEyMyIsImVtYWlsIjoibmhva2RldmlsMTIzQGdtYWlsLmNvbSIsImZ1bGxOYW1lIjoiTGUgQ29uZyBNaW5oIiwidXNlclR5cGUiOiJzdHVkZW50IiwidXNlckF2YXRhciI6Imh0dHBzOi8vc2NvbnRlbnQuZnNnbjQtMS5mbmEuZmJjZG4ubmV0L3YvdDEuMzA0OTctMS9jMjkuMC4xMDAuMTAwYS9wMTAweDEwMC84NDI0MTA1OV8xODkxMzIxMTg5NTA4NzVfNDEzODUwNzEwMDYwNTEyMDUxMl9uLmpwZz9fbmNfY2F0PTEmX25jX3NpZD03MjA2YTgmX25jX29oYz1NbVo2eTJzaE1LQUFYOXhKeWpTJl9uY19odD1zY29udGVudC5mc2duNC0xLmZuYSZvaD1lYTk3YTIwNTc0OTc2YTY4MjFiMjE4ZWU5MzRjM2FmNyZvZT01Rjc1NDExRSIsImlhdCI6MTYwNjA0MTczOCwiZXhwIjoxNjA2MDQ1MzM4fQ.b82U1z4xSwH_aepOoNaPCbX6DZISfw0rhoRgTup34Dg',
          },
        }
      )
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
