import {motion} from "framer-motion";
const fadeInAnimationSpan = {
  initial: {
    opacity: 0,
    x:-100,
  },
  animate: {
    transition: {
      duration: .7,
      delay: 1.4
    },
    opacity: 1,
    x: 0,
  }
}
const fadeInAnimationTitle = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    transition: {
      duration: .7,
      delay: .7
    },
    opacity: 1,
    x: 0,
  }
}
const fadeInAnimationParagraph = {
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

const Story = () => {
  return (
    <div id="stories" className='2xl:mx-[10rem] 1.5xl:mx-[4rem] xl:mx-[3rem] md:mx-[1.5rem] sm:mx-[1rem] 2xl:my-[7rem] xl:my-[6rem] md:my-[5rem] sm:my-[4rem] pad:my-[3rem] mob:my-[2rem] relative grid sm:grid-cols-story pad:grid-cols-1 mob:grid-cols-1 1.5xl:gap-16 xl:gap-12'>
        <img src="story.png" alt="" className="w-full"/>
        <div className="text-[#56593D] flex flex-col ultra:gap-12 1.5xl:gap-6 lg:gap-4 pad:gap-2 mob:gap-2 items-center ultra:py-28 2xl:py-20 xl:py-16 md:py-10 sm:py-0 pad:py-6 mob:py-6">
            <motion.h1 
              className="ultra:text-6xl 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl pad:text-3xl mob:text-2xl ultra:leading-[5rem] 2xl:leading-[4.5rem] font-[300]"
              variants={fadeInAnimationTitle}
              initial = 'initial'
              whileInView='animate'
              viewport={{
                  once: true,
              }}  
            >
              Our Design Story
            </motion.h1>
            <motion.div 
              className="w-[100px] lg:h-[3px] pad:h-[2px] mob:h-[2px] bg-[#56593D]"
              variants={fadeInAnimationSpan}
              initial = 'initial'
              whileInView='animate'
              viewport={{
                  once: true,
              }}  
            ></motion.div>
            <motion.p 
              className="text-center tracking-wide ultra:text-4xl 1.5xl:text-[2rem] xl:text-[1.65rem] lg:text-2xl md:text-base pad:text-sm ultra:leading-[4rem] 1.5xl:leading-[3rem] font-[300] mx-10"
              variants={fadeInAnimationParagraph}
              initial = 'initial'
              whileInView='animate'
              viewport={{
                  once: true,
              }}  
            >
              We believe in thoughtful, intentional living. So we promise not to clutter your cabinets with one-off pieces you’ll rarely use. Our collection only includes items you’ll reach for every day. Because mindful living should be simple, not stressful.
            </motion.p>
        </div>
    </div>
  )
}

export default Story