import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { login, logout } from '../store/slices/authSlice';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

const Auth: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.token);

  const handleLogin = () => {
    const fakeToken = '123456'; // Replace with real authentication logic
    dispatch(login(fakeToken));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {token ? (
        <div>
          <Typography variant='body1'>Logged in with token: {token}</Typography>
          <Button variant="outlined" color="secondary" onClick={handleLogout}>Logout</Button>
        </div>
      ) : (
        <Button variant="contained" color="primary" onClick={handleLogin}>Login</Button>
      )}
    </div>
  );
};

export default Auth;
