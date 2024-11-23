import React from 'react'
import Image from 'next/image'
import Link from "next/link";

const Product = () => {
      const ideas = [
            {
                date: 'January 15, 2024',
                title: 'Eco-Friendly Smart Trash Separator',
                category: 'Sustainability',
                image: 'https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                owner: 'Sarah Chen',
            },
            {
                date: 'February 3, 2024',
                title: 'Modular Urban Garden System',
                category: 'Agriculture',
                image: 'https://images.pexels.com/photos/1084540/pexels-photo-1084540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                owner: 'Marcus Rodriguez',
            },
            {
                date: 'March 22, 2024',
                title: 'AR Educational Toy Platform',
                category: 'Education',
                image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                owner: 'Emma Watson',
            },
            {
                date: 'April 5, 2024',
                title: 'Wearable Air Quality Monitor',
                category: 'Health',
                image: 'https://images.pexels.com/photos/4047184/pexels-photo-4047184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                owner: 'David Kim',
            },
            {
                date: 'May 18, 2024',
                title: 'Smart Pet Care System',
                category: 'Pets',
                image: 'https://images.pexels.com/photos/6568314/pexels-photo-6568314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                owner: 'Lisa Parker',
            },
            {
                date: 'June 30, 2024',
                title: 'Portable Water Purification Device',
                category: 'Outdoor',
                image: 'https://images.pexels.com/photos/4251268/pexels-photo-4251268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                owner: 'Michael Torres',
            },
            {
                date: 'July 12, 2024',
                title: 'Smart Home Energy Optimizer',
                category: 'Home Automation',
                image: 'https://images.pexels.com/photos/3937174/pexels-photo-3937174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                owner: 'Rachel Bennett',
            },
            {
                date: 'August 25, 2024',
                title: 'Biodegradable Party Supplies Kit',
                category: 'Events',
                image: 'https://images.pexels.com/photos/7180795/pexels-photo-7180795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                owner: 'Thomas Greene',
            },
            {
                date: 'September 8, 2024',
                title: 'Virtual Fitness Coach Platform',
                category: 'Fitness',
                image: 'https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                owner: 'Amanda White',
            },
            {
                date: 'October 15, 2024',
                title: 'Smart Music Learning System',
                category: 'Entertainment',
                image: 'https://images.pexels.com/photos/4088009/pexels-photo-4088009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                owner: 'James Wilson',
            },
            {
                date: 'November 3, 2024',
                title: 'Zero-Waste Food Storage Solution',
                category: 'Kitchen',
                image: 'https://images.pexels.com/photos/5875866/pexels-photo-5875866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                owner: 'Sofia Garcia',
            },
            {
                date: 'December 20, 2024',
                title: 'Personal Carbon Footprint Tracker',
                category: 'Environment',
                image: 'https://images.pexels.com/photos/5699067/pexels-photo-5699067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                owner: 'Ryan Cooper',
            }
        ];
  return (
    <div className="flex  justify-between flex-wrap gap-y-16 gap-x-8 p-4">
      
         <Link href="/" className=" flex flex-col gap-2  w-[45%] lg:w-[21%] ">
            <div className='relative h-60'>
                    <Image className=" absolute rounded-md object-cover z-10 transition-opacity ease duration-500 hover:opacity-0 " src="https://images.pexels.com/photos/19920271/pexels-photo-19920271/free-photo-of-rhume-froid-neige-foret.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" fill  sizes="25vw" alt=""/>
                    <Image className="absolute rounded-md object-cover" src="https://images.pexels.com/photos/26791702/pexels-photo-26791702/free-photo-of-nature-ensoleille-soleil-clairiere.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" fill  sizes="25vw" alt=""/>
                </div>
                <div className=' flex justify-between'>
                <span className='font-semibold'>Itertain your dog</span>
                <span className='font-medium'>$45.5</span>
          </div>
                <div className=' text-gray-400 text-xs'> this is the desciption </div>
                <div>
                 <button className='bg-white ring-1 rounded-lg ring-red-400 text-red-400 hover:bg-red-400  hover:text-white text-xs w-max px-2 py-1'> Add to Cart </button>
                </div>
          </Link>
          <Link href="/" className=" flex flex-col gap-2  w-[45%] lg:w-[21%] ">
            <div className='relative h-60'>
                    <Image className=" absolute rounded-md object-cover z-10 transition-opacity ease duration-500 hover:opacity-0 " src="https://images.pexels.com/photos/19920271/pexels-photo-19920271/free-photo-of-rhume-froid-neige-foret.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" fill  sizes="25vw" alt=""/>
                    <Image className="absolute rounded-md object-cover" src="https://images.pexels.com/photos/26791702/pexels-photo-26791702/free-photo-of-nature-ensoleille-soleil-clairiere.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" fill  sizes="25vw" alt=""/>
                </div>
                <div className=' flex justify-between'>
                <span className='font-semibold'>Itertain your dog</span>
                <span className='font-medium'>$45.5</span>
          </div>
                <div className=' text-gray-400 text-xs'> this is the desciption </div>
                <div>
                 <button className='bg-white ring-1 rounded-lg ring-red-400 text-red-400 hover:bg-red-400  hover:text-white text-xs w-max px-2 py-1'> Add to Cart </button>
                </div>
          </Link>
          <Link href="/" className=" flex flex-col gap-2  w-[45%] lg:w-[21%] ">
            <div className='relative h-60'>
                    <Image className=" absolute rounded-md object-cover z-10 transition-opacity ease duration-500 hover:opacity-0 " src="https://images.pexels.com/photos/19920271/pexels-photo-19920271/free-photo-of-rhume-froid-neige-foret.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" fill  sizes="25vw" alt=""/>
                    <Image className="absolute rounded-md object-cover" src="https://images.pexels.com/photos/26791702/pexels-photo-26791702/free-photo-of-nature-ensoleille-soleil-clairiere.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" fill  sizes="25vw" alt=""/>
                </div>
                <div className=' flex justify-between'>
                <span className='font-semibold'>Itertain your dog</span>
                <span className='font-medium'>$45.5</span>
          </div>
                <div className=' text-gray-400 text-xs'> this is the desciption </div>
                <div>
                 <button className='bg-white ring-1 rounded-lg ring-red-400 text-red-400 hover:bg-red-400  hover:text-white text-xs w-max px-2 py-1'> Add to Cart </button>
                </div>
          </Link>
          <Link href="/" className=" flex flex-col gap-2  w-[45%] lg:w-[21%] ">
            <div className='relative h-60'>
                    <Image className=" absolute rounded-md object-cover z-10 transition-opacity ease duration-500 hover:opacity-0 " src="https://images.pexels.com/photos/19920271/pexels-photo-19920271/free-photo-of-rhume-froid-neige-foret.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" fill  sizes="25vw" alt=""/>
                    <Image className="absolute rounded-md object-cover" src="https://images.pexels.com/photos/26791702/pexels-photo-26791702/free-photo-of-nature-ensoleille-soleil-clairiere.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" fill  sizes="25vw" alt=""/>
                </div>
                <div className=' flex justify-between'>
                <span className='font-semibold'>Itertain your dog</span>
                <span className='font-medium'>$45.5</span>
          </div>
                <div className=' text-gray-400 text-xs'> this is the desciption </div>
                <div>
                 <button className='bg-white ring-1 rounded-lg ring-red-400 text-red-400 hover:bg-red-400  hover:text-white text-xs w-max px-2 py-1'> Add to Cart </button>
                </div>
          </Link>

    </div>
  )
}

export default Product