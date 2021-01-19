import React, { useEffect } from 'react';
import { css } from 'aphrodite';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import SideNav from '../../components/organisms/sidenav';
import TopNav from '../../components/organisms/topnav';
import { styles } from './style';

const AppLayout = ({ children }) => {
  const history = useHistory();
  const token = useSelector((state) => state.auth.token);
  useEffect(() => {
    if (token) {
      history.push('/app/home');
    } else {
      history.push('/login');
    }
  }, [token]);
  return (
    <div>
      <TopNav />
      <div style={{ display: 'flex' }}>
        <SideNav />
        <div className={css(styles.view)}>
          <div className={css(styles.content)}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
