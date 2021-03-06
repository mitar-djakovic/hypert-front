import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  SET_ACTIVE_PROJECT,
} from '../../constants';

const initialState = {
  loading: false,
  error: false,
  message: '',
  token: '',
  adminId: '',
  lastActiveProject: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        message: payload.message,
        token: payload.token,
        adminId: payload.adminId,
        lastActiveProject: payload.lastActiveProject,
        error: false,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case SET_ACTIVE_PROJECT:
      return {
        ...state,
        lastActiveProject: payload.lastActiveProject,
      };
    default:
      return state;
  }
};
