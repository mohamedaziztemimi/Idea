import Slider from "@/components/Slider"
import Product from "@/components/Product"
import Category from "@/components/Category"


const Home = () => {
  return (
   <>
    <Slider/>
    <div className="mt-28 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64  ">
       <h1 className="text-lg p-4">Trends</h1>
       <Product/>
    </div>
    <div className="mt-28 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64  ">
       <h1 className="text-lg p-4">Category</h1>
       <Category/>
    </div>
   
    </>
   

   
  );
}
export default Home;