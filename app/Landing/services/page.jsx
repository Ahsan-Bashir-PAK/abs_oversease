'use client'

import {React} from 'react'
import Link from 'next/link';
import Image from 'next/image'
import blog from '../../img/blog.png'
import about_us from '../../img/about_us.jpg'
import { TfiDirectionAlt } from "react-icons/tfi";
import '../../Landing/landing.css'
const ApplyNow = () => {

  return (
    <div className='w-full h-[1200px] bg-slate-100 flex-1'>
        {/* Banner Div */}
        <div className='w-full h-[400px] bg-slate-500 flex flex-wrap'>
        <Image src={blog} className='w-full'/>
        </div>

        {/* Title Div */}
        <div className='apply_div' >
                <div className='flex flex-row gap-4'>
                    <h1 className='text-4xl font-bold text-red-600'>
                   FIND LATEST BLOGS</h1>
                    
                </div>
   
        </div>
        
        {/* BLOG POSTS Div */}
        <div  className='border-black w-full h-[660px] flex  justify-evenly text-justify '>
                      <p className='text-xl justify-center p-4 leading-1'>
                          
                          <Image src={about_us} className='float-left h-96 w-2/5 mr-6 mb-4 rounded-2xl shadow-lg shadow-black text-justify'/>
                          <b>Welcome to ABS Overseas Consultants (Pvt) Ltd</b>, your gateway to global education and boundless opportunities! We are a dynamic team of professionals dedicated to guiding you through the exciting journey of studying abroad i.e. United Kingdom (UK), 
                          Australia, Canada and Euorpe as well.
                          <br/>
                          At ABS Overseas Consultants, we recognize the transformative power of international education. Whether it's exploring new cultures, mastering a foreign language, or gaining hands-on experience in your field of study, studying abroad opens doors to a world of possibilities.
                          <br/>
                          Our mission is to simplify the complex process of securing student visas and navigating the intricacies of international education. With years of expertise and a deep understanding of immigration regulations, we are committed to providing you with the guidance and support you need to make your dream of studying abroad a reality.
                          <br/><br/>
                          What sets us apart is our personalized approach. We understand that every student is unique, with their own aspirations, challenges, and dreams. That's why we take the time to listen to your goals and tailor our services to meet your specific needs. From selecting the right course and university to preparing meticulous visa documentation, our experienced consultants are here to support you every step of the way.
                          <br/>
                          At ABS Overseas Consultants, integrity, transparency, and professionalism are the cornerstones of our business. We believe in providing honest advice and ethical assistance to ensure your journey abroad is smooth and successful.
                          
                          Join  <b>ABS Overseas Consultants</b> be your trusted career partner as you take the first step towards a brighter future! <Link href="/Landing/applyNow" className='hover:cursor-pointer text-lg font-bold text-blue-950'>Apply Now</Link>


                           </p>
                            
                            
                    </div>
    </div>
  )
}

export default ApplyNow