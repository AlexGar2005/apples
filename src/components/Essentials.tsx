import {motion} from "framer-motion";
const fadeInAnimationSpan = {
  initial: {
    opacity: 0,
    y:100,
  },
  animate: {
    transition: {
      duration: .7,
      delay: .7
    },
    opacity: 1,
    y: 0,
  }
}
const fadeInAnimationTitle = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    transition: {
      duration: .7,
      delay: 1.4
    },
    opacity: 1,
    y: 0,
  }
}

const Essentials = () => {
  return (
    <div id="essentials" className='2xl:mx-[10rem] 1.5xl:mx-[4rem] xl:mx-[3rem] md:mx-[1.5rem] sm:my-0 pad:my-10 mob:py-6 relative'>
        <img src="essentials.png" alt="" className="w-full mob:hidden"/>
        <div className="text-[#56593D] pad:absolute pad:left-[50%] pad:translate-x-[-50%] lg:top-[10%] pad:top-[5%] bg-transparent text-center font-[300] lg:w-[60%] sm:w-[75%] pad:w-full mob:bg-[#eeede9] mob:mx-0 mob:w-full mob:py-10 overflow-y-hidden">
            <motion.h2 
              className="uppercase bg-transparent tracking-wide lg:text-3xl md:text-2xl"
              variants={fadeInAnimationSpan}
              initial = 'initial'
              whileInView='animate'
              viewport={{
                  once: true,
              }}
            >
              the essentials
            </motion.h2>
            <motion.h1 
              className="bg-transparent ultra:text-6xl 2xl:text-5xl xl:text-4xl md:text-3xl sm:text-2xl mob:text-xl ultra:leading-[4.5rem] 2xl:leading-[4rem] overflow-y-hidden xl:mt-8 lg:mt-4 sm:mt-2 mob:mt-2 mob:mx-[0.5rem]"
              variants={fadeInAnimationTitle}
              initial = 'initial'
              whileInView='animate'
              viewport={{
                  once: true,
              }}
            >
              We believe minimalism means more. More space, more time, more meaningful moments.
            </motion.h1>
        </div>
    </div>
  )
}

export default Essentials