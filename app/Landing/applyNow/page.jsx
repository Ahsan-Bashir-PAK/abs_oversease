'use client'

import {React, useState} from 'react'
import Image from 'next/image'
import apply from '../../img/apply_now.png'
import { TfiDirectionAlt } from "react-icons/tfi";
import '../../Landing/landing.css'
const ApplyNow = () => {

const  defaults = {
      name: "",
      qualification:"", 
      email:"", 
      cell:"", 
      city:"", 
      country:"", 
      question:""
} 

const [data, setData] = useState(defaults)
function studentApply () {
      if(data.name == "") { alert("Please Enter your name")}
        else if(data.qualification == "") { alert("Please Enter Qualification")}
        else if(data.email == "") { alert("Please Enter your email address")}
        else if(data.cell == "") { alert("Please Enter your Cell Number")}
        else if(data.city == "") { alert("Please Enter your City Name")}
        else if(data.country == "") { alert("Please Enter your Destination Country")}
        else if(data.question == "") { alert("Please Enter your Question / Query")}
        else { alert("Thanks! Our represetative will call you soon.")}
}

  return (
    <div className='w-full  h-full bg-slate-500  '>
        <div className='w-full  h-60 bg-slate-500   '>
        <Image src={apply} className='block z-40 '/>
        </div>
        <div className='apply_div' >
                <div className='flex flex-row gap-4'>
                    <h1 className='text-2xl font-bold text-red-600'>
                    Get Free Consultation Now </h1>
                    <TfiDirectionAlt size={30} color='red'/>
                </div>
                <div >
                    <div className='w-80 bg-slate-100'><label htmlFor="name">Name*</label></div>
                    <input type="text" name="name" id="name" 
                    value ={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    /> 
                </div>
                
                
                <div className=' '>
                <div className='w-80 bg-slate-100'><label htmlFor="Qualification">Qualification*</label></div>
                <input type="text" name="" id="Qualification"
                value ={data.qualification}
                onChange={(e) => setData({ ...data, qualification: e.target.value })}
                />
                </div>

                <div className=' '>
                <div className='w-80 bg-slate-100'><label htmlFor="Email">Email</label></div>
                
                <input type="text" name="" id="Email" 
                value ={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                />
                </div>

                <div className=' '>
                <div className='w-80 bg-slate-100'><label htmlFor="Cell Number">Cell Number*</label></div>
                
                <input type="text" name="" id="Cell Number" 
                value ={data.cell}
                onChange={(e) => setData({ ...data, cell: e.target.value })}
                />
                </div>

                <div className=' '>
                
                <div className='w-80 bg-slate-100'><label htmlFor="Districit">Districit / City*</label></div>
                <input type="text" name="" id="Districit" 
                value ={data.city}
                onChange={(e) => setData({ ...data, city: e.target.value })}
                />
                </div>

                <div className=' '>
                <div className='w-80 bg-slate-100 '><label htmlFor="Interested">Interested Country*</label></div>
                <input type="text" name="" id="Interested" 
                value ={data.country}
                onChange={(e) => setData({ ...data, country: e.target.value })}
                
                />
                </div>

                
                
                <div className=' flex flex-row'>
                  <div className='w-80  bg-slate-100 '><label htmlFor="name">Any Question /Query *</label></div>

                  <input type="text" name="" id="questions" 
                
                        onChange={(e) => setData({ ...data, question: e.target.value })}
                        
                      />
                      
                    
               
                </div>
                
                <div className=' '>
                <div className='w-80 bg-slate-100 text-wrap'></div>
                
                <input type="button" value="Apply Now" className='bg-red-600 w-full text-white border-none cursor-pointer' onClick={studentApply} />
                </div>

              
        </div>
    </div>
  )
}

export default ApplyNow