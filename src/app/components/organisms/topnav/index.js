import React, { useState } from 'react';
import { css } from 'aphrodite';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import { styles } from './style';
import { avatarImg } from '../../../../assets';

const TopNav = () => {
  const [dropDownOpen, setDropDownOpen] = useState(true);

  return (
    <div className={css(styles.topNav)}>
      <div className={css(styles.navItemsWrapper)}>
        <div>
          Project title
        </div>
        <div
          role="presentation"
          onClick={() => setDropDownOpen(!dropDownOpen)}
          className={css(styles.avatarContainer)}
        >
          <img className={css(styles.avatar)} src={avatarImg} alt="" />
          {dropDownOpen ? <AiOutlineUp className={css(styles.arrow)} size={18} color="#FF426F" />
            : <AiOutlineDown className={css(styles.arrow)} size={18} color="#FF426F" />}
        </div>
      </div>
      {dropDownOpen && (
        <div className={css(styles.menuContainer)}>
          <div className={css(styles.menuItem)}>Settings</div>
          <div className={css(styles.menuItem)}>Logout</div>
        </div>
      )}
    </div>
  );
};

export default TopNav;
