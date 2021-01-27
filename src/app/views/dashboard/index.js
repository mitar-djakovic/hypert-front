import React, { useState } from 'react';
import { css } from 'aphrodite';
import { useSelector } from 'react-redux';
import { styles } from './style';
import Modal from '../../components/atoms/modal';
import ListForm from '../../components/organisms/listForm';

const Dashboard = () => {
  const [addListOpen, setAddListOpen] = useState(false);
  const projectLists = useSelector((state) => state.projects.projectLists);

  return (
    <div className={css(styles.view)}>
      {addListOpen && (
        <Modal closeOnClickAway={setAddListOpen}>
          <ListForm closeOnClickAway={setAddListOpen} />
        </Modal>
      )}
      <div className={css(styles.content)}>
        <div className={css(styles.listContainer)}>
          {projectLists.map((list) => (
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
