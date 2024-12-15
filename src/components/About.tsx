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
    I am a passionate <span className="font-medium">frontend developer</span> with a degree in <span className="font-medium">Software Engineering</span> from the University of Karachi. I specialize in building dynamic and responsive web applications, with expertise in <span className="font-medium">Angular, React, Next.js, and TailwindCSS</span>. During my internship at <span className="font-medium">MT Pixels</span>, I honed my skills by developing an <span className="font-medium">admin portal application</span> in <span className="font-medium">AngularJS</span>, showcasing my ability to deliver functional and efficient solutions.
</p>

<p className="mb-3">
    With proficiency in <span className="font-medium">JavaScript and Typescript</span>, I am driven by a love for problem-solving and the challenge of turning ideas into reality. I am always eager to learn and grow, and I am currently seeking a <span className="font-medium">full-time position</span> as a frontend developer to contribute to innovative projects.
</p>

<p>
    <span className="italic">When Im not coding</span>, I enjoy playing video games, watching movies, and exploring new interests like <span className="font-medium">history and philosophy</span>. I believe in continuous learning and always strive to improve both personally and professionally.
</p>
</motion.section>

  )
}

export default About