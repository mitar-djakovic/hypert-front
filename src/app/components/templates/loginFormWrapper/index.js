import React from 'react';
import { css } from 'aphrodite';
import LoginForm from '../../organisms/loginForm';
import { styles } from './style';

const LoginFormWrapper = () => (
  <div>
    <h1 className={css(styles.title)}>Log In</h1>
    <LoginForm />
  </div>
);

export default LoginFormWrapper;
