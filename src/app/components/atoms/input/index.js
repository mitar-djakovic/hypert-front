import React from 'react';
import { css } from 'aphrodite';
import { Input, styles } from './style';

export default ({
  placeholder, value, onChange, type, name, errorStatus,
}) => (
  <div className={css(styles.inputContainer)}>
    <Input
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      type={type}
      name={name}
      errorStatus={errorStatus}
    />
    <div className={css(styles.statusBar, errorStatus && styles.statusBarError)} />
  </div>
);
