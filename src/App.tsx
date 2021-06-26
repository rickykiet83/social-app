import './App.css';
import './styles/sb-admin-2.css';

import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { Login } from './pages/Account/Login';
import { PrivateRoute } from './components';
import React from 'react';

function App() {
  return (
    <div className='App' id='wrapper'>
      <Router>
        <Switch>
          <PrivateRoute>
            <Login />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
