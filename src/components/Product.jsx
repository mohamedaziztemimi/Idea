
import { React, } from 'react'
import Image from 'next/image'
import Link from "next/link";

const Product = () => {

    const ideas = [
        {
            date: 'January 15, 2024',
            title: 'Eco-Friendly Smart Trash Separator',
            category: 'Sustainability',
            image: [
                'https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            ],
            owner: 'Sarah Chen',
            price: 45,
            description: 'An innovative trash separator that sorts waste into recyclables and non-recyclables to promote eco-friendly living.'
        },
        {
            date: 'February 3, 2024',
            title: 'Modular Urban Garden System',
            category: 'Agriculture',
            image: [
                'https://images.pexels.com/photos/1084540/pexels-photo-1084540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            ],
            owner: 'Marcus Rodriguez',
            price: 24,
            description: 'A modular gardening system designed for urban areas, allowing users to grow plants in small spaces.'
        },
        {
            date: 'March 22, 2024',
            title: 'AR Educational Toy Platform',
            category: 'Education',
            image: [
                'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            ],
            owner: 'Emma Watson',
            price: 30,
            description: 'A platform using augmented reality to make educational toys more interactive and engaging for children.'
        },
        {
            date: 'April 5, 2024',
            title: 'Wearable Air Quality Monitor',
            category: 'Health',
            image: [
                'https://images.pexels.com/photos/4047184/pexels-photo-4047184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            ],
            owner: 'David Kim',
            price: 10,
            description: 'A wearable device that monitors air quality in real time, ensuring you stay informed about your environment.'
        },
        {
            date: 'May 18, 2024',
            title: 'Smart Pet Care System',
            category: 'Pets',
            image: [
                'https://images.pexels.com/photos/6568314/pexels-photo-6568314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            ],
            owner: 'Lisa Parker',
            price: 17,
            description: 'A smart system to help pet owners monitor and manage their pets’ health and well-being effectively.'
        },
    
        {
            date: 'July 12, 2024',
            title: 'Smart Home Energy Optimizer',
            category: 'Home Automation',
            image: [
                'https://images.pexels.com/photos/3937174/pexels-photo-3937174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            ],
            owner: 'Rachel Bennett',
            price: 1500,
            description: 'An advanced system that optimizes energy usage in smart homes, reducing costs and environmental impact.'
        },
        {
            date: 'August 25, 2024',
            title: 'Biodegradable Party Supplies Kit',
            category: 'Events',
            image: [
                'https://images.pexels.com/photos/7180795/pexels-photo-7180795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            ],
            owner: 'Thomas Greene',
            price: 15,
            description: 'A complete party supplies kit made of biodegradable materials, perfect for eco-friendly celebrations.'
        },
        {
            date: 'September 8, 2024',
            title: 'Virtual Fitness Coach Platform',
            category: 'Fitness',
            image: [
                'https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            ],
            owner: 'Amanda White',
            price: 22,
            description: 'A virtual platform that offers personalized fitness coaching and training programs for users.'
        },
        ]    
  return (
    <div className="flex  justify-between flex-wrap gap-y-16 gap-x-8 ">
        {ideas.map((idea,index)=>(
              <Link key={index} href="/product" className=" flex flex-col gap-2  w-[45%] lg:w-[21%] shadow-xs rounded-lg">
              <div className='relative h-60'>
                      <Image className=" absolute rounded-md object-cover z-10 transition-opacity ease duration-500 hover:opacity-0 " src={idea.image[0]} fill  sizes="25vw" alt=""/>
                      <Image className="absolute rounded-md object-cover" src="https://images.pexels.com/photos/26791702/pexels-photo-26791702/free-photo-of-nature-ensoleille-soleil-clairiere.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" fill  sizes="25vw" alt=""/>
                  </div>
                  <div className=' flex justify-between'>
                  <span className='font-semibold max-h-5 overflow-hidden '>{idea.title}</span>
                  <span className='font-medium max-h-10     '>${idea.price}</span>
            </div>
                  <div className='mt-auto' > <p className="text-gray-400 text-xs  "> {idea.description}  </p></div>
                  <div className='mt-auto'>
                   <button className='bg-white ring-1 rounded-lg ring-red-400 text-red-400 hover:bg-red-400  hover:text-white text-xs w-max px-2 py-1'> Add to Cart </button>
                  </div>
            </Link>

        ))}
      
       
    </div>
  )
}

export default Product