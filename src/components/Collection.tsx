import CollectionCard from "./CollectionCard"
import {motion} from "framer-motion";

const fadeInAnimationTitle = {
  initial: {
    opacity: 0,
    x: -100,
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
const fadeInAnimationCards = {
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


const Collection = () => {
  return (
    <div id="shop" className="text-[#56593D] 2xl:mx-[10rem] 2xl:my-[7rem] 1.5xl:my-[6rem] xl:my-[5rem] md:my-[4rem] sm:my-[2rem] 1.5xl:mx-[4rem] xl:mx-[3rem] md:mx-[1.5rem] sm:mx-[1rem]">
        <motion.h1 
          className="pad:text-4xl mob:text-3xl font-[300] text-center"
          variants={fadeInAnimationTitle}
          initial = 'initial'
          whileInView='animate'
          viewport={{
              once: true,
          }}  
        >
          Marple Board Collection
        </motion.h1>
        <motion.div 
          className="flex md:flex-row pad:flex-col mob:flex-col justify-between 1.5xl:gap-24 xl:gap-16 md:gap-8 pad:gap-8 mob:gap-6 xl:mt-12 md:mt-8 pad:mt-6 mob:mt-4"
          variants={fadeInAnimationCards}
          initial = 'initial'
          whileInView='animate'
          viewport={{
              once: true,
          }}    
        >
            <CollectionCard address={"first.png"} title={"Maple Board - Short"} price={"$98.00"} />
            <CollectionCard address={"second.png"} title={"Maple Board - Long"} price={"$125.00"} />
            <CollectionCard address={"third.png"} title={"Maple Board - Wide"} price={"$158.00"} />
        </motion.div>
    </div>
  )
}

export default Collection