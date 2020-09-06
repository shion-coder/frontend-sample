import React, { FC } from 'react';
import { Formik, FormikHelpers } from 'formik';

import { UpdatePasswordProps } from 'types';
import { useUpdatePassword } from 'hooks';
import { validateUpdatePassword } from 'utils';
import Field from 'components/common/formik-field';

import {
  StyledContainer as Container,
  StyledForm as Form,
  HiddenField,
  StyledButton as Button,
} from './update-password.styles';

/* -------------------------------------------------------------------------- */

const UpdatePassword: FC = () => {
  const { updatePassword } = useUpdatePassword();

  const handleSubmit = async (values: UpdatePasswordProps, formik: FormikHelpers<UpdatePasswordProps>) =>
    updatePassword({ values, formik });

  const initialValues: UpdatePasswordProps = {
    password: '',
    newPassword: '',
    confirmNewPassword: '',
  };

  return (
    <Container>
      <Formik initialValues={initialValues} validationSchema={validateUpdatePassword} onSubmit={handleSubmit}>
        <Form noValidate>
          <HiddenField name="hidden" />

          <Field name="password" type="password" fullWidth required />

          <Field name="newPassword" type="password" fullWidth required />

          <Field name="confirmNewPassword" type="password" fullWidth required />

          <Button type="submit" fullWidth>
            Update Password
          </Button>
        </Form>
      </Formik>
    </Container>
  );
};

export default UpdatePassword;
