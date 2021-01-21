import axios from 'axios';
import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR, SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_ERROR,
} from '../../constants';

// eslint-disable-next-line consistent-return
export const logIn = (email, password) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  try {
    const response = await axios.post('http://localhost:8000/api/accounts/login', {
      email, password,
    });

    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        token: response.data.token,
        message: response.data.message,
        adminId: response.data.accountId,
      },
    });

    return response;
  } catch (error) {
    console.log('error', error.response);
    dispatch({ type: LOGIN_ERROR });
  }
};

export const signUp = (
  firstName, lastName, email, password, repeatPassword,
) => async (dispatch) => {
  dispatch({ type: SIGNUP_REQUEST });
  try {
    const response = await axios.post('http://localhost:8000/api/accounts/signup', {
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
    console.log('error', error.response);
    dispatch({ type: SIGNUP_ERROR });
  }
};
