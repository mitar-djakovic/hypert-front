import React, { useEffect } from 'react';
import { css } from 'aphrodite';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import SideNav from '../../components/organisms/sidenav';
import TopNav from '../../components/organisms/topnav';
import { styles } from './style';
import { getProjects } from '../../redux/actions/projects';

const AppLayout = ({ children }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const adminId = useSelector((state) => state.auth.adminId);

  useEffect(() => {
    if (adminId) {
      history.push('/app/projects');
      dispatch(getProjects(adminId));
    } else {
      history.push('/login');
    }
  }, [adminId]);
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
