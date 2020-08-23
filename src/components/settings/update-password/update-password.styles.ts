import styled from 'styled-components';
import { Form } from 'formik';

import Button from 'components/common/formik-button';
import Field from 'components/common/formik-field';

/* -------------------------------------------------------------------------- */

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
`;

export const StyledForm = styled(Form)`
  margin-top: ${({ theme }) => theme.material.spacing(1) + 'px'};

  .MuiButton-label {
    text-transform: capitalize;
  }

  .MuiFormLabel-root {
    font-size: 0.8rem;
    letter-spacing: 1px;
    top: 2px;
  }
`;

export const HiddenField = styled(Field)`
  display: none;
`;

export const StyledButton = styled(Button)`
  margin: ${({ theme }) => theme.material.spacing(2, 0, 2)};
`;

export const Text = styled.p`
  text-align: center;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.material.palette.primary.main};
`;