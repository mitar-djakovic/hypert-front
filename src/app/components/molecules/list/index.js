import React, { useState } from 'react';
import { css } from 'aphrodite';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from './style';
import { createTask, getSingleProject, deleteList } from '../../../redux/actions/dashboard';
import ButtonSwitch from '../buttonSwitch';
import Dots from '../../atoms/dots';

const List = ({ name, listId, tasks }) => {
  const [taskName, setTaskName] = useState('');
  const dispatch = useDispatch();
  const project = useSelector((state) => state.dashboard.project);

  const handleChange = (e) => {
    setTaskName(e.target.value);
  };
  const handleClick = () => {
    dispatch(createTask(taskName, listId, project.projectId, project));
    dispatch(getSingleProject(project.projectId));
  };

  const handleListDelete = () => {
    dispatch(deleteList(listId, project.projectId, project));
  };
  return (
    <div className={css(styles.list)}>
      <div className={css(styles.listHeader)}>
        <div>
          <h2 className={css(styles.name)}>{name}</h2>
        </div>
        <Dots onClick={handleListDelete} />
      </div>
      <div className={css(styles.tasks)}>
        {(tasks || []).map((task) => (
          <div className={css(styles.task)} key={task.name}>
            <div>
              <p key={task.name}>{task.name}</p>
            </div>
            <div>
              <Dots />
            </div>
          </div>
        ))}
      </div>
      <div>
        <ButtonSwitch />
      </div>
    </div>
  );
};

export default List;
