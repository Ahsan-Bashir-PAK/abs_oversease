'use client'

import {React} from 'react'
import Image from 'next/image'
import blog from '../../img/blog.png'
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
                   FIND LATEST BLOGS / ARTICLES</h1>
                    
                </div>
   
        </div>
        
        {/* BLOG POSTS Div */}
        <div className=' w-full p-2 flex flex-row justify-center items-center text-center'>
          <div className='w-4/12 h-[300px]'>
                  <h1 className='bg-blue-950 text-lg p-2 font-bold text-white'>
                  How Students Can Beat Language Problems in the UK</h1>
            </div>
            <div className=' w-4/12 h-[300px]'>
                  <h1 className='bg-blue-950 text-lg p-2 font-bold text-white'>
                  Easy Guide to Getting a Master Degree in London</h1>
            </div>
            <div className=' w-4/12 h-[300px]'>
                  <h1 className='bg-blue-950 text-lg p-2 font-bold text-white'>
                  Making Sense of the UKs Immigration Health Surcharge: What You Need to Know</h1>
            </div>
            
        </div>
    </div>
  )
}

export default ApplyNow