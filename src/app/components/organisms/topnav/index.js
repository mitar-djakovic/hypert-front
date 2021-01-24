import React, { useState } from 'react';
import { css } from 'aphrodite';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import { styles } from './style';
import { avatarImg } from '../../../../assets';

const TopNav = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const lastActiveProject = useSelector((state) => state.auth.lastActiveProject);
  return (
    <div className={css(styles.topNav)}>
      <div className={css(styles.navItemsWrapper)}>
        <div>
          {lastActiveProject?.name ? lastActiveProject.name : ''}
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
          <Link className={css(styles.anchor)} to="/settings"><div className={css(styles.menuItem, styles.firstMenuItem)}>Settings</div></Link>
          <div className={css(styles.menuItem, styles.lastMenuItem)}>Logout</div>
        </div>
      )}
    </div>
  );
};

export default TopNav;
