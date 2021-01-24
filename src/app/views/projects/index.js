import React from 'react';
import { useSelector } from 'react-redux';

const Projects = () => {
  const lastActiveProject = useSelector((state) => state.auth.lastActiveProject);

  return (
    <div>
      {lastActiveProject?.name ? lastActiveProject.name : null}
    </div>
  );
};

export default Projects;
