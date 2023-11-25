import Image from 'next/image'
import React from 'react'

const Cardclub = ({icon, label}) => {
  return (
    <div>
      <div
        className="h-full bg-darklight-400 w-full py-4 px-6 rounded-2xl backdrop-blur-sm"
      >
        <div className="flex flex-col gap-3">
          <div className="flex gap-4">
            <Image
              width={25}
              height={50}
              src={icon}
              alt="icon class"
              className=""
            ></Image>
            
            <div className="flex my-auto">
              <div className='text-sm'>{label}</div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Cardclub