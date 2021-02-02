import axios from 'axios';
import {
  GET_PROJECTS_REQUEST,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_ERROR,
  SET_ACTIVE_PROJECT,
  CREATE_PROJECT_REQUEST,
  CREATE_PROJECT_SUCCESS,
  CREATE_PROJECT_ERROR,
  GET_SINGLE_PROJECT_REQUEST,
  GET_SINGLE_PROJECT_SUCCESS,
  GET_SINGLE_PROJECT_ERROR,
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

export const getSingleProject = (projectId) => async (dispatch) => {
  dispatch({ type: GET_SINGLE_PROJECT_REQUEST });
  try {
    const { data } = await axios.post('http://localhost:8000/api/dashboard/single-project', {
      projectId,
    });

    dispatch({
      type: GET_SINGLE_PROJECT_SUCCESS,
      payload: {
        project: data.project,
      },
    });
  } catch (error) {
    dispatch({ type: GET_SINGLE_PROJECT_ERROR });
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
