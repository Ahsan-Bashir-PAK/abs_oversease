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
                   FIND LATEST BLOGS</h1>
                    
                </div>
   
        </div>
        
        {/* BLOG POSTS Div */}
        <div className='border bg-red-100 w-full p-2 flex flex-row justify-center items-center text-center'>
          <div className='border border-black w-4/12 h-[300px]'>
                  <h1 className='text-4xl font-bold text-red-600'>
                    LATEST BLOGS</h1>
            </div>
            <div className='border border-black w-4/12 h-[300px]'>
                  <h1 className='text-4xl font-bold text-red-600'>
                    LATEST BLOGS</h1>
            </div>
            <div className='border border-black w-4/12 h-[300px]'>
                  <h1 className='text-4xl font-bold text-red-600'>
                    LATEST BLOGS</h1>
            </div>
            
        </div>
    </div>
  )
}

export default ApplyNow