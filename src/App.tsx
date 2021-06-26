import './App.css';
import './styles/sb-admin-2.css';

import { AccountRoute, PrivateRoute } from './components';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { Admin } from './pages/Admin';
import { Login } from './pages/Account/Login';
import React from 'react';

function App() {
  return (
    <div className='App' id='wrapper'>
      <Router>
        <Switch>
          <AccountRoute>
            <Login />
          </AccountRoute>
          <PrivateRoute>
            <Admin />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
