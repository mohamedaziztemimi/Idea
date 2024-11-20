import React from 'react'
import Image from 'next/image'
const CartModel = () => {
  return (
    <div className='absolute  top-10 right-0 bg-gray-50 p-3  rounded-md z-20 shadow-[0_4px_6px_rgba(0,0,0,0.1),0_1px_3px_rgba(0,0,0,0.06)] w-max flex flex-col gap-4'>
           {/** top section  */}
           
            <div className='text-l font-semibold text-gray-500 '>
                Shopping Cart
            </div>
             {/** middle section  */}
            <div> 
                <div className="flex justify-between gap-4 ">
                       <Image className='object-cover rounded-md' src="https://images.pexels.com/photos/29329392/pexels-photo-29329392/free-photo-of-fenetre-rustique-a-volets-en-bois-avec-plantes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="72" height="92"></Image>
                  <div className="flex flex-col justify-between">
                        <div className=' flex flex-col gap-2'>
                            <div className="flex gap-4">
                                    <div className='text-sm font-bold'>Decoration Idea </div>
                                    <div className='text-sm font-thin'> $3.5</div>
                            </div>
                            <div className='text-xs font-thin text-gray-500'>
                                Decoration
                            </div>

                        </div>
                        <div className='flex justify-between'>
                            <span className='text-sm font-thin text-gray-500'> Qty 1 </span>
                            <div>
                                <button className='bg-none text-xs  font-thin text-blue-500 '>Remove</button>
                            </div>
                           
                           
                        </div>
                   </div>
                </div>
             </div>
             
             {/** total section */}
             <div className='flex flex-col gap-2'>
                    <div className="flex justify-between font-bold text-sm"> 
                        <div>Total</div>
                        <div>$40.5</div>
                    </div>
                    <div className='text-gray-400 text-xs'>The website will take a 5% commission</div>
                   
             </div>
            {/** buttons section */}
             <div className="flex justify-between">
                        <button className="bg-white text-black py-2 px-3 border rounded-md text-xs font-medium">View Cart </button>
                        <button className="bg-black text-white py-2 px-3 border rounded-md text-xs font-medium">Check Out</button>
             </div>

    </div>
  )
}

export default CartModel