import { FaFacebookF } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



const Footer = () => {
  return (
    <div className='bg-[#717353] text-white'>
        <div className='2xl:mx-16 xl:mx-12 md:mx-10 sm:mx-8 pad:mx-6 mob:mx-4 2xl:my-24 xl:my-16 md:my-8 sm:my-6 pad:my-4 mob:my-3 bg-transparent flex justify-between'>
            <div className="bg-transparent flex xl:gap-[10rem] md:gap-[5rem] pad:gap-[3rem] mob:gap-[1rem]">
                <div className="bg-transparent flex flex-col 2xl:gap-6 xl:gap-4 sm:gap-2 pad:gap-2 mob:gap-1 pad:tracking-[0.2rem] mob:tracking-[0.15rem]">
                    <h1 className="2xl:text-3xl xl:text-2xl md:text-xl mob:text-sm">EXPLORE</h1>
                    <div className='bg-white w-[50px] h-[2px]'></div>
                    <a href="" className="2xl:text-2xl xl:text-xl md:text-base sm:text-sm pad:text-xs mob:text-xs transition-all duration-300 2xl:hover:text-3xl xl:hover:text-2xl ">SHOP</a>
                    <a href="" className="2xl:text-2xl xl:text-xl md:text-base sm:text-sm pad:text-xs mob:text-xs transition-all duration-300 2xl:hover:text-3xl xl:hover:text-2xl ">STYLE QUIZ</a>
                    <a href="" className="2xl:text-2xl xl:text-xl md:text-base sm:text-sm pad:text-xs mob:text-xs transition-all duration-300 2xl:hover:text-3xl xl:hover:text-2xl ">ABOUT US</a>
                    <a href="" className="2xl:text-2xl xl:text-xl md:text-base sm:text-sm pad:text-xs mob:text-xs transition-all duration-300 2xl:hover:text-3xl xl:hover:text-2xl ">STORIES</a>
                </div>
                <div className="bg-transparent flex flex-col 2xl:gap-6 xl:gap-4 sm:gap-2 pad:gap-2 mob:gap-1 pad:tracking-[0.2rem] mob:tracking-[0.15rem]">
                    <h1 className="2xl:text-3xl xl:text-2xl md:text-xl mob:text-sm">HELP</h1>
                    <div className='bg-white w-[50px] h-[2px]'></div>
                    <a href="" className="2xl:text-2xl xl:text-xl md:text-base sm:text-sm pad:text-xs mob:text-xs transition-all duration-300 2xl:hover:text-3xl xl:hover:text-2xl ">FAQS + SHIPPING</a>
                    <a href="" className="2xl:text-2xl xl:text-xl md:text-base sm:text-sm pad:text-xs mob:text-xs transition-all duration-300 2xl:hover:text-3xl xl:hover:text-2xl ">CONTACT</a>
                    <a href="" className="2xl:text-2xl xl:text-xl md:text-base sm:text-sm pad:text-xs mob:text-xs transition-all duration-300 2xl:hover:text-3xl xl:hover:text-2xl ">TERMS</a>
                    <a href="" className="2xl:text-2xl xl:text-xl md:text-base sm:text-sm pad:text-xs mob:text-xs transition-all duration-300 2xl:hover:text-3xl xl:hover:text-2xl ">TRADE</a>
                </div>
            </div>
            <div className="bg-transparent flex justify-self-end tracking-wide gap-4">
                <FaFacebookF className = "bg-transparent text-black lg:text-4xl sm:text-3xl pad:text-2xl mob:text-2xl cursor-pointer"/>
                <FaPinterest className = "bg-transparent text-black lg:text-4xl sm:text-3xl pad:text-2xl mob:text-2xl cursor-pointer" />
                <FaInstagram className = "bg-transparent text-black lg:text-4xl sm:text-3xl pad:text-2xl mob:text-2xl cursor-pointer" />
            </div>
        </div>
    </div>
  )
}

export default Footer