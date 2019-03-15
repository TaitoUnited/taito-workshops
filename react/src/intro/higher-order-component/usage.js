import React from 'react';
import withAuthRedirect from './index';

const login = () => {
  localStorage.setItem('app@is-authenticated', 'true');
};

const logout = () => {
  localStorage.removeItem('app@is-authenticated');
};

const Usage = () => (
  <div>
    <button onClick={login}>Login</button>
    <button onClick={logout}>Logout</button>
  </div>
);

export default withAuthRedirect(Usage);
