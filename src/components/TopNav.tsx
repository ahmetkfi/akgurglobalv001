import React from 'react'
import Image from 'next/image'
const TopNav = () => {
  return (
   <nav className='flex items-center'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 '>
        <div className='flex flex-row items-center '>
        <a href='/'>
                <Image
                src='/vector.svg'
                width={200}
                height={200}
                alt='akgurglobal_logo'
                />
            </a>
            <div className='flex flex-row justify-between'>
                <span className=' text-[#ed0040] text-4xl font-extrabold'>AKGUR</span>
                <span className='text-[#2d201a] text-4xl'>GLOBAL</span> 
            </div>
        
      </div>
            
        </div>
   </nav>
  )
}

export default TopNav