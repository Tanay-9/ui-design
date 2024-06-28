import React from 'react'
import {Information} from './index'
import {Other} from './index'

const Main = () => {
  return (
    <div className='flex w-full h-auto flex-col lg:flex-row'>
        <Information/>
        <Other />
    </div>
  )
}

export default Main