import React, { useState } from 'react'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';

const sliderData = [
    {
        url: 'https://images.unsplash.com/photo-1622779536320-bb5f5b501a06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZGl2ZXMlMjBiZWFjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60'
    },
    {
        url: 'https://images.unsplash.com/photo-1556103727-777acb371272?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFsZGl2ZXMlMjBiZWFjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60'
    },
    {
        url: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZGl2ZXMlMjBiZWFjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60'
    },
    
];

const Carousel = () => {
    const [slide, setSlide] = useState(0)
    const length = sliderData.length

    const prevSlide = () =>{
        setSlide(slide === length - 1 ? 0 : slide + 1)
    }
    const nextSlide = () =>{
        setSlide(slide === 0  ? length - 1 : slide - 1)
    }
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center'>
        <BsArrowLeftSquareFill onClick={prevSlide} className='absolute top-[50%] text-3xl text-white cursor-pointer left-8'/>
        <BsArrowRightSquareFill onClick={nextSlide} className='absolute top-[50%] text-3xl text-white cursor-pointer right-8'/>
        {sliderData.map((item, index) => (
            <div className={index===slide ? 'opacity-100' : 'opacity-0'}>
                {index === slide && (<img className='w-full rounded-md ' src={item.url} alt='aaaaaaaa'/>)}  
            </div>
        ))}
    </div>
  )
}

export default Carousel
