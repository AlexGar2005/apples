import {motion} from 'framer-motion'
const fadeInAnimationTitle = {
  initial: {
    opacity: 0,
    y: 50,
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
const fadeInAnimationSpan = {
  initial: {
    opacity: 0,
    y: 50
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
const fadeInAnimationForm = {
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

const Newsletter = () => {
  return (
    <div className="flex flex-col xl:gap-16 lg:gap-12 md:gap-8 sm:gap-6 pad:gap-4 mob:gap-4 items-center text-[#56593D] 1.5xl:my-12 sm:my-10 pad:my-8 mob:my-6">
        <div className="text-center flex flex-col xl:gap-4 sm:gap-2 text-[#56593D] overflow-y-hidden">
            <motion.h1 
              className="1.5xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl pad:text-2xl mob:text-2xl 1.5xl:leading-[5rem] lg:leading-[4rem] font-[300]"
              variants={fadeInAnimationTitle}
              initial = 'initial'
              whileInView='animate'
              viewport={{
                  once: true,
              }}  
            >
              Sign up to our newsletter
            </motion.h1>
            <motion.p 
              className="xl:text-4xl lg:text-3xl md:text-2xl xl:leading-[4rem] font-[300] overflow-y-hidden"
              variants={fadeInAnimationSpan}
              initial = 'initial'
              whileInView='animate'
              viewport={{
                  once: true,
              }}  
            >
              Receive special offers and first look at new products.
            </motion.p>
        </div>
        <motion.form 
          className="grid grid-cols-form gap-4"
          variants={fadeInAnimationForm}
          initial = 'initial'
          whileInView='animate'
          viewport={{
              once: true,
          }}  
        >
            <input type="text" placeholder="" className="border-b-2 border-[#56593D] border-0 pl-6"/>
            <button className="uppercase text-white ultra:text-4xl 1.5xl:text-3xl bg-[#56593D] lg:px-10 md:px-8 py-1 transition-all duration-300 ultra:hover:px-16 lg:hover:px-12 md:hover:px-10">subscribe</button>
        </motion.form>
    </div>
  )
}

export default Newsletter