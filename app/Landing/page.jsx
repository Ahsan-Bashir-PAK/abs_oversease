'use client'

import {React} from 'react'
import Link from 'next/link';
import Image from 'next/image';
import logo from '../img/logo.png';
import slider from '../img/slider.jpeg'
import visitor from '../img/visitor.jpg'
import study from '../img/study.jpg'
import job from '../img/job.jpg'
import immig from '../img/immig.jpg'
import about_us from '../img/about_us.jpg'
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { VscCallIncoming } from "react-icons/vsc";
import { BsWhatsapp } from "react-icons/bs";
import'../Landing/landing.css'
const Homepage = () => {
  

   return (
    
          <div className='border-black w-full h-[2300px]  flex '>
             {/* Main Screen */}
             <div className='border-black 
              bg-cyan-600-100 w-10/12 h-full m-auto flex flex-col '>
                    {/* Menu bar from-red-600 to-orange-500 */}
                    <div className='bg-gradient-to-tr  bg-red-700 flex w-full h-20 p-2 flex-row'>
                      <div className='w-3/12'><Image src={logo} className='w-40 h-14 '/></div>
                      <div className=' w-2/12'></div>
                      <div className=' w-7/12 flex flex-row p-2 gap-4 '>
                          <div className='menu'> <a href="#home">Home</a></div>
                          <div className='menu'><a href="#about">About Us</a></div>
                          <div className='menu'>Services</div>
                          <div className='menu'>Contact Us</div>
                          <div className='menu'><Link href="Landing/applyNow">Apply Now</Link></div>
                          
                          
                          
                      </div>
                      
                    </div>

                    {/* slider */}
                    <div className='bg-black flex'>
                      
                    <div className='border-black    w-full h-80 overflow-hidden'>
                      <Image src={slider} />
                    </div>
                    <div className=' flex absolute w-10/12  items-center align-middle p-6  h-96 flex-col'>
                     <p className=' font-bold text-black bg-white p-4 rounded-md'>ABS Overseas Education</p>
                     <br/><p className='text-white'>Get Study Visa- UK</p>
                      </div>
                    </div>
                    
                    {/* End of  slider */}

                    {/* body below slider */}
                    <div className=' p-4  w-full h-[380px] overflow-hidden flex-row flex gap-2'>
                          <div className='tabs'>
                          <Image src={study} className='h-56 hover:cursor-pointer 
                          '/>
                            <div className='tabs_img '>
                              <h1 className='text-white '>VISA Consultancy</h1>
                            </div>
                          </div>
                          <div className='tabs'>
                          <Image src={visitor} className='h-56 hover:cursor-pointer 
                          '/>
                            <div className='tabs_img '>
                              <h1 className='text-white '>Personalized Assistance</h1>
                            </div>
                          </div>
                          <div className='tabs'>
                          <Image src={job} className='h-56 hover:cursor-pointer 
                          '/>
                            <div className='tabs_img '>
                              <h1 className='text-white '>University Selection Assistance</h1>
                            </div>
                          </div>
                          <div className='tabs'>
                          <Image src={immig} className='h-56 hover:cursor-pointer 
                          '/>
                            <div className='tabs_img '>
                              <h1 className='text-white '>IELTS preparations</h1>
                            </div>
                          </div>
                          
                          
                    </div>

                    
                    {/* Services */}
                    <div  className='border-black border-2 w-full h-[500px] overflow-hidden'>
                            <p id="home">HOME sdjf;lsdjf ldsjfkldsjfldskjf lsdjf sdljfklds;j fkldsjf ldsjfldsjfldskjfldsjfldsj flsd</p>
                    </div>

                    {/* About Us */}
                    <div  className='border-black w-full h-[600px] flex flex-row'>
                           
                            <div id="about" className='about_us'>
                            <h1 className='text-black font-bold' >About Us</h1> <br/>
                            <h1 className='text-black font-bold'>Welcome to ABS Overseas Stud Visa UK Consultancy!</h1>
                            
                            We are your premier destination for all your study visa needs in the United Kingdom. Our consultancy is dedicated to helping students from all over the world achieve their dreams of studying in the UK.
                            At ABS Overseas, we understand that navigating the complexities of the UK visa process can be daunting. That's why we offer personalized consultancy services to guide you through every step of the application process. Whether you need assistance with filling out forms, gathering necessary documents, or preparing for interviews, our team of experts is here to support you every step of the way.
                            Our consultancy prides itself on our extensive knowledge of the UK visa system and our commitment to providing exceptional customer service. We work closely with each of our clients to understand their unique needs and tailor our services to ensure their success.
                            <p>In addition to our visa consultancy services, we also provide valuable resources and information to help students make informed decisions about their education in the UK. From selecting the right university or college to finding accommodation and settling into life in the UK, we are here to offer guidance and support at every stage of your journey.</p>
                            <p>At ABS Overseas Stud Visa UK Consultancy, we believe that education has the power to transform lives, and we are dedicated to helping students from around the world access the opportunities available in the UK. Contact us today to learn more about how we can help you achieve your academic goals in the UK!</p>
                            </div>
                            <div className='w-4/12 p-2 border-black'>
                            <Image src={about_us} className='h-56 hover:cursor-pointer 
                          '/>
                            </div>
                            
                            
                             
                    </div>

                    {/* Footer */}
                    <div className='footer   '>
                        <div className=' p-4 w-4/12 h-full  bg-[#050338] align-middle justify-center items-center'>
                        <Image src={logo} className='w-56'/>
                        
                        </div>

                        <div className=' p-4 rounded-lg  b w-3/12 h-full bg-gradient-to-r from-[#050338] to-blue-900 text-white'>
                                <h1 className='text-2xl'>
                                  Social Links
                                  </h1>
                                <h4 className='social_links'>
                                <FaSquareFacebook color='blue'/>
                                  <Link href="https://www.facebook.com/absoverseasconsultant">Facebook </Link></h4>
                                <h4 className='social_links'>
                                <FaInstagramSquare color='red'/>
                                  <Link href="https://www.instagram.com/absoverseasconsultantspk">Instagram</Link></h4>
                                <h4 className='social_links'>
                                <IoLogoWhatsapp color='green'/>
                                  <Link href="https://wa.me/923005003992">WhatsApp</Link></h4>
                               
                        </div>
                        {/* bg-[#151d4b] */}
                        <div className=' p-4 rounded-lg w-3/12 h-full bg-gradient-to-r from-[#050338] to-blue-900 text-white '>
                          <h1 className='text-white text-2xl' >Pages</h1>
                          <h5 className='text-white px-4 m-2'><a href="#home">Home</a></h5>
                          <h5 className='text-white px-4 m-2' ><a href="#about">About Us</a></h5>
                          <h5 className='text-white px-4 m-2'>Services</h5>
                          <h5 className='text-white px-4 m-2'>Contact Us</h5>
                        </div>

                        <div className=' p-4 rounded-lg w-3/12 h-full  bg-gradient-to-r from-[#050338] to-blue-900 text-white '>
                          <h1 className='text-white text-lg' >Newsletter Subscribe</h1>
                          <input type="text" name="" id="" className='text-white  rounded-sm p-2' placeholder='Enter Email address'/>
                          <input type="Button" name="" id="" value="Subscribe" className=' rounded-sm mt-2 bg-slate-100 p-1 cursor-pointer hover:bg-blue-100 text-blue-900 font-bold w-full' />

                          <h1 className='text-white text-lg' >Contact Us</h1>
                          <h5 className='text-white px-4 social_links'>
                            <VscCallIncoming/>
                            +92 300 500 3992</h5>
                          <h5 className='text-white px-4 social_links'>
                            <BsWhatsapp/>
                            <Link href="https://wa.me/923005003992"> +92 300 500 3992</Link>
                          </h5>
                        </div>
                    </div>
                    {/* bottom line footer */}
                    <div className='copyright '>
                          <p className='text-white text-sm' >All rights reserved &copy; by 2024 ABS Overseas Consultants.</p>
                        </div>
                    {/* End of Footer */}
               </div>
               

    </div>
  )
}

export default Homepage