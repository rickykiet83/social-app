import { Route, RouteProps } from 'react-router-dom';

import { Admin } from '../pages/Admin';
import { Login } from '../pages/Account';
import React from 'react';

export const PrivateRoute = ({
  children,
  ...rest
}: RouteProps): JSX.Element => {
  return (
    <Route {...rest} render={() => (false ? children : <Admin />)}></Route>
  );
};
