import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { css } from 'aphrodite';
import { useSelector } from 'react-redux';
import {
  RiDashboardFill,
} from 'react-icons/ri';
import { styles } from './style';

const iconOptions = {
  size: 26,
};

const SideNav = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const projects = useSelector((state) => state.projects.projects);
  return (
    <div
      className={css(styles.sideNav)}
    >
      <ul className={css(styles.navigation)}>
        <li className={css(styles.navItem)}>
          <Link className={css(styles.navAnchor)} to="/app/projects">
            <RiDashboardFill
              size={iconOptions.size}
              onClick={() => setDropDownOpen(!dropDownOpen)}
            />
          </Link>
          {dropDownOpen && (
          <ul>
            {projects.map((project) => (
              <li>
                <Link key={project.name} to="/">{project.name}</Link>
              </li>
            ))}
          </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
