import * as Yup from 'yup';

/* -------------------------------------------------------------------------- */

export const validateUpdateProfile = Yup.object({
  firstName: Yup.string().max(30, 'First Name must be less than 30 characters').required('First Name is required'),
  lastName: Yup.string().max(30, 'Last Name must be less than 30 characters'),
  username: Yup.string().max(30, 'Username must be less than 30 characters').required('Username is required'),
  website: Yup.string().matches(
    /^((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    'Invalid URL',
  ),
  email: Yup.string().email('Invalid email format').required('Email is required'),
});