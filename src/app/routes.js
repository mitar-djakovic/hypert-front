import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Dashboard from './views/dashboard';
import Home from './views/home';
import Calendar from './views/calendar';
import Chat from './views/chat';
import AppLayout from './layout/appLayout';
import AuthLayout from './layout/authLayout';
import SettingsLayout from './layout/settingsLayout';
import Login from './views/login';

const routesConfig = (token) => {
  const adminRoutesConfig = [
    {
      path: '/',
      exact: true,
      component: () => (token ? <Redirect to="/app" /> : <Redirect to="/login" />),
      key: 1,
    },
    {
      path: '/login',
      layout: AuthLayout,
      key: 2,
      routes: [
        {
          path: '/login',
          exact: true,
          component: () => <Login />,
          key: 3,
        },
      ],
    },
    {
      path: '/app',
      layout: AppLayout,
      key: 4,
      routes: [
        {
          path: '/app',
          exact: true,
          component: () => <Redirect to="/app/dashboard" />,
          key: 5,
        },
        {
          exact: true,
          path: '/app/dashboard',
          component: () => <Dashboard />,
          key: 7,
        },
        {
          path: '/app/home',
          exact: true,
          component: () => <Home />,
          key: 6,
        },
        {
          exact: true,
          path: '/app/chat',
          component: () => <Chat />,
          key: 8,
        },
        {
          exact: true,
          path: '/app/calendar',
          component: () => <Calendar />,
          key: 9,
        },
      ],
    },
    {
      path: '/settings',
      layout: SettingsLayout,
      key: 10,
      routes: [
        {
          path: '/settings/',
          exact: true,
          component: () => <Redirect to="/settings/profile" />,
          key: 11,
        },
        {
          path: '/settings/profile',
          exact: true,
          component: () => <div>Settings</div>,
          key: 12,
        },
      ],
    },
  ];

  return adminRoutesConfig;
};

const renderRoutes = (routes) => (routes ? (
  <Switch>
    {routes.map((route) => {
      const Layout = route.layout || React.Fragment;
      const Component = route.component;

      return (
        <Route
          key={route.key}
          path={route.path}
          exact={route.exact}
          render={(props) => (
            <Layout>
              {route.routes ? (
                renderRoutes(route.routes)
              ) : (
                <Component {...props} />
              )}
            </Layout>
          )}
        />
      );
    })}
  </Switch>
) : null);

function Routes() {
  const token = useSelector((state) => state.auth.token);
  return renderRoutes(routesConfig(token));
}

export default Routes;
