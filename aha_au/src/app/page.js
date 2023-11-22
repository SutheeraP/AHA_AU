import Image from 'next/image'
import Navbar from './component/Navbar'
import GreenBlur from './component/GreenBlur'

export default function Home() {
  return (
    <main className="bg-secondary-400 text-white h-[2000px] w-full">
      <div className='absolute left-[-200px] top-[-200px]'>
        <GreenBlur/>
      </div>
      <Navbar/>
      <div className='pt-60 container mx-auto px-4'>
        <div className='text-6xl'>Home</div>
      </div>
    </main>
  )
}
