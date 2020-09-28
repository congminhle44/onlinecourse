import * as ActionTypes from "../constants/ActionTypes";

let initialState = {
  register: false,
};
const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_USER_AUTH_LOGIN_INFO: {
      state.user = action.user;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default courseReducer;
