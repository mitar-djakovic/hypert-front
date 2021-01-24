import axios from 'axios';
import {
  GET_PROJECTS_REQUEST,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_ERROR,
  SET_ACTIVE_PROJECT,
} from '../../constants';

export const getProjects = (adminId) => async (dispatch) => {
  dispatch({ type: GET_PROJECTS_REQUEST });

  try {
    const response = await axios.post('http://localhost:8000/api/projects/projects', {
      accountId: adminId,
    });

    dispatch({
      type: GET_PROJECTS_SUCCESS,
      payload: {
        projects: response.data.projects,
      },
    });
  } catch (error) {
    console.log('error', error.response);
    dispatch({ type: GET_PROJECTS_ERROR });
  }
};

export const setActiveProject = (activeProject, adminId) => async (dispatch) => {
  try {
    const response = await axios.patch('http://localhost:8000/api/projects/set-last-project', {
      accountId: adminId,
      projectId: activeProject.projectId,
    });

    dispatch({
      type: SET_ACTIVE_PROJECT,
      payload: { lastActiveProject: response.data.lastActiveProject },
    });
  } catch (error) {
    console.log('error', error.response);
  }
};
