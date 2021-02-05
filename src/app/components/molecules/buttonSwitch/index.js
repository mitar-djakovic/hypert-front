import React from 'react';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import Button from '../../atoms/button';

const ButtonSwitch = () => {
  const lol = '';
  return (
    <Button
      fullWidth
      title="Add another task"
      size="medium"
      color="#2a60e4"
      backgroundColor="#e8ecf8"
      icon={<BsFillPlusCircleFill />}
    />
  );
};

export default ButtonSwitch;
