import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import PropTypes from 'prop-types';
import React from 'react';

export const Root = ({ store }: any) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact component={App}></Route>
      </Switch>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};
