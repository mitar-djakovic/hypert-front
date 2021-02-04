import React from 'react';
import { css } from 'aphrodite';
import { styles } from './style';

const Dots = () => (
  <div className={css(styles.delete)}>
    <div className={css(styles.dot)} />
    <div className={css(styles.dot)} />
    <div className={css(styles.dot)} />
  </div>
);

export default Dots;
