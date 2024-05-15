'use client'

import {React} from 'react'
import Link from 'next/link';
import Image from 'next/image';
import logo from '../img/logo.png';
import slider from '../img/slider.png'
import university from '../img/university.png'
import visa from '../img/visa.png'
import scholorship from '../img/scholorship.png'

import career from '../img/career.png'
import about_us from '../img/about.png'
import apply_now_header from '../img/apply-now-header1.png'
import france from '../img/france.png'
import uk from '../img/UK.png'

import  australia from '../img/australia.png'
import  germany from '../img/germany.png'
import  canada from '../img/canada.png'
import  austria from '../img/austria.png'
import  student_pic from '../img/shoaib.png'
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { VscCallIncoming } from "react-icons/vsc";
import { BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BiArrowToTop } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { PiTiktokLogoFill } from "react-icons/pi";
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
                    <div className=' flex flex-1 '>
                      
                    <div className=' bg-red-600 w-full h-[400px]  border-b border-red-700 justify-center items-center overflow-hidden'>
                      <Image src={slider} className='w-full h-fit overflow-hidden' fill={false} loading = 'eager'  />
                    </div>
                      {/* <div className=' flex absolute w-10/12  items-center align-middle p-6  h-96 flex-col'>
                      <p className=' font-bold text-black bg-white p-4 rounded-md'>ABS Overseas Education</p>
                      <br/><p className='text-white'>Get Study Visa- UK</p>
                        </div> */}
                    </div>
                    
                    {/* End of  slider */}
                    <div className=' bg-slate-200 p-4 mt-2 w-full h-[80px]  flex-1 gap-2  flex justify-center items-center'>
                            <h1 className='font-bold text-4xl text-center text-blue-950'> Services We Offer!</h1>
                    </div>
                    {/* body below slider */}
                    <div className=' p-2  w-full h-[380px] overflow-hidden flex-row flex gap-2'>
                          
                          <div className='tabs   '>
                          <Image src={career} alt="Career Councelling" className='h-80 hover:cursor-pointer 
                          '/>
                            <div className='tabs_heading '>
                            <h1 className=' '>Career Councelling</h1>
                            </div>
                          </div>
                         
                          <div className='tabs'>
                          <Image src={university} alt="University Selection Process" className='h-80 hover:cursor-pointer 
                          '/>
                            <div className='tabs_heading '>
                              <h1 className=' '>University Selection </h1>
                            </div>
                          </div>
                          <div className='tabs'>
                          <Image src={scholorship} alt="Scholorships & Financial Aid" className='h-80 hover:cursor-pointer 
                          '/>
                            <div className='tabs_heading '>
                              <h1 className=' '>Scholorships & Financial Aid</h1>
                            </div>
                          </div>
                          <div className='tabs'>
                          <Image src={visa} alt="VISA Guidance & Processing" className='h-80 hover:cursor-pointer 
                          '/>
                            <div className='tabs_heading '>
                              <h1 className=''>VISA Guidance & Processing</h1>
                            </div>
                          </div>
                          
                          
                    </div>
                  
                    <div className=' bg-slate-200 p-4 mt-2 w-full h-[80px]  flex-1 gap-2  flex justify-center items-center'>
                            <h1 className='font-bold text-4xl text-center text-blue-950'> Offering Abroad Study Visas!</h1>
                    </div>
                    {/* body below slider */}
                    <div className=' p-2  w-full h-[380px] overflow-hidden flex-row flex gap-2'>
                          
                          <div className='  w-4/12 border-black  '>
                          <Image src={uk} className='h-80 hover:cursor-pointer w-full
                          '/>
                            <div className='tabs_heading  '>
                            <h1 className='text-xl font-semibold'>United Kingdom</h1>
                            </div>
                          </div>
                          <div className='w-4/12 '>
                          <Image src={france} className='h-80 hover:cursor-pointer w-full
                          '/>
                            <div className='tabs_heading '>
                              <h1 className='text-xl font-semibold'>France</h1>
                            </div>
                          </div>
                          <div className='w-4/12'>
                          <Image src={australia} className='h-80 hover:cursor-pointer w-full
                          '/>
                            <div className='tabs_heading '>
                              <h1 className='text-xl font-semibold'>Australia</h1>
                            </div>
                          </div>
                          
                          
                          
                    </div>
                    <div className=' p-2  w-full h-[380px] overflow-hidden flex-row flex gap-2'>
                          
                          <div className='  w-4/12 border-black  '>
                          <Image src={germany} className='h-80 hover:cursor-pointer w-full
                          '/>
                            <div className='tabs_heading  '>
                            <h1 className='text-xl font-semibold'>Germany</h1>
                            </div>
                          </div>
                          <div className='w-4/12 '>
                          <Image src={canada} className='h-80 hover:cursor-pointer w-full
                          '/>
                            <div className='tabs_heading '>
                              <h1 className='text-xl font-semibold'>Canada</h1>
                            </div>
                          </div>
                          <div className='w-4/12'>
                          <Image src={austria} className='h-80 hover:cursor-pointer w-full
                          '/>
                            <div className='tabs_heading '>
                              <h1 className='text-xl font-semibold'>Austria</h1>
                            </div>
                          </div>
                          
                          
                          
                    </div>
                  
                    
                   

                    <div className=' p-4 bg-slate-200 w-full h-[80px]  flex-1 gap-2  flex justify-center items-center'>
                            <h1 className='font-bold text-4xl text-center text-blue-950'> About Us!</h1>
                    </div>

                    {/* About Us */}
                    <div  className='border-black w-full h-[400px] flex  justify-evenly text-justify '>
                      <p className='text-xl justify-center p-4 leading-1'>
                          
                          <Image src={about_us} className='float-left h-72 w-2/5 mr-6 mb-4 rounded-2xl shadow-lg shadow-black text-justify'/>
                          <b>Welcome to ABS Overseas Consultants (Pvt) Ltd</b>, your gateway to global education and boundless opportunities! We are a dynamic team of professionals dedicated to guiding you through the exciting journey of studying abroad i.e. United Kingdom (UK), 
                          Australia, Canada and Euorpe as well.
                          <br/>
                          At ABS Overseas Consultants, we recognize the transformative power of international education. Whether it is exploring new cultures, mastering a foreign language, or gaining hands-on experience in your field of study, studying abroad opens doors to a world of possibilities.
                          <br/>
                          Our mission is to simplify the complex process of securing student visas and navigating the intricacies of international education. With years of expertise and a deep understanding of immigration regulations, we are committed to providing you with the guidance and support you need to make your dream of studying abroad a reality.
                          <Link href="/Landing/aboutUs" className='hover:cursor-pointer text-lg font-bold text-blue-950'> read more...</Link>


                           </p>
                            
                            
                    </div>

