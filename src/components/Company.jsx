import React from 'react'
import { atlasSq } from '../assets'
const Company = () => {

    const info = [
        {
            title : 'Company size',
            desc : '1k - 2k Employees'
        },
        {
            title : 'Sector',
            desc : 'Information Technology, Infrastructure'
        },
        {
            title : 'Founded In',
            desc : '2019'
            
        }
    ]

    const info2 = [
        {
            title : 'Type',
            desc : 'Private'
        },
        {
            title : 'Funding',
            desc : 'Bootstrapped'
        },
        {
            title : 'Founded By',
            desc : 'Scott Farquhar, Mike Cannon-Brookes'
            
        }
    ]

    const col = 2;
  return (
    <>
    <div className='border-b w-full'>
        <div className='py-7 flex xl:w-[736px] flex-col gap-4'>
           <div className='flex gap-2 w-36 py-2 pr-2 items-center'>
            <img src={atlasSq}></img>
            <p className='text-gray-500 text-xl'>Atlassian</p>

           </div>
           <div className='flex gap-12 w-full'>
                <div className='flex flex-col gap-4'>
                    {
                        info.map((ele,i) => (
                         <div key={i}>
                                 <h4 className='text-gray-500 text-[14px]'>{ele.title}</h4>
                                 <p className='text-[16px]'>{ele.desc}</p>
                            </div>
                        ))
                    }
                </div>
                <div className='flex flex-col gap-4'>
                {
                        info2.map((ele,i) => (
                         <div key={i}>
                                 <h4 className='text-gray-500 text-[14px]'>{ele.title}</h4>
                                 <p className='text-[16px]'>{ele.desc}</p>
                            </div>
                        ))
                    }
                </div>
           </div>
        </div>
    </div>
    </>
  )
}

export default Company