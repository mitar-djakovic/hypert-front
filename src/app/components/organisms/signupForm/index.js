import React from 'react';
import { css } from 'aphrodite';
import {
  Formik, Form,
} from 'formik';
import { useDispatch } from 'react-redux';
import Button from '../../atoms/button';
import Input from '../../atoms/input';
import { signupSchema } from './validationSchema';
import { styles } from './style';
import { signUp } from '../../../redux/actions/auth';

const SignupForm = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        repeatPassword: '',
      }}
      onSubmit={(values) => {
        dispatch(signUp(
          values.firstName,
          values.lastName,
          values.email,
          values.password,
          values.repeatPassword,
        ));
      }}
      validationSchema={signupSchema}
    >
      {({
        values, handleSubmit, handleChange, errors,
      }) => (
        <Form onSubmit={handleSubmit}>
          <div className={css(styles.inputContainer)}>
            <Input
              placeholder="First name"
              value={values.firstName}
              onChange={handleChange}
              type="text"
              name="firstName"
              errorStatus={errors.firstName ? true : null}
            />
            {errors.firstName && (
            <p className={css(styles.errorMessage)}>
              {errors.firstName}
            </p>
            )}
          </div>
          <div className={css(styles.inputContainer)}>
            <Input
              placeholder="Last name"
              value={values.lastName}
              onChange={handleChange}
              type="text"
              name="lastName"
              errorStatus={errors.lastName ? true : null}
            />
            {errors.lastName && (
            <p className={css(styles.errorMessage)}>
              {errors.lastName}
            </p>
            )}
          </div>
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
          <div className={css(styles.inputContainer)}>
            <Input
              placeholder="Repeat password"
              value={values.repeatPassword}
              onChange={handleChange}
              type="password"
              name="repeatPassword"
              errorStatus={errors.repeatPassword ? true : null}
            />
            {errors.repeatPassword && (
            <p className={css(styles.errorMessage)}>
              {errors.repeatPassword}
            </p>
            )}
          </div>
          <div className={css(styles.buttonContainer)}>
            <Button title="Sign up" type="submit" />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
