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
  CREATE_PROJECT_LIST_REQUEST,
  CREATE_PROJECT_LIST_SUCCESS,
  CREATE_PROJECT_LIST_ERROR,
  CREATE_TASK_REQUEST,
  CREATE_TASK_SUCCESS,
  CREATE_TASK_ERROR,
  DELETE_LIST_REQUEST,
  DELETE_LIST_SUCCESS,
  DELETE_LIST_ERROR,
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

export const createList = (name, projectId, project) => async (dispatch) => {
  dispatch({ type: CREATE_PROJECT_LIST_REQUEST });
  try {
    const { data } = await axios.post('http://localhost:8000/api/dashboard/list', {
      name,
      projectId,
    });

    const newProject = project;
    newProject.lists = [...newProject.lists, data.list];

    dispatch({
      type: CREATE_PROJECT_LIST_SUCCESS,
      payload: {
        project: newProject,
      },
    });
  } catch (error) {
    dispatch({ type: CREATE_PROJECT_LIST_ERROR });
  }
};

export const createTask = (name, listId, projectId, project) => async (dispatch) => {
  dispatch({ type: CREATE_TASK_REQUEST });
  try {
    const { data } = await axios.post('http://localhost:8000/api/dashboard/task', {
      name,
      listId,
      projectId,
    });

    const newProject = project;

    newProject.lists.map((list) => {
      if (list.listId === listId) {
        const newTasks = list.tasks;
        return newTasks.push(data.task);
      }
      return list;
    });

    dispatch({
      type: CREATE_TASK_SUCCESS,
      payload: {
        project: newProject,
      },
    });
  } catch (error) {
    dispatch({ type: CREATE_TASK_ERROR });
  }
};

export const deleteList = (listId, projectId, project) => async (dispatch) => {
  dispatch({ type: DELETE_LIST_REQUEST });

  try {
    const { data } = await axios.post('http://localhost:8000/api/dashboard/delete-list', {
      projectId,
      listId,
    });

    const newProject = project;
    newProject.lists = data.lists;
    dispatch({
      type: DELETE_LIST_SUCCESS,
      payload: {
        project: newProject,
      },
    });
  } catch (error) {
    dispatch({ type: DELETE_LIST_ERROR });
  }
};
