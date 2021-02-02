import React, { useState, useEffect } from 'react';
import { css } from 'aphrodite';
import { useDispatch } from 'react-redux';
import Input from '../../atoms/input';
import { styles } from './style';
// import { getTasks } from '../../../redux/actions/projects';

const List = ({ name, listId, tasks }) => {
  const [inputOpen, setInputOpen] = useState(false);
  const [taskName, setTaskName] = useState('');
  // const [tasks, setTasks] = useState(tasks || []);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setTaskName(e.target.value);
  };

  return (
    <div className={css(styles.list)}>
      <div>
        <h2 className={css(styles.name)}>{name}</h2>
      </div>
      <div className={css(styles.tasks)}>
        {tasks.map((task) => (
          <div className={css(styles.task)} key={task.name}>
            <p key={task.name}>{task.name}</p>
          </div>
        ))}
      </div>
      <div>
        {inputOpen ? <Input value={taskName} onChange={handleChange} /> : (
          <h2 onClick={() => setInputOpen(!inputOpen)} role="presentation" className={css(styles.addTask)}>
            Add card
          </h2>
        )}
      </div>
    </div>
  );
};

export default List;
