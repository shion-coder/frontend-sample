import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Form } from 'formik';
import { Container, Avatar, Typography } from '@material-ui/core';

import Button from 'components/common/formik-button';

/* -------------------------------------------------------------------------- */

export const StyledContainer = styled(Container).attrs(() => ({
  component: 'main',
  maxWidth: 'xs',
}))`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledTypography = styled(Typography).attrs(() => ({
  component: 'h1',
  variant: 'h5',
}))`
  letter-spacing: 2px;
`;

export const StyledAvatar = styled(Avatar)`
  margin: ${({ theme }) => theme.material.spacing(2) + 'px'};
  background-color: ${({ theme }) => theme.material.palette.primary.main};
  width: ${({ theme }) => theme.material.spacing(6) + 'px'};
  height: ${({ theme }) => theme.material.spacing(6) + 'px'};
`;

export const StyledForm = styled(Form)`
  width: '100%';
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

export const StyledButton = styled(Button)`
  margin: ${({ theme }) => theme.material.spacing(2, 0, 2)};
  padding: ${({ theme }) => theme.material.spacing(1) + 'px'};
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.material.palette.primary.main};

  :hover {
    text-decoration: underline;
  }
`;
