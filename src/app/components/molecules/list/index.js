import React, { useState } from 'react';
import { css } from 'aphrodite';
import Input from '../../atoms/input';
import Button from '../../atoms/button';
import { styles } from './style';

const List = ({ name, tasks }) => {
  const [taskName, setTaskName] = useState('');

  const handleChange = (e) => {
    setTaskName(e.target.value);
  };
  const handleClick = () => {
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
        <div className={css(styles.inputContainer)}>
          <Input
            variant="outline"
            onChange={handleChange}
            placeholder="Task name"
            value={taskName}
          />
        </div>
        <Button onClick={handleClick} fullWidth title="Add another task" size="medium" />
      </div>
    </div>
  );
};

export default List;
