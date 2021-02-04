import React, { useState } from 'react';
import { css } from 'aphrodite';
import { styles } from './style';

const Dots = ({ onClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className={css(styles.popUpMenu)}
      onClick={() => setMenuOpen(!menuOpen)}
      role="presentation"
    >
      <div className={css(styles.delete)}>
        <div className={css(styles.dot)} />
        <div className={css(styles.dot)} />
        <div className={css(styles.dot)} />
      </div>
      {menuOpen && (
        <div
          onClick={onClick}
          role="presentation"
          className={css(styles.menu)}
        >
          <p>Delete</p>
        </div>
      )}
    </div>
  );
};

export default Dots;
