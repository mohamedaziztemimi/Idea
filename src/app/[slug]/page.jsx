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
          product descirption
        </div>
    </div>
    
    </>
  )
}

export default page