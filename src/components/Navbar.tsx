import  { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }
    return (
        <div className='2xl:mx-[10rem] 1.5xl:mx-[4rem] xl:mx-[3rem] md:mx-[1.5rem] sm:mx-[1rem] pad:mx-[.8rem] mob:mx-[.6rem]  1.5xl:my-12 lg:my-6 sm:my-4 pad:my-3 mob:py-3 grid 1.5xl:grid-cols-real-nav lg:grid-cols-xl-nav sm:grid-cols-md-nav text-[#56593D]'>
            <h1 className='2xl:text-5xl xl:text-4xl lg:text-3xl md:text-4xl pad:text-3xl mob:text-3xl font-[300] cursor-pointer'><a href="https://anow-app.netlify.app">K I N N</a></h1>
            <ul className='hidden  md:ml-[0%] sm:ml-[20%] lg:flex gap-12 1.5xl:justify-around 1.5xl:gap-0 lg:justify-end xl:gap-12 lg:col-1 sm:col-span-1 sm:items-center tracking-[0.07em] text-[#56593D] uppercase'>
                <li>
                    <a href="#shop" className=' transition-all duration-300 hover:text-[#333] hover:font-[700] 2xl:text-[1.65rem] 1.5xl:text-[1.5rem] xl:text-[1.3rem] lg:text-[1.2rem] 1.5xl:hover:text-[1.7rem] 2xl:hover:text-[1.8rem] xl:hover:text-[1.5rem] lg:hover:text-[1.4rem]'>shop</a>
                </li>
                <li>
                    <a href="#essentials" className=' transition-all duration-300 hover:text-[#333] hover:font-[700] 2xl:text-[1.65rem] 1.5xl:text-[1.5rem] xl:text-[1.3rem] lg:text-[1.2rem] 1.5xl:hover:text-[1.7rem] 2xl:hover:text-[1.8rem] xl:hover:text-[1.5rem] lg:hover:text-[1.4rem]'>style quiz</a>
                </li>
                <li>
                    <a href="#about" className=' transition-all duration-300 hover:text-[#333] hover:font-[700] 2xl:text-[1.65rem] 1.5xl:text-[1.5rem] xl:text-[1.3rem] lg:text-[1.2rem] 1.5xl:hover:text-[1.7rem] 2xl:hover:text-[1.8rem] xl:hover:text-[1.5rem] lg:hover:text-[1.4rem]'>about us</a>
                </li>
                <li>
                    <a href="#stories" className=' transition-all duration-300 hover:text-[#333] hover:font-[700] 2xl:text-[1.65rem] 1.5xl:text-[1.5rem] xl:text-[1.3rem] lg:text-[1.2rem] 1.5xl:hover:text-[1.7rem] 2xl:hover:text-[1.8rem] xl:hover:text-[1.5rem] lg:hover:text-[1.4rem]'>stories</a>
                </li>
            </ul>
            <div onClick={handleNav} className="flex lg:hidden col-start-3 justify-end items-center cursor-pointer">
                {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30}/>}
            </div>
            <div className={nav ? "fixed left-0 top-0 w-[60%] h-full border-r-gray-400 border-2 bg-[#FFFFEF]  ease-in-out duration-500 z-[50]" : 'z-[50] fixed left-[-100%] h-full ease-in-out duration-500'}>
            <h1 className="w-full text-3xl font-bold text-[#56593D] m-4">K I N N</h1>
            <ul className='p-4 grid gap-6'>
                <li>
                    <a onClick={handleNav} href="#shop" className='text-[#56593D] text-xl transition-all duration-300 hover:text-[#333333] hover:text-2xl'>SHOP</a>
                </li>
                <li>
                    <a onClick={handleNav} href="#essentials" className='text-[#56593D] text-xl transition-all duration-300 hover:text-[#333333] hover:text-2xl'>STYLE QUIZ</a>
                </li>
                <li>
                    <a onClick={handleNav} href="#about" className='text-[#56593D] text-xl transition-all duration-300 hover:text-[#333333] hover:text-2xl'>ABOUT US</a>
                </li>
                <li>
                    <a onClick={handleNav} href="#stories" className='text-[#56593D] text-xl transition-all duration-300 hover:text-[#333333] hover:text-2xl'>STORIES</a>
                </li>

            </ul>
            </div>
        </div>
  )
}

export default Navbar