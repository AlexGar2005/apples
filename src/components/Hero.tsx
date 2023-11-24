import { motion } from "framer-motion"
const fadeInAnimationSpan = {
  initial: {
    opacity: 0,
  },
  animate: {
    transition: {
      duration: .7,
      delay: .7
    },
    opacity: 1,
  }
}
const fadeInAnimationTitle = {
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
const fadeInAnimationButton = {
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

const Hero = () => {
  return (
    <div className='2xl:mx-[10rem] 1.5xl:mx-[4rem] xl:mx-[3rem] md:mx-[1.5rem] sm:my-0 pad:my-6 mob:my-4 relative overflow-y-hidden'>
        <img src="Rectangle.png" alt="" className="w-full sm:block hidden"/>
        <div className="sm:absolute pad:relative mob:relative ultra:top-[75%] 2xl:top-[65%] lg:top-[60%] sm:top-[65%] sm:right-[5%] sm:left-0 pad:left-[50%] mob:left-[50%] sm:translate-x-0 pad:translate-x-[-50%] mob:translate-x-[-50%] bg-transparent font-[300] sm:text-end pad:text-center text-[#56593D] flex flex-col sm:items-end pad:items-center mob:items-start mob:ml-[0.5rem]">
          <motion.span 
            className="bg-transparent ultra:text-4xl 1.5xl:text-3xl xl:text-2xl lg:text-xl uppercase"
            variants={fadeInAnimationSpan}
            initial = 'initial'
            whileInView='animate'
            viewport={{
                once: true,
            }}
          >
            all collections
          </motion.span>
          <motion.h1 
            className="bg-transparent ultra:text-7xl 1.5xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl pad:text-3xl mob:text-3xl ultra:leading-[5rem] 1.5xl:leading-[4.5rem] xl:leading-[4rem] overflow-y-hidden"
            variants={fadeInAnimationTitle}
            initial = 'initial'
            whileInView='animate'
            viewport={{
                once: true,
            }}
          >
            Elevate Your Everyday
          </motion.h1>
          <motion.button 
            className="ultra:py-6 1.5xl:py-4 xl:py-3 sm:py-2 pad:py-1 mob:py-1 2xl:px-10 1.5xl:px-8 lg:px-6 md:px-4 pad:px-3 mob:px-4 xl:mt-6 lg:mt-4 pad:mt-2 mob:mt-2 bg-[#56593D] transition-all duration-300 hover:bg-[#70744d] text-white font-[600] lg:text-base pad:text-sm uppercase cursor-pointer"
            variants={fadeInAnimationButton}
            initial = 'initial'
            whileInView='animate'
            viewport={{
                once: true,
            }}
          >
            shop now
          </motion.button>
        </div>
    </div>
  )
}

export default Hero