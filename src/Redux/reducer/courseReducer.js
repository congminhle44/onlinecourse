import * as ActionTypes from "../constants/ActionTypes";

let initialState = {
  courseCategories: [],
  courseByCategory: [],
  courseCartList: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  courseAdd: {},
  courseList: [],
  courseInfo: {},
};
const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_COURSE_CATEGORIES: {
      state.courseCategories = action.courseCategories;
      return { ...state };
    }
    case ActionTypes.GET_COURSE_BY_CATEGORY: {
      state.courseByCategory = action.courseByCategory;
      return { ...state };
    }
    case ActionTypes.GET_COURSE_INFO: {
      state.courseInfo = action.courseInfo;
      return { ...state };
    }
    case ActionTypes.CREATE_NOTI_OBJ: {
      state.courseAdd = action.courseAdd;
      return { ...state };
    }
    case ActionTypes.GET_COURSE_LIST: {
      state.courseList = action.courseList;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default courseReducer;
