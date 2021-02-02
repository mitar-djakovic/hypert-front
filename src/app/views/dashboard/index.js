import React, { useState, useEffect } from 'react';
import { css } from 'aphrodite';
import { useSelector, useDispatch } from 'react-redux';
import { styles } from './style';
import Modal from '../../components/atoms/modal';
import ListForm from '../../components/organisms/listForm';
import { getSingleProject, createList } from '../../redux/actions/projects';
import List from '../../components/molecules/list';
import Input from '../../components/atoms/input';
import Button from '../../components/atoms/button';

const Dashboard = () => {
  const dispatch = useDispatch();
  const [listName, setListName] = useState('');
  const [addListOpen, setAddListOpen] = useState(false);
  // const lists = useSelector((state) => state.projects.lists);
  // const adminId = useSelector((state) => state.auth.adminId);
  const project = useSelector((state) => state.projects.project);
  const projectId = useSelector((state) => state.auth.lastActiveProject?.projectId);
  const lists = useSelector((state) => state.projects.project?.lists);

  useEffect(() => {
    if (projectId) {
      dispatch(getSingleProject(projectId));
    }
  }, []);

  const handleChange = (e) => {
    setListName(e.target.value);
  };

  const handleClick = () => {
    dispatch(createList(listName, projectId, project));
  };
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
        <div>
          <div className={css(styles.inputContainer)}>
            <Input
              variant="outline"
              onChange={handleChange}
              placeholder="List name"
              value={listName}
            />
          </div>
          <Button onClick={handleClick} fullWidth title="Add another list" size="medium" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
