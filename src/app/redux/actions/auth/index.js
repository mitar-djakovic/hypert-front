import axios from 'axios';
import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR, SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_ERROR,
} from '../../constants';

// eslint-disable-next-line consistent-return
export const login = (email, password) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  try {
    const response = await axios.post('http://localhost:8000/api/auth/login', {
      email, password,
    });

    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        token: response.data.token,
        message: response.data.message,
        adminId: response.data.accountId,
        lastActiveProject: response.data.lastActiveProject?.name
          ? response.data.lastActiveProject : null,
      },
    });

    return response.data;
  } catch (error) {
    dispatch({ type: LOGIN_ERROR });
  }
};

export const signup = (
  firstName, lastName, email, password, repeatPassword,
) => async (dispatch) => {
  dispatch({ type: SIGNUP_REQUEST });
  try {
    const response = await axios.post('http://localhost:8000/api/auth/signup', {
      firstName,
      lastName,
      email,
      password,
      repeatPassword,
    });

    dispatch({
      type: SIGNUP_SUCCESS,
      payload: {
        message: response.data.message,
      },
    });
  } catch (error) {
    dispatch({ type: SIGNUP_ERROR });
  }
};
