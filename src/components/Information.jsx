import React from 'react'
import {About,Company,Duties,Skills} from './index'

const Information = () => {
  return (
    <>
        <div className='w-[75%] lg:w-full pl-6 lg:pl-16 xl:pl-24'>
            <About/>
            <Skills/>
            <Duties/>
            <Company/>
        </div>
    </>
  )
}

export default Information