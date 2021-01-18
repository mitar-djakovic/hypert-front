import React, { useState } from 'react';
import { css } from 'aphrodite';
import { AiOutlineDown } from 'react-icons/ai';
import { styles } from './style';
import { avatarImg } from '../../../../assets';

const TopNav = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  return (
    <div className={css(styles.topNav)}>
      <div>
        Project title
      </div>
      <div className={css(styles.avatarContainer)}>
        <img className={css(styles.avatar)} src={avatarImg} alt="" />
        <AiOutlineDown className={css(styles.arrow)} size={18} color="#FF426F" />
      </div>
    </div>
  );
};

export default TopNav;
