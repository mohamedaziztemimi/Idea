import Slider from "@/components/Slider"
import Product from "@/components/Product"
import Category from "@/components/Category"
import Image from "next/image"


const Home = () => {
  return (
   <>
   <div className="w-full h-[500px] relative shadow-md">
      <Image className="object-cover" src="https://images.pexels.com/photos/139311/pexels-photo-139311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  fill alt="" priority />
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/50 text-white">
            <h1 className="text-4xl md:text-6xl font-bold tracking-wide mb-4">Welcome to IDEA</h1>
            <p className="text-lg md:text-xl font-light">Echange Ideas . Make Money</p>
      </div>
   </div>
  <section className="my-20">
  <div className="mt-28 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64  ">
       <h1 className="text-lg p-4">Trends</h1>
       <Product/>
    </div>

  </section>
  

  
   
    </>
   

   
  );
}
export default Home;