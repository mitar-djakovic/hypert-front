import React from 'react';
import { css } from 'aphrodite';
import {
  Formik, Form,
} from 'formik';
import Button from '../../atoms/button';
import Input from '../../atoms/input';
import { signupSchema } from './validationSchema';
import { styles } from './style';

const LoginForm = () => (
  <Formik
    initialValues={{
      email: '',
      password: '',
    }}
    onSubmit={(values) => {
      console.log('values ===>', values);
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
          <Button title="Log in" type="submit" />
        </div>
      </Form>
    )}
  </Formik>
);

export default LoginForm;
