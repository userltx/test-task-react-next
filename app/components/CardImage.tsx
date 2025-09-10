import React from 'react'
import Image from 'next/image'


type CardImageProp = {
    image: string 
}

export const CardImage: React.FC<CardImageProp> = ({image}) => {
  return (
    <div 
    className='
    mb-[20px] 
    rounded-full 
    flex 
    justify-center 
    w-[72px]
    h-[72px]
    bg-danger'>
        <Image 
            src={image}
            alt=""
            width={32}
            height={32}
        />
    </div>
  )
}
