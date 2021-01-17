import React from 'react';
import { css } from 'aphrodite';
import SignupForm from '../../organisms/signupForm';
import { styles } from './style';

const SignupFormWrapper = () => (
  <div>
    <h1 className={css(styles.title)}>Sign Up</h1>
    <SignupForm />
  </div>
);

export default SignupFormWrapper;
