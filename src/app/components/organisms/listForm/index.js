import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import { css } from 'aphrodite';
import Input from '../../atoms/input';
import Button from '../../atoms/button';
import { listSchema } from './validationSchema';
import { styles } from './styles';
import { createProjectList } from '../../../redux/actions/projects';

const ListForm = ({ closeOnClickAway }) => {
  const dispatch = useDispatch();
  const adminId = useSelector((state) => state.auth.adminId);
  const projectLists = useSelector((state) => state.projects.projectLists);
  return (
    <Formik
      initialValues={{
        name: '',
      }}
      onSubmit={(values) => {
        dispatch(createProjectList(values.name, adminId, projectLists))
          .then(() => closeOnClickAway(false));
      }}
      validationSchema={listSchema}
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
            <Button title="Add project list" type="submit" />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ListForm;
