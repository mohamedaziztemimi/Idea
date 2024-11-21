"use client"

import Image from "next/image"
import { useEffect, useState } from "react";

const Slider = () => {

    const ideas = [
        {
            date: 'May 11, 2021',
            title: 'Self-Watering Plant Pot',
            category: 'Gardening',
            image: 'https://images.pexels.com/photos/6509143/pexels-photo-6509143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            owner: 'John Doe',
        },
        {
            date: 'June 25, 2023',
            title: 'Portable Solar Charger',
            category: 'Technology',
            image: 'https://images.pexels.com/photos/4195325/pexels-photo-4195325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            owner: 'Jane Smith',
        },
        {
            date: 'March 15, 2022',
            title: 'Customizable Wall Calendar',
            category: 'Home Decor',
            image: 'https://images.pexels.com/photos/18631360/pexels-photo-18631360/free-photo-of-lumineux-leger-art-france.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            owner: 'Alice Brown',
        },
        {
            date: 'October 8, 2024',
            title: 'AI-Powered Recipe Assistant',
            category: 'Food & Cooking',
            image: 'https://images.pexels.com/photos/5907568/pexels-photo-5907568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            owner: 'Bob Martin',
        },
        {
            date: 'December 1, 2023',
            title: 'Foldable Electric Bike',
            category: 'Transportation',
            image: 'https://images.pexels.com/photos/20409349/pexels-photo-20409349/free-photo-of-ville-jaune-velo-bicyclette.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            owner: 'Charlie Davis',
        },
        {
            date: 'April 20, 2023',
            title: 'Reusable Silicone Food Wraps',
            category: 'Eco-Friendly',
            image: 'https://images.pexels.com/photos/5237892/pexels-photo-5237892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            owner: 'Diana Evans',
        },
        {
            date: 'August 19, 2024',
            title: 'Pocket-Sized Language Translator',
            category: 'Travel',
            image: 'https://images.pexels.com/photos/5409045/pexels-photo-5409045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            owner: 'Ethan Hill',
        },
        {
            date: 'February 14, 2023',
            title: 'Smart Coffee Mug with Temperature Control',
            category: 'Lifestyle',
            image: 'https://images.pexels.com/photos/15085524/pexels-photo-15085524/free-photo-of-aube-soleil-couchant-coucher-de-soleil-coucher-du-soleil.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            owner: 'Fiona Green',
        },
    ];
    const [current, Setcurrent] = useState(0);
    useEffect(()=>{
       
     
            Setcurrent(prev=>prev++);
        


    },[1000])

    

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden ">
            <div className=" transition-all ease-in delay-1000  flex w-[calc(360vh*3)] gap-3 mx-6  mt-8"  style={{
                    transform: `translateX(${current*100}vw)`,
                }}
            >
                {ideas.map((idea,index) => (
                    <div key={index} >
                        
                        <div className="relative cursor-pointer hover:scale-110 hover:z-20 hover:shadow-xl bg-gradient-to-tr from-cyan-100   ">
                            <Image src={idea.image} className="object-cover rounded-md  " alt={idea.title} height={460} width={360}  />
                            <div className=" absolute bottom-20 left-1/4  w-full">
                            <div className="flex gap-1 ">
                                <p className="text-white"> {idea.date}by </p>
                                <p className="text-red-600">{idea.owner}</p>
                            </div>

                            <h1 className="text-white" > {idea.title}</h1>

                        </div>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
  )
}

export default Slider