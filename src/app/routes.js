import React from 'react';
import Projects from './views/projects';
import Home from './views/home';
import Calendar from './views/calendar';
import Chat from './views/chat';

export const routes = [
  {
    path: '/',
    exact: true,
    main: () => <Home />,
  },
  {
    path: '/projects',
    exact: true,
    main: () => <Projects />,
  },
  {
    path: '/chat',
    exact: true,
    main: () => <Chat />,
  },
  {
    path: '/calendar',
    exact: true,
    main: () => <Calendar />,
  },
];
