import React, { useState } from 'react'
import {MdMenu,MdClose} from "react-icons/md"
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import {Link} from 'react-scroll';
// import {NavLink} from 'react-scroll';

const Navbar = () => {
  const [open,setOpen] = useState(true);
  const menuLinks = [
    {id:1,name : "HOME",link : "home"},
    {id:2,name : "ABOUT",link : "about"},
    {id:3,name : "SERVICES",link : "services"},
    {id:4,name : "WORK",link : "work"},
    {id:5,name : "BLOG",link : "blog"},
    {id:6,name : "CONTACT",link : "contact"},
  ]
  return (
       <nav className={`${open ? "bg-[#040404]" : "bg-[#464646] h-screen"} fixed top-0 left-0 right-0 z-50`}>
         <div className="container px-1 py-2 lg:p-4 lg:pt-5 md:mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between font-bold">
           <div className="flex items-center justify-between px-2 lg:px-0">
           <h1 className={`${open ? "text-white" : "text-[#5f5f5f]"} ml-0 lg:ml-14 text-[28px]`}>DevFolio</h1>
            <div onClick={()=>setOpen(!open)} className="lg:hidden text-white">
            {
              open ? <MdMenu className='text-3xl'/> : <MdClose className='text-3xl'/>
            }

            </div>
           </div>
            <ul className="text-black lg:text-white mr-0 lg:mr-14 lg:flex lg:py-0 lg:static lg:space-x-9 hidden">
            {
                  menuLinks.map(item => (
                    <Link key={item.id} to={item.link} spy={true} smooth={true} offset={-55} duration={500} className={`${location.pathname === item.link ? "a" : "hover:a"} lg:text-[15px] py-3 lg:py-0 px-5 lg:px-0 font-semibold text-md a duration-300 transition-all text-portfolio-base`}>
                      {item.name}
                    </Link>
                  ))
            }
            {/* <Link to='home' className={`a text-portfolio-base`}>Home</Link>
            <Link to='about' className='a text-portfolio-base'>About</Link>
            <Link to='services' className='a text-portfolio-base'>Services</Link>
            <Link to='work' className='a text-portfolio-base'>Work</Link>
            <Link to='blog' className='a text-portfolio-base'>Blog</Link>
            <Link to='contact' className='a text-portfolio-base'>Contact</Link> */}
            </ul>
            <ul className={`text-black lg:text-white mr-0 lg:mr-14 flex flex-col lg:flex-row absolute top-12 right-4 left-4 bottom-4 py-3 lg:py-0 lg:static lg:space-x-9 transition-all duration-300 ${open ? "hidden" : "block bg-white lg:bg-transparent"}`}>
              {
                menuLinks.map(item => (
                  <Link onClick={()=>setOpen(!open)} key={item.id} to={item.link} spy={true} smooth={true} offset={-55} duration={500} className={`${location.pathname === item.link ? "d" : "hover:d"} lg:text-[15px] py-3 lg:py-0 px-5 lg:px-0 font-semibold d text-md duration-300 transition-all `}>
                     {item.name}
                  </Link>
              ))
              }              
            </ul>

        </div>
       </nav>
  )
}

export default Navbar