{/* Testimonials */}
                    <div className=' bg-slate-200 p-4 mt-2 w-full h-[80px]  flex-1 gap-2  flex justify-center items-center'>
                            <h1 className='font-bold text-4xl text-center text-blue-950'> Testimonials</h1>
                    </div>

                    <div className=' p-4  w-full h-[420px] overflow-hidden flex-row flex gap-4'>
                          
                          <div className=' p-6 text-lg  w-6/12 border-black bg-gradient-to-r from-slate-200 to-slate-400 hover:bg-gradient-to-bl text-justify '>
                            <p>ABS Overseas Consultants provided me invaluable assistance throughout my visa application process. The comprehensive resources and personalized guidance helped me navigate the complexities with confidence. Thanks to their support, I successfully obtained my study visa and am now pursuing my dreams study abroad i.e. UK. I highly recommend this platform to any student seeking visa assistance.</p>
                            <h4>Shoaib Amjad, Pakistan</h4>
                            <div className='tabs_heading border rounded-full overflow-hidden ml-48 border-black w-40 h-40 flex-1 items-center justify-center text-center '>
                            <Image src={student_pic} className='rounded-full'/>
                            </div>
                          </div>
                          <div className='  p-6 text-lg  w-6/12 border-black bg-gradient-to-bl from-slate-200 to-slate-400 hover:bg-gradient-to-r text-justify '>
                            <p>ABS Overseas Consultants provided me invaluable assistance throughout my visa application process. The comprehensive resources and personalized guidance helped me navigate the complexities with confidence. Thanks to their support, I successfully obtained my study visa and am now pursuing my dreams study abroad i.e. UK. I highly recommend this platform to any student seeking visa assistance.</p>
                            <h4>Sumbal Chuhan, Pakistan</h4>
                            <div className='tabs_heading border rounded-full overflow-hidden ml-48 border-black w-40 h-40 flex-1 items-center justify-center text-center '>
                            <Image src={student_pic} className='rounded-full'/>
                            </div>
                          </div>
                          
                          
                          
                          
                    </div>
                    <div className=' bg-slate-200 p-4 mt-2 w-full h-[80px]  flex-1 gap-2  flex justify-center items-center'>
                            <h1 className='font-bold text-4xl text-center text-blue-950'>Blogs / Article</h1>
                    </div>

                    <div className=' bg-slate-100 p-2 mt-2 w-full h-[80px]  flex-1 gap-2  flex justify-left items-left'>
                            <h1 className='ml-4 hover:cursor-pointer font-bold text-xl text-center text-blue-950'><Link href="/Landing/blog">How Students Can Beat Language Problems in the UK</Link></h1>
                            
                    </div>
                    <div className=' bg-slate-100 p-2 mt-2 w-full h-[80px]  flex-1 gap-2  flex justify-left items-left'>
                            <h1 className=' ml-4  font-bold text-xl text-center text-blue-950 hover:cursor-pointer'>Easy Guide to Getting a Master Degree in London</h1>
                            
                    </div>
                    <div className=' bg-slate-100 p-2 mt-2 w-full h-[80px]  flex-1 gap-2  flex justify-left items-left'>
                            <h1 className='ml-4 hover:cursor-pointer font-bold text-xl text-center text-blue-950'>Making Sense of the UK Immigration Health Surcharge: What You Need to Know</h1>
                            
                    </div>

