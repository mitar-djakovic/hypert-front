import React, { useState, useEffect } from 'react';
import { css } from 'aphrodite';
import { useSelector, useDispatch } from 'react-redux';
import { styles } from './style';
import Modal from '../../components/atoms/modal';
import ListForm from '../../components/organisms/listForm';
import { getSingleProject } from '../../redux/actions/projects';
import List from '../../components/molecules/list';

const Dashboard = () => {
  const dispatch = useDispatch();
  const [addListOpen, setAddListOpen] = useState(false);
  // const lists = useSelector((state) => state.projects.lists);
  // const adminId = useSelector((state) => state.auth.adminId);
  const projectId = useSelector((state) => state.auth.lastActiveProject?.projectId);
  const lists = useSelector((state) => state.projects.project?.lists);

  useEffect(() => {
    if (projectId) {
      dispatch(getSingleProject(projectId));
    }
  }, []);
  return (
    <div className={css(styles.view)}>
      {addListOpen && (
        <Modal closeOnClickAway={setAddListOpen}>
          <ListForm closeOnClickAway={setAddListOpen} />
        </Modal>
      )}
      <div className={css(styles.lists)}>
        {(lists || []).map((list) => (
          <List key={list.listId} name={list.name} tasks={list.tasks} />
        ))}
        <button className="add-list-btn btn">Add a list</button>
      </div>
    </div>
  );
};

export default Dashboard;
