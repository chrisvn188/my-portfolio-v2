import React from 'react'
import { FaGithub, FaLink } from 'react-icons/fa'

const ProjectCard = ({ project }) => {
  return (
    <article className='space-y-6 bg-slate-50 p-6 rounded-xl max-w-[32rem] lg:max-w-md h-full'>
      <img
        className='rounded-lg max-w-full'
        src={project.imgSrc}
        alt={project.title}
      />
      <h3 className='text-brand-violet'>{project.title}</h3>
      <p className='text-slate-700'>{project.description}</p>
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
    </article>
  )
}

export default ProjectCard
