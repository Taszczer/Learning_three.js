import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
       <motion.div 
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
       > 
      <div
       options={{
        max:45,
        scale: 1,
        speed:450
       }}
       className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px]
       flex justify-evenly items-center flex-col '
      >
        <img src={icon} alt={title} 
        className='w-16 h-16 object-contain'
        /> 
        <h3 className='text-white font-bold text-[20px] text-center'>{title}</h3>
      </div>
       </motion.div>
    </Tilt>
  )
}//for commit
//xD
//Why I'm doing this?

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
      I am a very purposeful, persistent person and quick learner. I really like programming and I am sure that this will be my job 
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10 justify-center'>
      {services.map((service, index) => ( 
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
    
    </>
  )
}

export default About;