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
const Homepage = () => {
  

   return (
    
          <div className='border-black w-full h-[1500px] bg-gradient-to-tr from-slate-300 to-slate-50 flex '>
             {/* Main Screen */}
             <div className='border-black 
              bg-cyan-600-100 w-10/12 h-full m-auto flex flex-col '>
                    {/* Menu bar */}
                    <div className='bg-gradient-to-tr from-orange-600 to-orange-500 flex w-full h-20 p-2 '>
                      <Image src={logo} className='w-40 h-16 '/>
                    </div>


                    {/* slider */}
                    <div className='bg-black flex'>
                      
                    <div className='border-black  opacity-40  w-full h-80 overflow-hidden'>
                      <Image src={slider} className=''/>
                    </div>
                    <div className='top-24 flex absolute w-3/12 justify-left items-center align-middle bg-slate-700 p-6 '>
                     Contact US
                      </div>
                    </div>
                    


                    {/* body below slider */}
                    <div className='border-black p-4  w-full h-80 overflow-hidden flex-row flex gap-2'>
                          <div className=' rounded-md bg-slate-300 p-2 border-blue-900  h-64 w-3/12 overflow-hidden
                          transition ease-in-out delay-100
                          hover:-translate-y-3
                          hover:brightness-125
                          '>
                          <Image src={study} className='h-56 hover:cursor-pointer 
                          '/>
                            <div className='bg-amber-800 opacity-90 hover:opacity-100 hover:cursor-pointer justify-center items-center text-center relative '>
                              <h1 className='text-white '>UK VISA UK VISA</h1>
                            </div>
                          </div>
                          <div className=' rounded-md bg-slate-300 p-2 border-blue-900  h-64 w-3/12 overflow-hidden
                          transition ease-in-out delay-100
                          hover:-translate-y-3
                          hover:brightness-125
                          '>
                          <Image src={study} className='h-56 hover:cursor-pointer 
                          '/>
                            <div className='bg-amber-800 opacity-90 hover:opacity-100 hover:cursor-pointer justify-center items-center text-center relative '>
                              <h1 className='text-white '>UK VISA UK VISA</h1>
                            </div>
                          </div>
                          <div className=' rounded-md bg-slate-300 p-2 border-blue-900  h-64 w-3/12 overflow-hidden
                          transition ease-in-out delay-100
                          hover:-translate-y-3
                          hover:brightness-125
                          '>
                          <Image src={study} className='h-56 hover:cursor-pointer 
                          '/>
                            <div className='bg-amber-800 opacity-90 hover:opacity-100 hover:cursor-pointer justify-center items-center text-center relative '>
                              <h1 className='text-white '>UK VISA UK VISA</h1>
                            </div>
                          </div>
                          <div className=' rounded-md bg-slate-300 p-2 border-blue-900  h-64 w-3/12 overflow-hidden
                          transition ease-in-out delay-100
                          hover:-translate-y-3
                          hover:brightness-125
                          '>
                          <Image src={study} className='h-56 hover:cursor-pointer 
                          '/>
                            <div className='bg-amber-800 opacity-90 hover:opacity-100 hover:cursor-pointer justify-center items-center text-center relative '>
                              <h1 className='text-white '>UK VISA UK VISA</h1>
                            </div>
                          </div>
                          
                          
                    </div>

                    
                    
                    {/* Footer */}
                    <div className='border-black border-2 w-full h-80 overflow-hidden'>

                    </div>
               </div>
               

    </div>
  )
}

export default Homepage