{/* apply now  */}
<div  className=' w-full h-[240px] flex-1  justify-center items-center back '>
  
    {/* <div className=' h-[282px] border bg-[#050338] opacity-40  hover:opacity-90 w-full  justify-center items-center flex-1 text-center absolute '>
                                <h1 className=' text-white p-2 font-bold text-6xl mt-24'><Link href="/Landing/applyNow">Apply Now</Link></h1>
                  </div> */}
<Image src={apply_now_header} className='w-full bg-fixed' />
                            
                    </div>

                    {/* Footer */}
                    <div className='footer   '>
                        <div className=' p-4 w-4/12 h-full  bg-[#050338] align-middle justify-center items-center'>
                        <Image src={logo} className='w-56'/>
                        
                        <div>
                        <h1 className='px-2 text-lg mt-4 text-white'>Get connected through Social Media</h1>
                          <div className=' p-2 flex flex-row gap-2'>
                          <Link href="https://www.facebook.com/absoverseasconsultant"><FaSquareFacebook color='white' size={30} /> </Link>
                          <Link href="https://www.instagram.com/absoverseasconsultantspk"><FaInstagramSquare color='white' size={30}/> </Link>
                          <Link href="https://wa.me/923005003992">
                            <IoLogoWhatsapp color='white' size={30}/></Link>
                            <Link href="https://www.linkedin.com/company/abs-overseas-consultants">
                            <FaLinkedin color='white' size={30}/></Link>
                            <Link href="absconsultant.co.uk">
                            <PiTiktokLogoFill color='white' size={30}/></Link>
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
                          <h5 className='text-white px-4 m-2'><Link href="/">Home</Link></h5>
                          <h5 className='text-white px-4 m-2' ><Link href="/Landing/aboutUs">About Us</Link></h5>
                          <h5 className='text-white px-4 m-2'><Link href="/Landing/services">Services</Link></h5>
                          <h5 className='text-white px-4 m-2'><Link href="/Landing/applyNow">Apply Now</Link></h5>
                          <h5 className='text-white px-4 m-2'><Link href="/Landing/blog">Blog</Link></h5>
                          
                        </div>

                        <div className=' p-4 rounded-lg w-3/12 h-full  bg-gradient-to-r from-[#050338] to-blue-900 text-white '>
                          <h1 className='text-white text-lg mb-2' >Subscribe our Newsletter</h1>
                          <input type="text" name="" id="" className=' rounded-sm p-2 w-full text-black' placeholder='Enter Email address'/>
                          <input type="Button" name="" id="" value="Subscribe" className=' rounded-sm mt-2 bg-slate-100 p-1 cursor-pointer hover:bg-blue-100 text-blue-900 font-bold w-full' />

                          <h1 className='text-white text-lg mt-4' >Contact Us</h1>
                          <h6 className='text-white  social_links'>
                            <VscCallIncoming/>
                            +92 300 500 3992</h6>
                          <h6 className='text-white  social_links'>
                            <BsWhatsapp/>
                            <Link href="https://wa.me/923005003992"> +92 300 500 3992</Link>
                          </h6>
                          <h6 className='text-white social_links'>
                          <MdEmail/>
                            <Link href="">info@absconsultant.co.uk</Link>
                          </h6>
                          <h6 className='text-white text-sm  social_links'>
                          <FaLocationDot/>
                            <Link href="">Main Market, Gulberg-II, Lahore</Link>
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