import React, { useRef } from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {RiGpsFill} from "react-icons/ri";
import {AiOutlineMobile,AiOutlineMail} from "react-icons/ai"
import {FaFacebook,FaInstagram,FaTwitter,FaLinkedinIn} from "react-icons/fa"
import emailjs from '@emailjs/browser';
import Form from '../components/Form';


const Contact = () => {
  
  return (
      <div className='bg-portfolio-fill h-screen relative z-10 mt-0 md:mt-16 overflow-auto md:overflow-hidden' id="contact">
      <div className='absolute z-[-1] opacity-[0.3] bg-container bg-image w-full h-full pt-0 md:pt-16 mb-3rem'/>
        <Form/>
      </div>
  )
}

export default Contact