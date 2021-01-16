import React from 'react';
import { css } from 'aphrodite';

import SideNav from '../../components/organisms/sidenav';
import TopNav from '../../components/organisms/topnav';
import { styles } from './style';

const AppLayout = ({ children }) => (
  <div>
    <TopNav />
    <div style={{ display: 'flex' }}>
      <SideNav />
      <div className={css(styles.view)}>
        {children}
      </div>
    </div>
  </div>
);

export default AppLayout;
