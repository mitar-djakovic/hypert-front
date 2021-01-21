import React from 'react';
import { useSelector } from 'react-redux';

const Projects = () => {
  const activeProjectName = useSelector((state) => state.projects.activeProject?.name) || '';

  return (
    <div>
      {activeProjectName}
    </div>
  );
};

export default Projects;
