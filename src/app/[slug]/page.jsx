import React from 'react'
import ProductImages from "@/components/ProductImages"

const page = () => {
  return (
    <>
    {/**image */}
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex flex-col lg:flex-row gap-16'>
        <div className="w-full lg:sticky  lg:w-1/2 gap-8 ">
          <ProductImages/>
        </div>
        {/**product desciption */}
        <div className="w-full flex flex-col gap-8 lg:w-1/2 ">
            <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Product Name</h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                    ante justo. Integer euismod libero id mauris malesuada tincidunt.
                </p>
            </div>
                <div className="flex mb-4">
                    <div className="mr-4">
                        <span className="text-gray-600 dark:text-gray-300 text-lg font-semibold"><span className='line-through text-sm pr-2 font-thin'>$40.99</span> $29.99</span>
                    </div>
                </div>
                
                <div className="mb-4">
                    <span className="font-bold text-gray-700 dark:text-gray-300">Choose an Offer </span>
                    <div className="flex items-center mt-2">
                        <button className="bg-transparent  text-pink-400 py-1 px-4 text-sm font-thin rounded-md border border-pink-400 mr-2 hover:bg-pink-400 hover:text-white">Basic</button>
                        <button className="bg-transparent  text-pink-400 py-1 px-4 text-sm font-thin rounded-md border border-pink-400 mr-2 hover:bg-pink-400 hover:text-white">Silver</button>
                        <button className="bg-transparent  text-pink-400 py-1 px-4 text-sm font-thin rounded-md border border-pink-400 mr-2 hover:bg-pink-400 hover:text-white">Gold</button>
                    </div>
                </div>
                  <div>
                 
                          <button className='bg-pink-300 text-white  rounded-full px-5 py-1 font-sm text-sm hover:bg-pink-400'>Add to Cart</button>
                      
                  </div>
                    



               
                <div>
                    <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut
                        lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque
                        ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non
                        sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.
                    </p>
                </div>
                <div>
                    <span className="font-bold text-gray-700 dark:text-gray-300">Return Policy</span>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut
                        lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque
                    </p>
                </div> 
                
            </div>
        </div>
    
    
    </>
  )
}

export default page