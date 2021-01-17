import * as Yup from 'yup';

export const signupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(3, 'Too Short!').max(20).required('Required'),
  repeatPassword: Yup.string().min(3, 'Too Short').max(20).required('Required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});
