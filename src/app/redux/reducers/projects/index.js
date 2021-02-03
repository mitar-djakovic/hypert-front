import {
  GET_PROJECTS_REQUEST,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_ERROR,
  CREATE_PROJECT_REQUEST,
  CREATE_PROJECT_SUCCESS,
  CREATE_PROJECT_ERROR,
  GET_SINGLE_PROJECT_REQUEST,
  GET_SINGLE_PROJECT_SUCCESS,
  GET_SINGLE_PROJECT_ERROR,
  CREATE_PROJECT_LIST_REQUEST,
  CREATE_PROJECT_LIST_SUCCESS,
  CREATE_PROJECT_LIST_ERROR,
  CREATE_TASK_REQUEST,
  CREATE_TASK_SUCCESS,
  CREATE_TASK_ERROR,
} from '../../constants';

const initialState = {
  loading: false,
  error: false,
  project: null,
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
    case GET_SINGLE_PROJECT_REQUEST:
      return {
        ...state,
      };
    case GET_SINGLE_PROJECT_SUCCESS:
      return {
        ...state,
        project: payload.project,
      };
    case GET_SINGLE_PROJECT_ERROR:
      return {
        ...state,
      };
    case CREATE_PROJECT_LIST_REQUEST:
      return {
        ...state,
      };
    case CREATE_PROJECT_LIST_SUCCESS:
      return {
        ...state,
      };
    case CREATE_PROJECT_LIST_ERROR:
      return {
        ...state,
        project: payload.project,
      };
    case CREATE_TASK_REQUEST:
      return {
        ...state,
      };
    case CREATE_TASK_SUCCESS:
      return {
        ...state,
        project: payload.project,
      };
    case CREATE_TASK_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
};
