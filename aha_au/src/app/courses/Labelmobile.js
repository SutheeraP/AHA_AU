import Image from 'next/image'
import React from 'react'

const Labelmobile = ({icon}) => {
  return (
    <div className="md:hidden w-full pb-12">
        <div className='flex justify-center pb-3'>
            <Image
              width={50}
              height={10}
              src={icon}
              alt="icon class"
              className=""
            ></Image>
        </div>
        
      <div className="flex justify-center font-semibold text-xl tracking-wider">วิชาทฤษฎี</div>
    </div>
  )
}

export default Labelmobile