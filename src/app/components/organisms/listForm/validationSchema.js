import * as Yup from 'yup';

export const listSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
});
