import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <p> {title} </p>
  )
}

const About = () => {
  return (
    <>
    <motion.div>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>
    <motion.p 
      variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 text-secondary text-[17px] max-w-2xl leading-[30px]'
    > 
      Hello, I'm React programer. I'm only 16 years old. Now I'm learning Tailwind and Three.js . 
      I am a very purposeful and persistent person. I really like programming and I am sure that this will be my job 
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => ( 
        <ServiceCard key={services.title} index={index} {...services} />
      ))}
    </div>
    
    </>
  )
}

export default SectionWrapper(About, "about");