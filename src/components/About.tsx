import { FaArrowRightLong } from "react-icons/fa6";
import {motion} from 'framer-motion'
const fadeInAnimationTitle = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    transition: {
      duration: .7,
      delay: .7
    },
    opacity: 1,
    y:0,
  }
}
const fadeInAnimationLeft = {
  initial: {
    opacity: 0,
  },
  animate: {
    transition: {
      duration: .7,
      delay: 1.4
    },
    opacity: 1,
  }
}
const fadeInAnimationRight = {
  initial: {
    opacity: 0,
  },
  animate: {
    transition: {
      duration: .7,
      delay: 2.1
    },
    opacity: 1,
  }
}


const About = () => {
  return (
    <div id="about" className="2xl:mx-[15rem] 2xl:my-[5rem] xl:my-[4rem] lg:my-[4rem] md:my-[3rem] pad:my-[2rem] mob:my-[1.5rem] 1.5xl:mx-[4rem] xl:mx-[3rem] md:mx-[1.5rem] pad:mx-[1rem] text-[#56593D] flex flex-col items-center border-b-[#]">
        <motion.h1 
          className="ultra:text-7xl 2xl:text-6xl 1.5xl:text-5xl lg:text-4xl md:text-3xl pad:text-2xl text-center tracking-wide overflow-y-hidden"
          variants={fadeInAnimationTitle}
          initial = 'initial'
          whileInView='animate'
          viewport={{
              once: true,
          }}  
        >
          If your happy place is at the dinner table, we totally get that. That’s why we created products to help you find slow moments in a fast world.
        </motion.h1>
        <div className="flex justify-center 2xl:mt-16 1.5xl:mt-10 lg:mt-8 pad:mt-4 mob:mt-3 lg:gap-8 sm:gap-6 pad:gap-4 mob:gap-4">
            <motion.div 
              className="flex sm:gap-4 pad:gap-1 mob:gap-1 items-center relative about-a pb-2"
              variants={fadeInAnimationLeft}
              initial = 'initial'
              whileInView='animate'
              viewport={{
                  once: true,
              }}
            >
                <a href="" className="lg:text-2xl sm:text-xl">Shop All</a>
                <FaArrowRightLong className = "lg:text-2xl sm:text-xl"/>
            </motion.div>
            <motion.div 
              className="flex sm:gap-4 pad:gap-1 mob:gap-1 items-center relative about-a pb-2"
              variants={fadeInAnimationRight}
              initial = 'initial'
              whileInView='animate'
              viewport={{
                  once: true,
              }}  
            >
                <a href="" className="lg:text-2xl sm:text-xl">Read Stories</a>
                <FaArrowRightLong className = "lg:text-2xl sm:text-xl" />
            </motion.div>
        </div>
    </div>
            
  )
}

export default About