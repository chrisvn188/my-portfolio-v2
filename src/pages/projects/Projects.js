import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';
import PorfolioImg from '../../assets/images/project-portfolio.png';
import { styles } from '../../styles/styles';

const projectList = [
  {
    title: 'My portfolio website 1',
    imgSrc: PorfolioImg,
    description:
      'My portfolio website is the first website I build using React and TailwindCss. Although, there are still some bugs and missing features, I had a ton of fun and learned a lot.',
  },

  {
    title: 'My portfolio website 2',
    imgSrc: PorfolioImg,
    description:
      'My portfolio website is the first website I build using React and TailwindCss. Although, there are still some bugs and missing features, I had a ton of fun and learned a lot.',
  },
  {
    title: 'My portfolio website 3',
    imgSrc: PorfolioImg,
    description:
      'My portfolio website is the first website I build using React and TailwindCss. Although, there are still some bugs and missing features, I had a ton of fun and learned a lot.',
  },

  {
    title: 'My portfolio website 4',
    imgSrc: PorfolioImg,
    description:
      'My portfolio website is the first website I build using React and TailwindCss. Although, there are still some bugs and missing features, I had a ton of fun and learned a lot.',
  },
];

const Projects = () => {
  return (
    <section id='projects' className={styles.section()}>
      <div>
        <h2 className={styles.headingTwo}>My projects</h2>
        <ul className='flex gap-10 mt-20 flex-wrap justify-center'>
          {projectList.map(project => (
            <li
              key={project.title}
              className='space-y-6 bg-brand-dark p-6 rounded-xl max-w-[32rem] lg:max-w-md'>
              <div>
                <img
                  className='rounded-lg'
                  src={project.imgSrc}
                  alt={project.title}
                />
              </div>
              <h3 className={styles.headingThree}>{project.title}</h3>
              <p className={styles.paragraph}>{project.description}</p>
              <div className='flex gap-3'>
                <a
                  className='text-brand-red text-xl hover:-translate-y-2 transition-all inline-block'
                  href='https://github.com/'>
                  <FaGithub />
                </a>
                <a
                  className='text-brand-red text-xl hover:-translate-y-2 transition-all inline-block'
                  href='https://github.com/'>
                  <FaLink />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
