import React from 'react';
import { css } from 'aphrodite';
import {
  Formik, Form,
} from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from './style';
import Button from '../../atoms/button';
import Input from '../../atoms/input';
import { projectSchema } from './validationSchema';
import { createProject } from '../../../redux/actions/dashboard';

const ProjectForm = ({ setAddModalOpen }) => {
  const dispatch = useDispatch();
  const adminId = useSelector((state) => state.auth.adminId);
  const projects = useSelector((state) => state.projects.projects);
  return (
    <Formik
      initialValues={{
        name: '',
      }}
      onSubmit={(values) => {
        dispatch(createProject(values.name, adminId, projects)).then(() => setAddModalOpen());
      }}
      validationSchema={projectSchema}
    >
      {({
        values, handleSubmit, handleChange, errors,
      }) => (
        <Form onSubmit={handleSubmit}>
          <div className={css(styles.inputContainer)}>
            <Input
              placeholder="Name"
              value={values.name}
              onChange={handleChange}
              type="text"
              name="name"
              errorStatus={errors.name ? true : null}
            />
            {errors.name && (
              <p className={css(styles.errorMessage)}>
                {errors.name}
              </p>
            )}
          </div>
          <div className={css(styles.buttonContainer)}>
            <Button title="Create Project" type="submit" />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ProjectForm;
