"use client"
import React from 'react'
import Image from 'next/image'
import { useState } from 'react';

const ProductImages = () => {
  const images = [
    {
      id: 1,
      image: "https://media.istockphoto.com/id/1437377497/de/foto/fr%C3%B6hliche-afroamerikanische-mutter-und-tochter-haben-spa%C3%9F-am-weihnachtstag-zu-hause.jpg?s=1024x1024&w=is&k=20&c=YKDsS7KmBPMgJlab-ulLiLNBOPTziPjbFSy-NXVSSEo="
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/383646/pexels-photo-383646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/716658/pexels-photo-716658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/754430/pexels-photo-754430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ]
  const [index, setIndex] = useState(0);

  return (
    <div className=''>
      <div className='h-[500px] relative'>
        <Image 
          className='object-cover rounded-md' 
          src={images[index].image} 
          fill 
          sizes='(max-width: 768px) 100vw, 50vw' 
          alt="Product image"
        />
      </div>

      <div className='flex justify-between gap-4 mt-8'>
        {images.map((img, i) => (
          <div 
            key={img.id} 
            className='relative w-1/4 h-32 cursor-pointer'
            onClick={() => setIndex(i)}
          >
            <Image 
              className={`object-cover rounded-md ${index === i ? 'border-2 border-blue-500' : ''}`}
              src={img.image} 
              fill 
              sizes='(max-width: 768px) 25vw, 15vw'
              alt={`Product thumbnail ${i + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductImages