import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import App from './containers/App';
import NotFound from './containers/NotFound';

const Routes = props => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <App />} />
        <Route path="*" render={() => <NotFound />} />
      </Switch>
    </Router>
  );
};

export default Routes;
