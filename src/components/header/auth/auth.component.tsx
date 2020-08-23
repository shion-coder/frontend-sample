import React, { FC } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { RootStateProps } from 'store';
import NewPost from 'components/new-post/new-post-button';

import { Profile } from './auth.styles';

/* -------------------------------------------------------------------------- */

const Auth: FC = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const username = useSelector((state: RootStateProps) => state.auth.user.username);

  const goProfile = () => history.push(`/${username}`);

  return (
    <Box>
      <NewPost />

      <Profile color={pathname === `/${username}` ? 'secondary' : 'primary'} size="small" onClick={goProfile}>
        <AccountCircleIcon />
      </Profile>
    </Box>
  );
};

export default Auth;
