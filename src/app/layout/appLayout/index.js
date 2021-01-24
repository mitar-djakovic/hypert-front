import React, { useEffect, useState } from 'react';
import { css } from 'aphrodite';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import SideNav from '../../components/molecules/sidenav';
import TopNav from '../../components/molecules/topnav';
import { styles } from './style';
import { getProjects } from '../../redux/actions/projects';
import ProjectForm from '../../components/organisms/projectForm';

const AppLayout = ({ children }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const adminId = useSelector((state) => state.auth.adminId);
  const [addModalOpen, setAddModalOpen] = useState(false);

  useEffect(() => {
    if (adminId) {
      history.push('/app/projects');
      dispatch(getProjects(adminId));
    } else {
      history.push('/login');
    }
  }, [adminId]);
  return (
    <div style={{ position: 'relative' }}>
      <TopNav setAddModalOpen={() => setAddModalOpen(!addModalOpen)} />
      <div style={{ display: 'flex' }}>
        <SideNav />
        <div className={css(styles.view)}>
          <div className={css(styles.content)}>
            {children}
          </div>
        </div>
      </div>
      {addModalOpen && (
        <div
          role="presentation"
          className={css(styles.addModal)}
        >
          <ProjectForm setAddModalOpen={() => setAddModalOpen(false)} />
        </div>
      )}
    </div>
  );
};

export default AppLayout;
