'use client'

import {React} from 'react'
import Link from 'next/link';
import Image from 'next/image';
import logo from '../img/logo.png';
import slider from '../img/slider.png'
import visitor from '../img/visitor.jpg'
import study from '../img/study.jpg'
import job from '../img/job.jpg'
import immig from '../img/immig.jpg'
import about_us from '../img/about.png'
import apply_now_header from '../img/apply-now-header1.png'
import france from '../img/france.png'
import uk from '../img/UK.png'
import  australia from '../img/australia.png'
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { VscCallIncoming } from "react-icons/vsc";
import { BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BiArrowToTop } from "react-icons/bi";
import'../Landing/landing.css'
import { Fraunces } from 'next/font/google';
const Homepage = () => {
  
function getTop () {
    window.scroll(0,0)
}
   return (
    
          <div className='border-black w-full h-full  flex '>
             {/* Main Screen */}
             <div className='border-black 
              bg-cyan-600-100 w-full h-full m-auto flex flex-col '>
                    

                    {/* slider */}
                    <div className=' flex flex-1 mt-28'>
                      
                    <div className='border-black bg-red-200 w-full h-[450px] justify-center items-center overflow-hidden'>
                      <Image src={slider} className='w-full block' />
                    </div>
                      {/* <div className=' flex absolute w-10/12  items-center align-middle p-6  h-96 flex-col'>
                      <p className=' font-bold text-black bg-white p-4 rounded-md'>ABS Overseas Education</p>
                      <br/><p className='text-white'>Get Study Visa- UK</p>
                        </div> */}
                    </div>
                    
                    {/* End of  slider */}
                    <div className=' bg-slate-200 p-4 mt-10 w-full h-[80px]  flex-1 gap-2  flex justify-center items-center'>
                            <h1 className='font-bold text-4xl text-center text-blue-950'> Services We Offer!</h1>
                    </div>
                    {/* body below slider */}
                    <div className=' p-2  w-full h-[380px] overflow-hidden flex-row flex gap-2'>
                          
                          <div className='tabs   '>
                          <Image src={study} className='h-80 hover:cursor-pointer 
                          '/>
                            <div className='tabs_heading '>
                            <h1 className=' '>Personalized Assistance</h1>
                            </div>
                          </div>
                          <div className='tabs'>
                          <Image src={visitor} className='h-80 hover:cursor-pointer 
                          '/>
                            <div className='tabs_heading '>
                              <h1 className=' '>Personalized Assistance</h1>
                            </div>
                          </div>
                          <div className='tabs'>
                          <Image src={job} className='h-80 hover:cursor-pointer 
                          '/>
                            <div className='tabs_heading '>
                              <h1 className=' '>University Selection Assistance</h1>
                            </div>
                          </div>
                          <div className='tabs'>
                          <Image src={immig} className='h-80 hover:cursor-pointer 
                          '/>
                            <div className='tabs_heading '>
                              <h1 className=''>IELTS preparations</h1>
                            </div>
                          </div>
                          
                          
                    </div>
                  
                    <div className=' bg-slate-200 p-4 mt-10 w-full h-[80px]  flex-1 gap-2  flex justify-center items-center'>
                            <h1 className='font-bold text-4xl text-center text-blue-950'> Offering Abroad Study Visas!</h1>
                    </div>
                    {/* body below slider */}
                    <div className=' p-2  w-full h-[380px] overflow-hidden flex-row flex gap-2'>
                          
                          <div className='  w-4/12 border-black  '>
                          <Image src={uk} className='h-80 hover:cursor-pointer w-full
                          '/>
                            <div className='tabs_heading  '>
                            <h1 className=' '>UK</h1>
                            </div>
                          </div>
                          <div className='w-4/12 '>
                          <Image src={france} className='h-80 hover:cursor-pointer w-full
                          '/>
                            <div className='tabs_heading '>
                              <h1 className=' '>France</h1>
                            </div>
                          </div>
                          <div className='w-4/12'>
                          <Image src={australia} className='h-80 hover:cursor-pointer w-full
                          '/>
                            <div className='tabs_heading '>
                              <h1 className=' '>Australia</h1>
                            </div>
                          </div>
                          
                          
                          
                    </div>
                  
                    
                   

                    <div className=' p-4 bg-slate-200 w-full h-[80px]  flex-1 gap-2  flex justify-center items-center'>
                            <h1 className='font-bold text-4xl text-center text-blue-950'> About Us!</h1>
                    </div>

                    {/* About Us */}
                    <div  className='border-black w-full h-[600px] flex  justify-evenly '>
                      <p className='text-lg justify-center p-4 '>
                          
                          <Image src={about_us} className='float-left h-80 w-96 mr-6 rounded-2xl shadow-lg shadow-black'/>
                        
                            We are your premier destination for all your study visa needs in the United Kingdom. Our consultancy is dedicated to helping students from all over the world achieve their dreams of studying in the UK.
                            At ABS Overseas, we understand that navigating the complexities of the UK visa process can be daunting. That's why we offer personalized consultancy services to guide you through every step of the application process. Whether you need assistance with filling out forms, gathering necessary documents, or preparing for interviews, our team of experts is here to support you every step of the way.
                            Our consultancy prides itself on our extensive knowledge of the UK visa system and our commitment to providing exceptional customer service. We work closely with each of our clients to understand their unique needs and tailor our services to ensure their success.
                            Our consultancy prides itself on our extensive knowledge of the UK visa system and our commitment to providing exceptional customer service. We work closely with each of our clients to understand their unique needs and tailor our services to ensure their success.
                            Our consultancy prides itself on our extensive knowledge of the UK visa system and our commitment to providing exceptional customer service. We work closely with each of our clients to understand their unique needs and tailor our services to ensure their success.
                           
                            We are your premier destination for all your study visa needs in the United Kingdom. Our consultancy is dedicated to helping students from all over the world achieve their dreams of studying in the UK.</p>
                            
                            
                    </div>

{/* About Us */}
<div  className=' w-full h-[230px] flex-1   justify-center items-center '>
    <div className=' top-44 py-4 relative  w-full  justify-center items-center flex-1 text-center  '>
                                <h1 className=' text-[#050338] p-2 font-bold text-6xl '><Link href="/Landing/applyNow">Apply Now</Link></h1>
                  </div>
<Image src={apply_now_header} className='w-full ' />
                            
                    </div>

                    {/* Footer */}
                    <div className='footer   '>
                        <div className=' p-4 w-4/12 h-full  bg-[#050338] align-middle justify-center items-center'>
                        <Image src={logo} className='w-56'/>
                        
                        <div>
                        <h1 className='px-2 text-lg mt-4 text-white'>Get in touch with us</h1>
                          <div className=' p-2 flex flex-row gap-2'>
                          <Link href="https://www.facebook.com/absoverseasconsultant"><FaSquareFacebook color='white' size={30} /> </Link>
                          <Link href="https://www.instagram.com/absoverseasconsultantspk"><FaInstagramSquare color='white' size={30}/> </Link>
                          <Link href="https://wa.me/923005003992">
                            <IoLogoWhatsapp color='white' size={30}/></Link>
                          </div>
                       
                        
                        
                                  
                        </div>
                        </div>
                        

                        <div className=' p-4 rounded-lg  b w-3/12 h-full bg-gradient-to-r from-[#050338] to-blue-900 text-white'>
                          <h1 className='text-2xl'>Our Services</h1>
                          <h5 className='text-white px-4 m-2'><a href="">Student Career Counseling</a></h5>
                          <h5 className='text-white px-4 m-2' ><a href="">Consultation Service</a></h5>
                          <h5 className='text-white px-4 m-2'>Destination Guide</h5>
                          <h5 className='text-white px-4 m-2'>Scholarships</h5>    
                          <h5 className='text-white px-4 m-2'>Financial Guidelines</h5>    
                               
                        </div>
                        {/* bg-[#151d4b] */}
                        <div className=' p-4 rounded-lg w-3/12 h-full bg-gradient-to-r from-[#050338] to-blue-900 text-white '>
                          <h1 className='text-white text-2xl' >Pages</h1>
                          <h5 className='text-white px-4 m-2'><a href="#home">Home</a></h5>
                          <h5 className='text-white px-4 m-2' ><a href="#about">About Us</a></h5>
                          <h5 className='text-white px-4 m-2'>Services</h5>
                          <h5 className='text-white px-4 m-2'>Contact Us</h5>
                          <h5 className='text-white px-4 m-2'><Link href="/Landing/applyNow">Apply Now</Link></h5>
                        </div>

                        <div className=' p-4 rounded-lg w-3/12 h-full  bg-gradient-to-r from-[#050338] to-blue-900 text-white '>
                          <h1 className='text-white text-lg' >Subscribe our Newsletter</h1>
                          <input type="text" name="" id="" className=' rounded-sm p-2 w-full text-black' placeholder='Enter Email address'/>
                          <input type="Button" name="" id="" value="Subscribe" className=' rounded-sm mt-2 bg-slate-100 p-1 cursor-pointer hover:bg-blue-100 text-blue-900 font-bold w-full' />

                          <h1 className='text-white text-lg' >Contact Us</h1>
                          <h6 className='text-white px-4 social_links'>
                            <VscCallIncoming/>
                            +92 300 500 3992</h6>
                          <h6 className='text-white px-4 social_links'>
                            <BsWhatsapp/>
                            <Link href="https://wa.me/923005003992"> +92 300 500 3992</Link>
                          </h6>
                          <h6 className='text-white px-4 social_links'>
                          <MdEmail/>
                            <Link href="">info@absconsultant.co.uk</Link>
                          </h6>
                        </div>
                    </div>
                    {/* bottom line footer */}
                    <div className='copyright '>
                          <p className='text-white text-sm' >All rights reserved &copy; by 2024 ABS Overseas Consultants.</p>

                          
                        </div>

                        <div class="relative flex-1 justify-end items-end  rounded-lg flex -top-20 right-6 cursor-pointer"> <BiArrowToTop size={50} color='white' onClick={getTop} /></div>
                    {/* End of Footer */}
               </div>
               

    </div>
  )
}

export default Homepage