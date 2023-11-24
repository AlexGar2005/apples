import {motion} from 'framer-motion'
const fadeInAnimationTitle = {
  initial: {
    opacity: 0,
    x: -50,
  },
  animate: {
    transition: {
      duration: .7,
      delay: .7
    },
    opacity: 1,
    x:0,
  }
}
const fadeInAnimationFirst = {
  initial: {
    opacity: 0,
  },
  animate: {
    transition: {
      duration: .7,
      delay: 1
    },
    opacity: 1,
  }
}
const fadeInAnimationSecond = {
  initial: {
    opacity: 0,
  },
  animate: {
    transition: {
      duration: .7,
      delay: 1.5
    },
    opacity: 1,
  }
}
const fadeInAnimationThird = {
  initial: {
    opacity: 0,
  },
  animate: {
    transition: {
      duration: .7,
      delay: 2
    },
    opacity: 1,
  }
}
const fadeInAnimationFourth = {
  initial: {
    opacity: 0,
  },
  animate: {
    transition: {
      duration: .7,
      delay: 2.5
    },
    opacity: 1,
  }
}

const Moments = () => {
  return (
    <div className='2xl:mx-[10rem] 1.5xl:mx-[4rem] xl:mx-[3rem] md:mx-[1.5rem] 2xl:my-[7rem] xl:my-[6rem] md:my-[5rem] pad:my-[4rem] mob:my-[3rem] relative'>
        <motion.h1 
          className="text-center 1.5xl:text-6xl xl:text-5xl md:text-4xl pad:text-3xl mob:text-3xl my-6 text-[#56593D] font-[300]"
          variants={fadeInAnimationTitle}
          initial = 'initial'
          whileInView='animate'
          viewport={{
              once: true,
          }}  
        >
          #KinnMoments
        </motion.h1>
        <div className='lg:flex pad:grid sm:grid-cols-2 xl:gap-4 md:gap-2 w-full h-full xl:mt-12 md:mt-8'>
            <motion.img 
              src="plates.jpg" 
              alt="" 
              className="w-full h-full"
              variants={fadeInAnimationFirst}
              initial = 'initial'
              whileInView='animate'
              viewport={{
                  once: true,
              }}  
              />
            <motion.img 
              src="apple.jpg" 
              alt="" 
              className="w-full h-full"
              variants={fadeInAnimationSecond}
              initial = 'initial'
              whileInView='animate'
              viewport={{
                  once: true,
              }}  
            />
            <motion.img 
              src="table.jpg" 
              alt="" 
              className="w-full h-full"
              variants={fadeInAnimationThird}
              initial = 'initial'
              whileInView='animate'
              viewport={{
                  once: true,
              }}  
            />
            <motion.img 
              src="plates.jpg" 
              alt="" 
              className="w-full h-full"
              variants={fadeInAnimationFourth}
              initial = 'initial'
              whileInView='animate'
              viewport={{
                  once: true,
              }}  
            />
        </div>
    </div>
  )
}

export default Moments