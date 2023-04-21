import React, { useContext, useState } from 'react'
import { MyContext } from './provider';

export default function Viewimage({hideTriger}) {
    let [changeImage,setChangeimage] = useState(0)
    const { hide,setHide } = useContext(MyContext);
  return (
    <div className={hide===true?"hidden":"flex flex-col gap-4  w-screen bg-transparentBlack absolute top-0 -translate-x-32 justify-center items-center h-screen "}>
        <img src="assets/icon-close.svg" alt="close" className='w-4 self-center translate-x-64 cursor-pointer' onClick={()=>setHide(true)} />
      <div className="lg:rounded-xl  relative  lg:w-[35%] w-full ">
        <span className="absolute flex w-full justify-between h-full items-center  ">
          <div className=" p-4 pt-3 pb-3 flex justify-center items-center rounded-full bg-white -translate-x-6 cursor-pointer" onClick={()=>setChangeimage((prev)=>changeImage>0?prev - 1:3)}>
            <img src="assets/icon-previous.svg" alt="" className='w-3' />
          </div>
          <div className=" p-4 pt-3 pb-3 flex justify-center items-center rounded-full bg-white translate-x-6 cursor-pointer" onClick={()=>setChangeimage((prev)=>changeImage<3?prev + 1:0)}>
            <img src="assets/icon-next.svg" alt="" />
          </div>
        </span>
        <img src={`assets/image-product-${changeImage}.jpg`} alt="" className="w-full h-full lg:rounded-xl" />
      </div>

      <span className="lg:flex xl:flex hidden gap-10 w-fit ">
        <div className={changeImage===0?"relative  w-[5.6rem]  border-orange-500 border-2 rounded cursor-pointer":"cursor-pointer group relative"} onClick={()=>setChangeimage(0)}>
          <div className={changeImage===0?"bg-white absolute w-full h-full opacity-60":"hidden group-hover:block group-hover:bg-white group-hover:absolute group-hover:w-full group-hover:h-full group-hover:opacity-60"}></div>
          <img
            src="assets/image-product-1-thumbnail.jpg"
            alt="thumbnails-1"
            className={changeImage===0?"w-full":"w-[5.6rem] rounded-md"}
          />
        </div>


        <div className={changeImage===1?"relative  w-[5.6rem]  border-orange-500 border-2 rounded cursor-pointer":"cursor-pointer group relative"} onClick={()=>setChangeimage(1)}>
          <div className={changeImage===1?"bg-white absolute w-full h-full opacity-60":"hidden group-hover:block group-hover:bg-white group-hover:absolute group-hover:w-full group-hover:h-full group-hover:opacity-60"}></div>
          <img
            src="assets/image-product-2-thumbnail.jpg"
            alt="thumbnails-2"
            className={changeImage===1?"w-full":"w-[5.6rem] rounded-md"}
          />
        </div>

        <div className={changeImage===2?"relative  w-[5.6rem]  border-orange-500 border-2 rounded cursor-pointer":"cursor-pointer group relative"} onClick={()=>setChangeimage(2)}>
          <div className={changeImage===2?"bg-white absolute w-full h-full opacity-60":"hidden group-hover:block group-hover:bg-white group-hover:absolute group-hover:w-full group-hover:h-full group-hover:opacity-60"}></div>
          <img
            src="assets/image-product-3-thumbnail.jpg"
            alt="thumbnails-3"
            className={changeImage===2?"w-full":"w-[5.6rem] rounded-md"}
          />
        </div>



        <div className={changeImage===3?"relative  w-[5.6rem]  border-orange-500 border-2 rounded cursor-pointer":"cursor-pointer group relative"} onClick={()=>setChangeimage(3)}>
        <div className={changeImage===3?"bg-white absolute w-full h-full opacity-60":"hidden group-hover:block group-hover:bg-white group-hover:absolute group-hover:w-full group-hover:h-full group-hover:opacity-60"}></div>
          <img
            src="assets/image-product-4-thumbnail.jpg"
            alt="thumbnails-4"
            className={changeImage===3?"w-full":"w-[5.6rem] rounded-md"}
          />
        </div>


      </span>
    </div>
  )
}
