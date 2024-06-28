import React from 'react'


import {jobs,message,payments,bell,atlas,arrow} from '../assets/index'
const Nav = () => {
  return (
   <>
    <div className='h-[90px] shadow-custom md:px-4 lg:px-7 flex items-center'>
        <div className='h-[61px] flex items-center justify-between w-full'>
            <div className='lg:w-[100px] w-[80px] flex items-center justify-center ring-0 font-bold text-primary h-full text-xl'>
                Logo
            </div>

            <div className='w-fit xl:w-[438px] h-[64px] flex items-center justify-between'>
                <div className='bg-primary border-2 w-[109px] h-[58px] rounded-[49px] p-2 flex justify-center items-center gap-2'>
                    <img src={jobs} alt='jobs'/>
                    <p className='text-xl text-white'>Jobs</p>
                </div>

                <div className='w-[128px] h-[27px] flex justify-center items-center gap-2 relative'>
                <p className='absolute h-[6px] w-[6px] bg-primary rounded-lg top-[-1px] left-[27px]'></p>
                    <img src={message} alt='message' />
                    <p className='text-xl text-gray-400'>Message</p>
                </div>
                
                <div className='w-[125px] h-[27px] gap-2 flex justify-center items-center'>
                    <img src={payments} alt='payments' />
                    <p className='text-gray-400 text-xl'>Payments</p>
                </div>

            </div>


            <div className='w-32 h-[60px] p-2 flex items-center gap-4'>
                <div className='relative'>
                    <img src={bell} alt='bell-icon'/>
                    <p className='absolute w-[6px] h-[6px] bg-primary rounded-[50%] top-0 right-1'></p>
                </div>
                <div className='flex gap-[6px] w-[66px] items-center'>
                    <img src={atlas} alt='logo'/>
                    <img src= {arrow} alt='down-arrow' />
                </div>
            </div>
        </div>
    </div>
   </>
  )
}

export default Nav;



