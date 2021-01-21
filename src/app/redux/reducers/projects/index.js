import {
  GET_PROJECTS_REQUEST,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_ERROR,
  SET_ACTIVE_PROJECT,
} from '../../constants';

const initialState = {
  loading: false,
  error: false,
  projects: [],
  activeProject: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PROJECTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case GET_PROJECTS_SUCCESS:
      return {
        ...state,
        loading: false,
        projects: payload.projects,
        error: false,
      };
    case GET_PROJECTS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case SET_ACTIVE_PROJECT:
      return {
        ...state,
        activeProject: payload.activeProject,
      };
    default:
      return state;
  }
};
