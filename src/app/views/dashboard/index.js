import React, { useState, useEffect } from 'react';
import { css } from 'aphrodite';
import { useSelector, useDispatch } from 'react-redux';
import { styles } from './style';
import Modal from '../../components/atoms/modal';
import ListForm from '../../components/organisms/listForm';
import { getLists } from '../../redux/actions/projects';
import './style.css';

const Dashboard = () => {
  const dispatch = useDispatch();
  const [addListOpen, setAddListOpen] = useState(false);
  const lists = useSelector((state) => state.projects.lists);
  const adminId = useSelector((state) => state.auth.adminId);
  const projectId = useSelector((state) => state.auth.lastActiveProject.projectId);

  useEffect(() => {
    dispatch(getLists(adminId, projectId));
  }, [adminId]);
  return (
    <div className={css(styles.view)}>
      {addListOpen && (
        <Modal closeOnClickAway={setAddListOpen}>
          <ListForm closeOnClickAway={setAddListOpen} />
        </Modal>
      )}
      <div className={css(styles.lists)}>
        {lists.map((list) => (
          <div className={css(styles.list)}>
            <h3 className="list-title">{list.name}</h3>
          </div>
        ))}
        <button className="add-list-btn btn">Add a list</button>
      </div>
    </div>
  );
};

export default Dashboard;
