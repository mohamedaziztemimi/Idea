import React from 'react'

const Filters = () => {
  return (
    <div className='flex justify-between my-8 '>
        <div className='flex w-7/8'> 
                <input type="text" placeholder='first' />
                <input type="text" placeholder='scond' />
                <input type="text" placeholder='third' />
                <input type="text" placeholder='four' />
                <input type="text" placeholder='five' />
                <input type="text" placeholder='six'/>
                <input type="text" placeholder='seven'/>
        </div>
        <div className='flex w-1/8'> 
             <input type="text"placeholder='first'  />
        </div>

    </div>
  )
}

export default Filters