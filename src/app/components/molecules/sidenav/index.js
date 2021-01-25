import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { css } from 'aphrodite';
import { useSelector, useDispatch } from 'react-redux';
import {
  RiDashboardFill,
} from 'react-icons/ri';
import { DiJsBadge } from 'react-icons/di';
import { styles } from './style';
import { setActiveProject } from '../../../redux/actions/projects';

const SideNav = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const projects = useSelector((state) => state.projects.projects);
  const adminId = useSelector((state) => state.auth.adminId);
  const activeRoute = location.pathname.slice(5);

  console.log('activeRoute', activeRoute);
  const navigations = [
    {
      name: 'Dashboard',
      to: '/app/dashboard',
    },
    {
      name: 'Chat',
      to: '/app/chat',
    },
  ];

  return (
    <div className={css(styles.sideNav)}>
      <ul className={css(styles.projectList)}>
        {projects.map((project) => (
          <li
            onClick={() => dispatch(setActiveProject(project, adminId))}
            key={project.name}
            role="presentation"
          >
            <div className={css(styles.logo)}>
              <DiJsBadge
                size={22}
                className={css(styles.projectIcon)}
              />
            </div>
          </li>
        ))}
      </ul>
      <ul className={css(styles.navigation)}>
        {navigations.map((nav) => (
          <li key={nav.to} className={css(styles.navItem)}>
            <Link
              className={css(
                styles.navAnchor,
                nav.name.toLowerCase() === activeRoute && styles.activeRoute,
              )}
              to={nav.to}
            >
              <RiDashboardFill
                size={26}
                className={css(styles.icon)}
              />
              {nav.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNav;