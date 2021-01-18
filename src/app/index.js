import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import Routes from './routes';
import { store } from './redux/store';

const App = () => {
  const history = createBrowserHistory();

  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  );
};

export default App;
