import React, { useEffect, useState } from 'react'
import './App.css'
import Services from './components/Services'
import Navbar from './components/Navbar'
import Chatbot from './Pages/Chatbot'
import Hero from './components/Hero'
import Work from "./pages/Work";
import About from './components/About'
import Blog from "./pages/Blog";
import Contact from './Pages/Contact'
import {AiTwotoneSetting } from "react-icons/ai"
import Testimony from './components/Testimony'
import Footer from './Pages/Footer'
import AOS from "aos";
import "aos/dist/aos.css";
import { ColorInput } from '@mantine/core';

const App = () => {
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const handleClick = () => {
    setToggle((pre) => !pre);
  };
  const [themeColor, setThemeColor] = useState("theme-default");
  return (
   
    <div className='overflow-hidden'>
    <div className={themeColor} >
    <Navbar/>
    <Chatbot/>
      <Hero />
      <div className="">
        <button
          onClick={handleClick}
          className={
            toggle
              ? " z-30 transition-all duration-[0.5s] translate-x-[2rem] fixed top-[4.625rem] flex items-center justify-center h-[3rem] w-[3rem] right-[2rem] bg-white shadow-xl rounded-sm"
              : "z-30 fixed top-[4.625rem] flex items-center justify-center h-[3rem] w-[3rem] transition-all duration-[0.5s] right-[18rem] bg-white shadow-xl rounded-sm"
          }
        >
          <AiTwotoneSetting className="text-xl setting absolute top-[50%] left-[50%]" />
        </button>

        <div className=" ">
        <div
          className={
            toggle
              ? "z-40 transition-all duration-[0.5s] translate-x-[18rem] h-full bg-[#f5f5f5] w-72 shadow-xl fixed top-0 right-0"
              : "z-40 h-full bg-[#f5f5f5] w-72 shadow-xl fixed top-0 right-0 transition-all duration-[0.5s] delay-75"
          }
        >
          <div className=" bg-white p-5 text-start text-[#a7aeb8] font-bold shadow">
            Theme Customizer
          </div>
          <div className=" p-5">
            <div className=" mb-3">
              <span className=" text-[#6c737d] text-sm italic">
                Try a pre-built swatch!
              </span>
            </div>
            <div className="">
              <div>
                <button
                  className={` py-4 w-[100%] text-start px-5 bg-gradient-to-r text-sm font-semibold from-[#0061f2] to-[#6900c7] pointer-events-auto rounded-md mb-3 text-white focus:ring-1 focus:outline-none focus:ring-[#6fa5f7]`}
                  onClick={() => setThemeColor("theme-default") }
                >
                  Default
                </button>
                <button
                  className=" py-4 w-[100%] px-5 text-start text-sm font-semibold bg-gradient-to-r from-[#1da1f5] to-[#8039da] rounded-md mb-3 text-white cursor-pointer focus:ring-1 focus:outline-none focus:ring-[#8039da]"
                  onClick={() => setThemeColor("theme-flat")}
                >
                  Flat
                </button>
                <button
                  className="py-4 w-[100%] px-5 text-start text-sm font-semibold bg-gradient-to-r from-[#f53b57] to-[#ff793f] rounded-md mb-3 text-white cursor-pointer focus:ring-1 focus:outline-none focus:ring-[#f53b57]"
                  onClick={() => setThemeColor("theme-sunset")}
                >
                  Sunset
                </button>
                <button
                  className="py-4 w-[100%] px-5 text-start text-sm font-semibold bg-gradient-to-r from-[#6eabc2] to-[#506c6a] rounded-md mb-3 text-white cursor-pointer focus:ring-1 focus:outline-none focus:ring-[#96b8b5]"
                  onClick={() => setThemeColor("theme-subtle")}
                >
                  Subtle
                </button>
                <button
                  className="py-4 w-[100%] px-5 text-start text-sm font-semibold bg-gradient-to-r from-[#06794f] to-[#0fa28b] rounded-md mb-3 text-white cursor-pointer focus:ring-1 focus:outline-none focus:ring-[#96b8b5]"
                  onClick={() => setThemeColor("theme-seafoam")}
                >
                  Seafoam
                </button>
              </div>
              <ColorInput label="Pick any color from the page" className="mt-24" defaultValue="#C5D899" />
            </div>
          </div>
        </div>
        </div>
      </div>
      <div data-aos="zoom-in"
      data-aos-duration="1000">
      <About theme={themeColor}/>
      </div>
      <Services/>

      <div data-aos="fade-up"
     data-aos-duration="1000">
     <Work/>
      </div>
     <Testimony/>

      <div data-aos="zoom-out"
      data-aos-duration="1000">
     <Blog/>
      </div>

     

    
      <Contact theme={themeColor}/>
  
    <Footer/>
    </div>
    </div>
       
  )
}

export default App;
