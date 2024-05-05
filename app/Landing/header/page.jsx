'use client'

import {React} from 'react'
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../img/logo.png';
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { PiTiktokLogoFill } from "react-icons/pi";
import'../../Landing/landing.css'
const Homepage = () => {
  

   return (
    
          <div className=' w-full   flex flex-col sticky top-0'>
             <div className='bg-[#050338] flex flex-row w-full   text-white '>
                <div className='flex flex-row  w-6/12 justify-start items-start'>
               <h6 className='text-white  social_links'>
                   Call Now <MdCall size={20}/>  +92 300 500 3992</h6>
                <h6 className='text-white social_links'>
                  <MdEmail size={20}/>
                  <Link href="">info@absconsultant.co.uk</Link>
                </h6>
                </div>
                <div className=' flex flex-row  m-2 gap-2 pr-4 w-6/12  justify-end items-end'>
                          <Link href="https://www.facebook.com/absoverseasconsultant"><FaSquareFacebook color='white' size={20} /> </Link>
                          <Link href="https://www.instagram.com/absoverseasconsultantspk"><FaInstagramSquare color='white' size={20}/> </Link>
                          <Link href="https://wa.me/923005003992">
                            <IoLogoWhatsapp color='white' size={20}/></Link>
                            <Link href="https://www.linkedin.com/company/abs-overseas-consultants">
                            <FaLinkedin color='white' size={20}/></Link>
                            <Link href="absconsultant.co.uk">
                            <PiTiktokLogoFill color='white' size={20}/></Link>
                          </div>         
             </div>

             {/* Menu Bar*/}
             <div className='
              bg-cyan-600-100 w-full h-full m-auto flex flex-col '>
                    {/* Menu bar from-red-600 to-orange-500 */}
                    <div className='bg-gradient-to-tr  bg-red-700 flex w-full h-20 p-2 flex-row'>
                      <div className='w-3/12'><Image src={logo} className='w-40 h-14 '/></div>
                      <div className=' w-4/12'></div>
                      <div className=' w-5/12 flex flex-row p-2 gap-4 '>
                          <div className='menu'> <Link href="/">Home</Link></div>
                          <div className='menu'><Link href="/Landing/aboutUs">About Us</Link></div>
                          <div className='menu'><Link href="/Landing/services">Services</Link></div>
                          <div className='menu'><Link href="/Landing/applyNow">Apply Now</Link></div>
                          <div className='menu'><Link href="/Landing/blog">Blog</Link></div>
                          
                          
                      </div>
                      
                    </div>    
               </div>
    </div>
  )
}

export default Homepage