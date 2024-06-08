import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { login, logout } from '../store/slices/authSlice';

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
          <p>Logged in with token: {token}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default Auth;
