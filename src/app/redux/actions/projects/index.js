import axios from 'axios';
import {
  GET_PROJECTS_REQUEST,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_ERROR,
  SET_ACTIVE_PROJECT,
  CREATE_PROJECT_REQUEST,
  CREATE_PROJECT_SUCCESS,
  CREATE_PROJECT_ERROR,
  CREATE_PROJECT_LIST_REQUEST,
  CREATE_PROJECT_LIST_SUCCESS,
  CREATE_PROJECT_LIST_ERROR,
  GET_PROJECT_LISTS_REQUEST,
  GET_PROJECT_LISTS_SUCCESS,
  GET_PROJECT_LISTS_ERROR,
} from '../../constants';

export const getProjects = (adminId) => async (dispatch) => {
  dispatch({ type: GET_PROJECTS_REQUEST });

  try {
    const { data } = await axios.post('http://localhost:8000/api/dashboard/projects', {
      accountId: adminId,
    });

    dispatch({
      type: GET_PROJECTS_SUCCESS,
      payload: {
        projects: data.projects,
      },
    });
  } catch (error) {
    dispatch({ type: GET_PROJECTS_ERROR });
  }
};

export const setActiveProject = (activeProject, accountId) => async (dispatch) => {
  try {
    const { data } = await axios.patch('http://localhost:8000/api/dashboard/last-project', {
      accountId,
      projectId: activeProject.projectId,
    });

    dispatch({
      type: SET_ACTIVE_PROJECT,
      payload: { lastActiveProject: data.lastActiveProject },
    });
  } catch (error) {
    console.log('error', error.response);
  }
};

// eslint-disable-next-line consistent-return
export const createProject = (name, accountId, projects) => async (dispatch) => {
  dispatch({ type: CREATE_PROJECT_REQUEST });

  try {
    const { data } = await axios.post('http://localhost:8000/api/dashboard/project', {
      name,
      accountId,
    });

    dispatch({
      type: CREATE_PROJECT_SUCCESS,
      payload: {
        updatedProjects: [...projects, data.project],
      },
    });
  } catch (error) {
    dispatch({ type: CREATE_PROJECT_ERROR });
  }
};

export const createProjectList = (name, accountId, projectLists) => async (dispatch) => {
  dispatch({ type: CREATE_PROJECT_LIST_REQUEST });

  try {
    const response = await axios.post('http://localhost:8000/api/project-lists/project-list', {
      name,
      accountId,
    });

    dispatch({
      type: CREATE_PROJECT_LIST_SUCCESS,
      payload: {
        updatedProjectList: [...projectLists, response.data.projectList],
      },
    });
  } catch (error) {
    console.log('error', error.response);
    dispatch({ type: CREATE_PROJECT_LIST_ERROR });
  }
};

export const getLists = (accountId, projectId) => async (dispatch) => {
  dispatch({ type: GET_PROJECT_LISTS_REQUEST });

  try {
    const { data } = await axios.post('http://localhost:8000/api/dashboard/lists', {
      accountId,
      projectId,
    });

    console.log('data', data);
    // dispatch({
    //   type: GET_PROJECT_LISTS_SUCCESS,
    //   payload: {
    //     projectLists: [...projectLists, ...data.projectLists],
    //   },
    // });
  } catch (error) {
    dispatch({ type: GET_PROJECT_LISTS_ERROR });
  }
};
