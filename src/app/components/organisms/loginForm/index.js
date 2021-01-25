import React from 'react';
import { css } from 'aphrodite';
import {
  Formik, Form,
} from 'formik';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../atoms/button';
import Input from '../../atoms/input';
import { signupSchema } from './validationSchema';
import { styles } from './style';
import { logIn } from '../../../redux/actions/auth';

const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const loading = useSelector((state) => state.auth.loading);
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(values) => {
        dispatch(logIn(values.email, values.password)).then(() => history.push('/app/dashboard'));
      }}
      validationSchema={signupSchema}
    >
      {({
        values, handleSubmit, handleChange, errors,
      }) => (
        <Form onSubmit={handleSubmit}>
          <div className={css(styles.inputContainer)}>
            <Input
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              type="email"
              name="email"
              errorStatus={errors.email ? true : null}
            />
            {errors.email && (
            <p className={css(styles.errorMessage)}>
              {errors.email}
            </p>
            )}
          </div>
          <div className={css(styles.inputContainer)}>
            <Input
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              type="password"
              name="password"
              errorStatus={errors.password ? true : null}
            />
            {errors.password && (
            <p className={css(styles.errorMessage)}>
              {errors.password}
            </p>
            )}
          </div>
          <div className={css(styles.buttonContainer)}>
            <Button title="Log in" type="submit" loading={loading} size="big" />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
