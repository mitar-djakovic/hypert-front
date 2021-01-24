import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { css } from 'aphrodite';
import { useSelector, useDispatch } from 'react-redux';
import {
  RiDashboardFill,
} from 'react-icons/ri';
import { styles } from './style';
import { setActiveProject } from '../../../redux/actions/projects';

const SideNav = () => {
  const dispatch = useDispatch();
  const [menuLinks, setMenuLinks] = useState([
    {
      name: 'Projects',
      to: '/app/projects',
      subMenuOpen: false,
      onClick: (project, adminId) => setActiveProject(project, adminId),
    },
    {
      name: 'Chat',
      to: '/app/chat',
      subMenuOpen: false,
    },
  ]);
  const data = {
    projects: useSelector((state) => state.projects.projects) || [],
  };
  const adminId = useSelector((state) => state.auth.adminId);

  const handleDropDownMenu = (name) => {
    const newMenuLinks = menuLinks.map((menuLink) => {
      if (menuLink.name === name) {
        return ({
          ...menuLink,
          subMenuOpen: !menuLink.subMenuOpen,
        });
      }
      return menuLink;
    });

    setMenuLinks(newMenuLinks);
  };
  return (
    <div
      className={css(styles.sideNav)}
    >
      <ul className={css(styles.navigation)}>
        {menuLinks.map((menuLink) => (
          <li
            key={menuLink.name}
            className={css(styles.navItem)}
          >
            <p
              role="presentation"
              onClick={() => handleDropDownMenu(menuLink.name)}
              className={css(styles.navAnchor)}
            >
              <RiDashboardFill
                size={26}
                className={css(styles.icon)}
              />
              {menuLink.name}
            </p>
            {menuLink.subMenuOpen && (
              <ul className={css(styles.subMenuLinks)}>
                {(data[menuLink.name.toLowerCase()] || []).map((project) => (
                  <li
                    role="presentation"
                    className={css(styles.subMenuLink)}
                    onClick={() => dispatch(menuLink.onClick(project, adminId))}
                    key={project.name}
                  >
                    <Link key={project.name} to="/app/projects" className={css(styles.subMenuAnchor)}>
                      {project.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNav;
