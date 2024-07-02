'use client'
import React from 'react'
import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'
import { useSectionInView } from '../../lib/hooks'
function About() {
  const ref = useSectionInView('About')

  return (
    <motion.section
    ref={ref}
    className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}
    id="about"
  >
        <SectionHeading text='About Me'/>
        <p className="mb-3">
    After excelling in my studies at the University of Karachi with a focus on <span className="font-medium">Software Engineering</span>, I pursued my passion for web development. I specialize in <span className="font-medium">frontend development</span>, particularly in <span className="font-medium">React JS, Next.js, and TailwindCSS</span>. <span className="italic">My favorite part of programming</span> is solving complex problems and the satisfaction of finding effective solutions. I am proficient in <span className="font-medium">React, Next.js, JavaScript/TypeScript, and Python</span>. Always eager to learn, I am currently seeking a <span className="font-medium">full-time position</span> as a frontend web developer.
</p>

<p>
    <span className="italic">When I'm not coding</span>, I enjoy playing video games, watching movies, and exploring new interests. I am passionate about <span className="font-medium">learning new things</span> and am currently delving into <span className="font-medium">history and philosophy</span>. 
</p>
    </motion.section>
  )
}

export default About