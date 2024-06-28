import React from 'react'
import { marker,coin } from '../assets'
const About = () => {
  return (
    <div className='flex flex-col gap-6 py-7 w-full xl:w-[623px]'>
        <div className='flex gap-3 items-center w-full'>
            <p className='sm:text-xl md:text-3xl xl:text-4xl font-semibold text-secondary'>Senior Product Designer</p>
            <p className='text-xs font-medium text-tertiary'>posted 2 days ago</p>
            <div className='flex items-center justify-center gap-1 border border-b rounded-xl xl:w-[57px]'>
                <p className='w-2 h-2 rounded-[50%] bg-dot'></p>
                <p className='text-bor text-[14px] text-center'>Open</p>
            </div>
        </div>
        <div className='flex gap-2 sm:gap-6 xl:gap-10 items-center'>
            <div className='flex items-center gap-2'>
                <img src={marker} alt="marker" />
                <p className='text-[14px] xl:text-xl text-gray-400'>Delware, USA</p>
            </div>

            <div className='flex items-center gap-2'>
                <img src={coin} alt="marker" />
                <p className='md:text-[14px] xl:text-xl text-gray-400'>$300k-$400k</p>
            </div>
        </div>
    </div>
  )
}

export default About