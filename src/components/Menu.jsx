import React from 'react'

const Menu = () => {
  return (
   <>
    <div className='px-24 h-[67px] border border-solid border-gray-300 w-full flex'>
        <div className='flex gap-[72px] items-center font-sans text-xl relative'>
            <p className='text-primary font-bold underline underline-offset-[25px]'>Job Preview</p>
            <p className='text-gray-400 font-medium'>Applicants</p>
            <p className='text-gray-400 font-medium'>Match</p>
            <p className='text-gray-400 font-medium'>Messages</p>
        </div>
    </div>
   </>
  )
}

export default Menu

