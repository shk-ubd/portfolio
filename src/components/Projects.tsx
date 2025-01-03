'use client'
import React from 'react'
import SectionHeading from './SectionHeading'
import { projectsData } from '@/../lib/data'
import Project from './Project'
import { useSectionInView } from '../../lib/hooks'

function Projects() {
  const ref = useSectionInView('Projects', 0.35)
  
  return (
    <section ref={ref} id='projects' className='scroll-mt-28 mb-28'>
      <SectionHeading text='My Projects' />
      <div>
        {projectsData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
