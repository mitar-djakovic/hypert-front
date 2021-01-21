import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { css } from 'aphrodite';
import { useSelector } from 'react-redux';
import {
  RiDashboardFill,
} from 'react-icons/ri';
import { styles } from './style';

const SideNav = () => {
  const [menuLinks, setMenuLinks] = useState([
    {
      name: 'Projects',
      to: '/app/projects',
      subMenuOpen: false,
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
            role="presentation"
            className={css(styles.navItem)}
            onClick={() => handleDropDownMenu(menuLink.name)}
          >
            <p
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
                  <li className={css(styles.subMenuLink)}>
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
