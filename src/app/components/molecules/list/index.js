import React, { useState } from 'react';
import { css } from 'aphrodite';
import Input from '../../atoms/input';
import { styles } from './style';

const List = ({ name, tasks = [] }) => {
  const [inputOpen, setInputOpen] = useState(false);
  const [taskName, setTaskName] = useState('');
  const handleChange = (e) => {
    setTaskName(e.target.value);
  };
  return (
    <div className={css(styles.list)}>
      <div>
        <h2 className={css(styles.name)}>{name}</h2>
      </div>
      <ul className={css(styles.tasks)}>
        {tasks.map((task) => (
          <li key={task.name}>{task.name}</li>
        ))}
      </ul>
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
