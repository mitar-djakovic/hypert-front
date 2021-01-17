import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Projects from './views/projects';
import Home from './views/home';
import Calendar from './views/calendar';
import Chat from './views/chat';
import AppLayout from './layout/appLayout';
import AuthLayout from './layout/authLayout';
import Login from './views/login';

const routesConfig = (user) => {
  const adminRoutesConfig = [
    {
      path: '/',
      exact: true,
      component: () => <Redirect to="/app" />,
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
          component: () => <Redirect to="/app/home" />,
          key: 5,
        },
        {
          path: '/app/home',
          exact: true,
          component: () => <Home />,
          key: 6,
        },
        {
          exact: true,
          path: '/app/projects',
          component: () => <Projects />,
          key: 7,
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
  const user = 'Mitar';
  return renderRoutes(routesConfig(user));
}

export default Routes;
