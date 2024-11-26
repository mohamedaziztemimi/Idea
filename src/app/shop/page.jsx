import Image from "next/image";
import Filters from "@/components/Filters"
const Shop = () => {
    return (
        <div className=" py-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64  ">
              <div className="flex justify-between  items-center bg-rose-50 h-64 ">  
                    <div className="w-2/3 flex flex-col justify-center items-center px-4 gap-8">
                        <h1 className="text-3xl font-semibold leading-[40px] text-gray-600">up to 80 % off on <br />selected Ideas </h1>
                        <button className=" rounded-2xl bg-red-400 text-white py-2 px-3 text-xs size-max">
                            buy now
                        </button>
                    </div>
                    <div className="relative w-1/3 h-full">
                       <Image  className="object-contain" src="/brainrose.webp" fill alt=""/>
                    </div>
              </div>
              <Filters/>
          </div>



   
         
    )
}

export default Shop;


        