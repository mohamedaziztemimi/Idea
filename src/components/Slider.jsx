"use client";

import Image from "next/image";
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

    const [current, setCurrent] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const maxIndex = ideas.length /4; // Adjust for showing 3 cards

    useEffect(() => {
        const interval = setInterval(() => {
            setIsTransitioning(true);
            setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
            
            setTimeout(() => {
                setIsTransitioning(false);
            }, 1000);
        }, 5000);

        return () => clearInterval(interval);
    }, [maxIndex]);

    const Card = ({ idea }) => (
        <div className="w-80  z-0  mx-4 relative group transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl shadow-gray-500/40 ">
            <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                    src={idea.image}
                    className="object-cover rounded-lg"
                    alt={idea.title}
                    width={320}
                    height={400}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg">
                    <div className="flex gap-2 text-sm">
                        <p className="text-gray-200">{idea.date} by</p>
                        <p className="text-red-400 font-medium">{idea.owner}</p>
                    </div>
                    <h1 className="text-white text-lg font-semibold mt-2">{idea.title}</h1>
                </div>
            </div>
        </div>
    );

    return (
        <div className="relative h-[calc(100vh-80px)] overflow-hidden">
            {/* Slider Container */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
                <div
                    className={`flex transition-all duration-1000 ease-in-out`}
                    style={{
                        transform: `translateX(calc(-${current * 352}px))`,
                        width: 'fit-content',
                    }}
                >
                    {ideas.map((idea, index) => (
                        <Card key={index} idea={idea} />
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            <button 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm transition-all"
                onClick={() => {
                    if (current > 0) {
                        setIsTransitioning(true);
                        setCurrent(prev => prev - 1);
                        setTimeout(() => setIsTransitioning(false), 1000);
                    }
                }}
            >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            
            <button 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm transition-all"
                onClick={() => {
                    if (current < maxIndex) {
                        setIsTransitioning(true);
                        setCurrent(prev => prev + 1);
                        setTimeout(() => setIsTransitioning(false), 1000);
                    }
                }}
            >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            current === index ? 'bg-white w-4' : 'bg-white/50'
                        }`}
                        onClick={() => {
                            setIsTransitioning(true);
                            setCurrent(index);
                            setTimeout(() => setIsTransitioning(false), 1000);
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;