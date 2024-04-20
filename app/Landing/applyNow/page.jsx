'use client'

import {React} from 'react'
import Image from 'next/image'
import apply from '../../img/apply_now.png'
import { TfiDirectionAlt } from "react-icons/tfi";
import '../../Landing/landing.css'
const ApplyNow = () => {

  return (
    <div className='w-full  h-fit bg-slate-500'>
        <div className='w-full  h-60 bg-slate-500'>
        <Image src={apply} />
        </div>
        <div className='apply_div' >
                <div className='flex flex-row gap-4'>
                    <h1 className='text-2xl font-light text-red-600'>
                    Get Free Consultation Now </h1>
                    <TfiDirectionAlt size={30} color='red'/>
                </div>
                <div >
                    <div className='w-80 bg-slate-100'><label htmlFor="name">Name*</label></div>
                    <input type="text" name="name" id="name"  /> 
                </div>
                
                
                <div className=' '>
                <div className='w-80 bg-slate-100'><label htmlFor="Qualification">Qualification*</label></div>
                <input type="text" name="" id="Qualification" />
                </div>

                <div className=' '>
                <div className='w-80 bg-slate-100'><label htmlFor="Email">Email</label></div>
                
                <input type="text" name="" id="Email" />
                </div>

                <div className=' '>
                <div className='w-80 bg-slate-100'><label htmlFor="Cell Number">Cell Number*</label></div>
                
                <input type="text" name="" id="Cell Number" />
                </div>

                <div className=' '>
                
                <div className='w-80 bg-slate-100'><label htmlFor="Districit">Districit / City*</label></div>
                <input type="text" name="" id="Districit" />
                </div>

                <div className=' '>
                <div className='w-80 bg-slate-100'><label htmlFor="Interested">Interested Country*</label></div>
                <input type="text" name="" id="Interested" />
                </div>
                
                <div className=' '>
                <div className='w-80 bg-slate-100 text-wrap'><label htmlFor="name">Any Questions with ABS Overseas Consultant*</label></div>
                
                <input type="text" name="" id="" />
                </div>
                
                <div className=' '>
                <div className='w-80 bg-slate-100 text-wrap'></div>
                
                <input type="button" value="Apply Now" className='bg-red-600 w-full text-white border-none cursor-pointer' />
                </div>

              
        </div>
    </div>
  )
}

export default ApplyNow