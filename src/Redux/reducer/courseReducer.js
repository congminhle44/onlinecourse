import * as ActionTypes from "../constants/ActionTypes";

let initialState = {
  courseCategories: [],
  courseByCategory: [],
  courseByCategoryErr: null,
  courseCartList: [],
  courseList: [],
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
    case ActionTypes.GET_COURSE_BY_CATEGORY_ERR: {
      state.courseByCategoryErr = action.courseByCategoryErr;
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