import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';

import Layout from './views/layout';

const App = () => (
  <Router>
    <Switch>
      <Layout />
    </Switch>
  </Router>
);

export default App;
