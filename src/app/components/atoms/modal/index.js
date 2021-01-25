import React from 'react';
import { css } from 'aphrodite';
import { AiFillCloseCircle } from 'react-icons/ai';
import { styles } from './style';

const Modal = ({ children, closeOnClickAway }) => (
  <div className={css(styles.container)}>
    <AiFillCloseCircle
      size={28}
      className={css(styles.close)}
      onClick={() => closeOnClickAway(false)}
    />
    <div className={css(styles.formWrapper)}>
      {children}
    </div>
  </div>
);

export default Modal;
