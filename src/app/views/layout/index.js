import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { routes } from '../../routes';

const Layout = () => (
  <div>
    <div style={{ display: 'flex' }}>
      <div
        style={{
          padding: '10px',
          width: '40%',
          background: 'pink',
        }}
      >
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/chat">Chat</Link>
          </li>
          <li>
            <Link to="/calendar">Calendar</Link>
          </li>
        </ul>
      </div>
      <div style={{ flex: 1, padding: '10px', backgroundColor: 'red' }}>
        <Switch>
          {routes.map((route, index) => (
            <Route
              path={route.path}
              exact={route.exact}
            >
              {route.main}
            </Route>
          ))}
        </Switch>
      </div>
    </div>
  </div>
);

export default Layout;
