import React from 'react'
import Navbar from '@/app/component/Navbar'
import GreenBlur from '@/app/component/GreenBlur'

export default function page() {
  return (
    <main className="bg-secondary-400 text-white h-[2000px] w-full">
      <div className='absolute left-[-200px] top-[-200px]'>
        <GreenBlur/>
      </div>
      <Navbar/>
      <div className='pt-60 container mx-auto px-4'>
        <div className='Register'>Register</div>
      </div>
    </main>
  )
}
