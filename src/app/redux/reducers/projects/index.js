import {
  GET_PROJECTS_REQUEST,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_ERROR,
  CREATE_PROJECT_REQUEST,
  CREATE_PROJECT_SUCCESS,
  CREATE_PROJECT_ERROR,
  CREATE_PROJECT_LIST_REQUEST,
  CREATE_PROJECT_LIST_SUCCESS,
  CREATE_PROJECT_LIST_ERROR,
  GET_PROJECT_LISTS_REQUEST,
  GET_PROJECT_LISTS_SUCCESS,
  GET_PROJECT_LISTS_ERROR,
  SET_ACTIVE_PROJECT,
} from '../../constants';

const initialState = {
  loading: false,
  error: false,
  projects: [],
  lists: [],
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
    case CREATE_PROJECT_REQUEST:
      return {
        ...state,
      };
    case CREATE_PROJECT_SUCCESS:
      return {
        ...state,
        projects: payload.updatedProjects,
      };
    case CREATE_PROJECT_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
};
