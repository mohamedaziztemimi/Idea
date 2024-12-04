import React from 'react'

const Filters = () => {
  return (
    <div className='mt-12 flex justify-between  '>
        <div className='flex gap-6 flex-wrap  '> 
              <select className='rounded-2xl bg-gray-100   text-sm text-center' name="type" id=""> 
                <option value="" defaultChecked>Type</option>
                <option value="Entertainment" defaultChecked>Entertainmemnt</option>
                <option value="Buisness" defaultChecked>Buisness</option>
                <option value="Creativity" defaultChecked>Creativiy</option>
              </select>
              <input  className='rounded-2xl   text-sm text-center border ring-1 ring-gray-300 ' type="text" placeholder='Min-price' />
              <input  className='rounded-2xl   text-sm text-center border ring-1 ring-gray-300 ' type="text" placeholder='Max-price' />
              <select className='rounded-2xl bg-gray-100   text-sm text-center' name="type" id=""> 
                <option value="" defaultChecked>Creativity</option>
                <option value="Entertainment" defaultChecked>Entertainmemnt</option>
                <option value="Buisness" defaultChecked>Buisness</option>
                <option value="Creativity" defaultChecked>Creativiy</option>
              </select>
              <select className='rounded-2xl bg-gray-100   text-sm text-center' name="type" id=""> 
                <option value="" defaultChecked>Category</option>
                <option value="Entertainment" defaultChecked>Entertainmemnt</option>
                <option value="Buisness" defaultChecked>Buisness</option>
                <option value="Creativity" defaultChecked>Creativiy</option>
              </select>
              <select className='rounded-2xl bg-gray-100   text-sm text-center' name="type" id=""> 
                <option value="" defaultChecked>All Filters</option>
                <option value="Entertainment" defaultChecked>Entertainmemnt</option>
                <option value="Buisness" defaultChecked>Buisness</option>
                <option value="Creativity" defaultChecked>Creativiy</option>
              </select>
        </div>
        <div> 
        <select className='rounded-2xl  px-3 py-1  border ring-1 ring-gray-300 text-sm ' name="sort" id=""> 
                <option value="" defaultChecked>Sort By</option>
                <option value="Entertainment" defaultChecked>Price</option>
                <option value="Buisness" defaultChecked>Creativity</option>
              </select>
        </div>

    </div>
  )
}

export default Filters