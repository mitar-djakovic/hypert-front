import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { css } from 'aphrodite';
import { routes } from '../../routes';

import SideNav from '../../components/organisms/sidenav';
import TopNav from '../../components/organisms/topnav';
import { styles } from './style';

const Layout = () => (
  <div>
    <TopNav />
    <div style={{ display: 'flex' }}>
      <SideNav />
      <div className={css(styles.view)}>
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
