'use client'

import {React} from 'react'
import Link from 'next/link';
import Image from 'next/image'
import services from '../../img/services.png'
import { TfiDirectionAlt } from "react-icons/tfi";
import '../../Landing/landing.css'
const ApplyNow = () => {

  return (
    <div className='w-full h-full bg-slate-100 flex-1'>
        {/* Banner Div */}
        <div className='w-full h-[300px] bg-slate-500 flex flex-wrap'>
        <Image src={services} className='w-full'/>
        </div>

        {/* Title Div */}
        <div className='apply_div' >
                <div className='flex flex-row gap-4'>
                    <h1 className='text-4xl font-bold text-red-600'>
                   SERVICES AT ABS OVERSEAS CONSULTANTS</h1>
                    
                </div>
   
        </div>
        
        {/* BLOG POSTS Div */}
        <div  className='border-black border w-full h-[800px] flex flex-col  justify-evenly text-justify '>
          
          <div className='border border-black w-full flex flex-row h-[400px]'> 
            <div className='border border-black w-3/12'> sdfdsf </div>
            <div className='border border-black w-9/12'> sdfdsf </div>
          </div>

           <div className='border border-black w-full flex flex-row h-[400px]'> 
            <div className='border border-black w-3/12'> sdflex flex-row fdsf </div>
            <div className='border border-black w-9/12'> sdfdsf </div>
          </div>

          <div className='border border-black w-full flex flex-row h-[400px]'> 
            <div className='border border-black w-3/12'> sdflex flex-row fdsf </div>
            <div className='border border-black w-9/12'> sdfdsf </div>
          </div>

        </div>
    </div>
  )
}

export default ApplyNow