import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  return (
    <>
      <div>
        <img className='rounded-lg' src={project.imgSrc} alt={project.title} />
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className='flex gap-3'>
        <a
          className='text-brand-red text-xl hover:-translate-y-2 transition-all inline-block'
          href={project.github}
          target='_blank'
          rel='noreferrer'>
          <FaGithub />
        </a>
        <a
          className='text-brand-red text-xl hover:-translate-y-2 transition-all inline-block'
          href={project.live}
          target='_blank'
          rel='noreferrer'>
          <FaLink />
        </a>
      </div>
    </>
  );
};

export default ProjectCard;
