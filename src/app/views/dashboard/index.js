import React, { useState, useEffect } from 'react';
import { css } from 'aphrodite';
import { useSelector, useDispatch } from 'react-redux';
import { styles } from './style';
import Modal from '../../components/atoms/modal';
import ListForm from '../../components/organisms/listForm';
import { getLists } from '../../redux/actions/projects';

const Dashboard = () => {
  const dispatch = useDispatch();
  const [addListOpen, setAddListOpen] = useState(false);
  const lists = useSelector((state) => state.projects.lists);
  const adminId = useSelector((state) => state.auth.adminId);
  console.log('adminId', adminId);

  return (
    <div className={css(styles.view)}>
      {addListOpen && (
        <Modal closeOnClickAway={setAddListOpen}>
          <ListForm closeOnClickAway={setAddListOpen} />
        </Modal>
      )}
      <div className={css(styles.content)}>
        <div className={css(styles.listContainer)}>
          {lists.map((list) => (
            <div
              className={css(styles.addList)}
            >
              {list.name}
            </div>

          ))}
          <div
            role="presentation"
            onClick={() => setAddListOpen(!addListOpen)}
            className={css(styles.addList)}
          >
            Add list
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
