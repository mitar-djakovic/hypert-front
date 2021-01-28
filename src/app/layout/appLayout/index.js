import React, { useEffect, useState } from 'react';
import { css } from 'aphrodite';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import SideNav from '../../components/molecules/sidenav';
import TopNav from '../../components/molecules/topnav';
import { styles } from './style';
import { getProjects, getProjectLists } from '../../redux/actions/projects';
import ProjectForm from '../../components/organisms/projectForm';
import Modal from '../../components/atoms/modal';

const AppLayout = ({ children }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const adminId = useSelector((state) => state.auth.adminId);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const projectLists = useSelector((state) => state.projects.projectLists);

  useEffect(() => {
    if (adminId) {
      dispatch(getProjects(adminId));
    } else {
      history.push('/login');
    }
  }, [adminId]);

  return (
    <div style={{ position: 'relative' }}>
      <TopNav setAddModalOpen={() => setAddModalOpen(!addModalOpen)} />
      <div style={{ display: 'flex' }}>
        <SideNav setAddModalOpen={setAddModalOpen} />
        <div className={css(styles.view)}>
          <div className={css(styles.content)}>
            {children}
          </div>
        </div>
      </div>
      {addModalOpen && (
        <Modal closeOnClickAway={setAddModalOpen}>
          <ProjectForm setAddModalOpen={() => setAddModalOpen(false)} />
        </Modal>
      )}
    </div>
  );
};

export default AppLayout;
