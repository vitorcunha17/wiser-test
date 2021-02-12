import React from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import Login from './pages/Login';

export interface IRoutesProps {
  history: any;
}

const Routes: React.FC<IRoutesProps> = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <Route path="/" component={Login} exact />
    </ConnectedRouter>
  );
};

export default Routes;
