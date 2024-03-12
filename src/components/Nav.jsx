import { useState } from "react";
// import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
const Nav = () => {
let Links =[
    {name:"HOME",link:"/"},
    {name:"ABOUT",link:"/"},
    {name:"CONTACT",link:"/"},
  ];
  let [open, setOpen] =useState(false);

return (
    <div className='shadow-md z-20 w-full fixed top-0 left-0'>
       <div className='md:flex items-center justify-between bg-green-500 py-4 md:px-10 px-7'>
        {/* logo section */}
        <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
            <BookOpenIcon className='w-7 h-7 text-white'/>
            <span className="text-white">Menuki</span>
        </div>
        {/* Menu icon */}
        <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
            {
                open ? <XMarkIcon className="text-white"/> : <Bars3BottomRightIcon className="text-white" />
            }
        </div>
        {/* linke items */}
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-green-500 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
            {
                Links.map((link, index) => (
                <li key={index}  className='md:ml-8 md:my-0 my-7 font-semibold'>
                    <a href={link.link} className='text-gray-800 hover:text-black duration-500 text-white'>{link.name}</a>
                </li>))
            }
            <button className='btn bg-white text-black md:ml-8 font-semibold px-3 py-1 rounded duration-500 hover:animate-bounce md:static'>Get Started</button>
        </ul>
        {/* button */}
       </div>
    </div>
);
};

export default Nav;
