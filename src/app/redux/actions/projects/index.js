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
      adminId,
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

export const setActiveProject = (activeProject) => (dispatch) => {
  dispatch({ type: SET_ACTIVE_PROJECT, payload: { activeProject } });
};
