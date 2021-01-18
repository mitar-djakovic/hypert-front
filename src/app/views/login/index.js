import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { css } from 'aphrodite';
import { styles } from './style';
import SignupFormWrapper from '../../components/templates/signupFormWrapper';
import LoginFormWrapper from '../../components/templates/loginFormWrapper';
import { loginImg } from '../../../assets';

const Login = () => {
  const [loginFormActive, setLoginFormActive] = useState(false);
  const history = useHistory();
  const token = useSelector((state) => state.auth.token);
  console.log('token', token);
  useEffect(() => {
    if (token) {
      history.push('/app/home');
    } else {
      history.push('/login');
    }
  }, [token]);

  return (
    <div className={css(styles.container)}>
      <p
        className={css(styles.changeForm)}
        onClick={() => setLoginFormActive(!loginFormActive)}
        role="presentation"
      >
        {loginFormActive ? 'Sign Up' : 'Log In'}
      </p>
      <div className={css(styles.block, styles.leftBlock)}>
        {loginFormActive ? <LoginFormWrapper /> : <SignupFormWrapper />}
      </div>
      <div className={css(styles.block, styles.rightBlock)}>
        <div className={css(styles.circle, styles.firstYellowCircle)} />
        <div className={css(styles.circle, styles.secondYellowCircle)} />
        <div className={css(styles.circle, styles.thirdYellowCircle)} />
        <div className={css(styles.circle, styles.fourthYellowCircle)} />
        <div className={css(styles.circle, styles.firstGreenCircle)} />
        <div className={css(styles.circle, styles.secondGreenCircle)} />
        <div className={css(styles.circle, styles.thirdGreenCircle)} />
        <div className={css(styles.circle, styles.fourthGreenCircle)} />
        <div className={css(styles.circle, styles.firstPinkCircle)} />
        <div className={css(styles.circle, styles.secondPinkCircle)} />
        <img className={css(styles.image)} src={loginImg} alt="" />
      </div>
    </div>
  );
};

export default Login;
