import React, { useState, useEffect } from 'react';
import { css } from 'aphrodite';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../../atoms/input';
import Button from '../../atoms/button';
import { styles } from './style';
import { createTask, getSingleProject } from '../../../redux/actions/projects';

const List = ({ name, listId, tasks }) => {
  const [taskName, setTaskName] = useState('');
  const dispatch = useDispatch();
  const project = useSelector((state) => state.projects.project);

  const handleChange = (e) => {
    setTaskName(e.target.value);
  };
  const handleClick = () => {
    dispatch(createTask(taskName, listId, project.projectId, project));
    dispatch(getSingleProject(project.projectId));
  };

  return (
    <div className={css(styles.list)}>
      <div>
        <h2 className={css(styles.name)}>{name}</h2>
      </div>
      <div className={css(styles.tasks)}>
        {(tasks || []).map((task) => (
          <div className={css(styles.task)} key={task.name}>
            <p key={task.name}>{task.name}</p>
          </div>
        ))}
      </div>
      <div>
        <div className={css(styles.inputContainer)}>
          <Input
            variant="outline"
            onChange={handleChange}
            placeholder="Task name"
            value={taskName}
          />
        </div>
        <Button
          onClick={handleClick}
          fullWidth
          title="Add another task"
          size="medium"
        />
      </div>
    </div>
  );
};

export default List;
