import React from 'react'
import { styles } from '../../styles/styles'
import { projectList } from '../../data/data'
import ProjectList from './ProjectList'

const Projects = () => {
  return (
    <section id='projects' className={styles.section('bg-brand')}>
      <div>
        <h2>My projects</h2>
        <ProjectList projectList={projectList} />
      </div>
    </section>
  )
}

export default Projects
