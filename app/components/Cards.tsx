import React from 'react'
import { Card, CardData } from './Card'

export const Cards = () => {
    const cardsArray: CardData[] = [
        {
            image: '/cards-pictures/card-pic-one.svg',
            title: 'Онлайн-прием',
            description: 'Рыба текст'
        },
        {
            image: '/cards-pictures/card-pic-two.svg',
            title: 'Экстренный Случай',
            description: 'Рыба текст'
        },
        {
            image: '/cards-pictures/card-pic-three.svg',
            title: 'Лечение рака',
            description: 'Рыба текст'
        },
    ]

  return (
    <div className='flex justify-between max-customlg:flex-col max-customlg:space-y-[30px] max-customlg:my-[15px] max-customsm:items-center max-customsm:px-[0]'>
        {cardsArray.map((card, index) => (
            <Card card={card} key={index}/>
        ))}
    </div> 
  )
}
