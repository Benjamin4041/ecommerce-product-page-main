import React from 'react'

export default function Itemincart({itemNum}) {
  return (
    <div className='flex gap-3 justify-center items-center'>
        <div className='w-14 '>
            <img src="assets/image-product-1-thumbnail.jpg" alt="" className='rounded-md' />
        </div>
        <div>
            <p className='font-kumbh lg:text-xl'>Fall Limited Edition Sneakers</p>
            <p className='font-kumbh'>$125.00 x{itemNum} <span className='font-extrabold'>${itemNum * 125}.00</span></p>
        </div>
        <div>
            <img src="assets/icon-delete.svg" alt="trash" className='self-center' />
        </div>
    </div>
  )
}
