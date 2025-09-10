import React from 'react'
import { CardImage } from './CardImage';


export interface CardData {
    image: string;
    title: string;
    description: string;
}

interface CardProps {
    card: CardData
}

export const Card: React.FC<CardProps> = ({card}) => {
  return (
    <div className='shadow-[0px_13px_19px_0px_rgba(0,0,0,0.07)] px-[40px] py-[35px] w-[328px] max-customlg:w-full max-customsm:w-[328px]'>
        <CardImage image={card.image}/>
        <h5 className='mb-[20px]'>{card.title}</h5>
        <span className='mb-[20px] block w-[50px] h-[2px] bg-danger'></span>
        <p className='text-secondText font-normal text-[14px] tracking-[0.2px] leading-[20px]'>{card.description }</p>
    </div> 
  )
}
