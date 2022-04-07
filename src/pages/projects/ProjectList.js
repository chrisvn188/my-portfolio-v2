import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectList = ({ projectList }) => {
  return (
    <ul className='flex gap-10 mt-20 flex-wrap justify-center'>
      {projectList.map(project => (
        <li
          key={project.title}
          className='space-y-6 bg-brand-dark p-6 rounded-xl max-w-[32rem] lg:max-w-md'>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;
