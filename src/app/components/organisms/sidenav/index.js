import React from 'react';
import { Link } from 'react-router-dom';
import { css } from 'aphrodite';
import {
  AiFillWechat, AiOutlineCalendar, AiOutlineAppstore, AiFillHome,
} from 'react-icons/ai';
import { styles } from './style';

const iconOptions = {
  size: 20,
};

const SideNav = () => (
  <div
    className={css(styles.sideNav)}
  >
    <ul className={css(styles.navigation)}>
      <li className={css(styles.navItem)}>
        <Link className={css(styles.navAnchor)} to="/app/home"><AiFillHome size={iconOptions.size} /></Link>
      </li>
      <li className={css(styles.navItem)}>
        <Link className={css(styles.navAnchor)} to="/app/projects"><AiOutlineAppstore size={iconOptions.size} /></Link>
      </li>
      <li className={css(styles.navItem)}>
        <Link className={css(styles.navAnchor)} to="/app/chat"><AiFillWechat size={iconOptions.size} /></Link>
      </li>
      <li className={css(styles.navItem)}>
        <Link className={css(styles.navAnchor)} to="/app/calendar"><AiOutlineCalendar size={iconOptions.size} /></Link>
      </li>
    </ul>
  </div>
);

export default SideNav;