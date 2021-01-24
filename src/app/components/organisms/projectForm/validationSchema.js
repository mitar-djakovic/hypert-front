import * as Yup from 'yup';

export const projectSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
});
