import React, { useContext, useState } from "react";
import { MyContext } from "./provider";

export default function Viewimage({ hideTriger }) {
  let [changeImage, setChangeimage] = useState(0);
  const { hide, setHide } = useContext(MyContext);
  return (
    <div
      className={
        hide === true
          ? "hidden"
          : "flex flex-col gap-4  w-screen bg-transparentBlack absolute top-0 -translate-x-32 justify-center items-center h-screen "
      }
    >
      <svg
        width="14"
        height="15"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => setHide(true)}
        className="w-4 h-4 self-center translate-x-64 cursor-pointer hover:text-orange-500"
      >
        <path
          d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
          fill="#69707D"
          fill-rule="evenodd"
          className="hover:fill-orange-500"
        />
      </svg>

      <div className="lg:rounded-xl  relative  lg:w-[35%] w-full ">
        <span className="absolute flex w-full justify-between h-full items-center  ">
          <div
            className=" p-4 pt-3 pb-3 flex justify-center items-center rounded-full bg-white -translate-x-6 cursor-pointer group"
            onClick={() =>
              setChangeimage((prev) => (changeImage > 0 ? prev - 1 : 3))
            }
          >
          <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 self-center cursor-pointer">
            <path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd" className="group-hover:stroke-orange-500" />
          </svg>
          </div>
          <div
            className=" p-4 pt-3 pb-3 flex justify-center items-center rounded-full bg-white translate-x-6 cursor-pointer group"
            onClick={() =>
              setChangeimage((prev) => (changeImage < 3 ? prev + 1 : 0))
            }
          >

<svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd" className="group-hover:stroke-orange-500"/></svg>
            
          </div>
        </span>
        <img
          src={`assets/image-product-${changeImage}.jpg`}
          alt=""
          className="w-full h-full lg:rounded-xl"
        />
      </div>

      <span className="lg:flex xl:flex hidden gap-10 w-fit ">
        <div
          className={
            changeImage === 0
              ? "relative  w-[5.6rem]  border-orange-500 border-2 rounded cursor-pointer"
              : "cursor-pointer group relative"
          }
          onClick={() => setChangeimage(0)}
        >
          <div
            className={
              changeImage === 0
                ? "bg-white absolute w-full h-full opacity-60"
                : "hidden group-hover:block group-hover:bg-white group-hover:absolute group-hover:w-full group-hover:h-full group-hover:opacity-60 rounded"
            }
          ></div>
          <img
            src="assets/image-product-1-thumbnail.jpg"
            alt="thumbnails-1"
            className={changeImage === 0 ? "w-full" : "w-[5.6rem] rounded-md"}
          />
        </div>

        <div
          className={
            changeImage === 1
              ? "relative  w-[5.6rem]  border-orange-500 border-2 rounded cursor-pointer"
              : "cursor-pointer group relative"
          }
          onClick={() => setChangeimage(1)}
        >
          <div
            className={
              changeImage === 1
                ? "bg-white absolute w-full h-full opacity-60"
                : "hidden group-hover:block group-hover:bg-white group-hover:absolute group-hover:w-full group-hover:h-full group-hover:opacity-60 rounded"
            }
          ></div>
          <img
            src="assets/image-product-2-thumbnail.jpg"
            alt="thumbnails-2"
            className={changeImage === 1 ? "w-full" : "w-[5.6rem] rounded-md"}
          />
        </div>

        <div
          className={
            changeImage === 2
              ? "relative  w-[5.6rem]  border-orange-500 border-2 rounded cursor-pointer"
              : "cursor-pointer group relative"
          }
          onClick={() => setChangeimage(2)}
        >
          <div
            className={
              changeImage === 2
                ? "bg-white absolute w-full h-full opacity-60"
                : "hidden group-hover:block group-hover:bg-white group-hover:absolute group-hover:w-full group-hover:h-full group-hover:opacity-60 rounded"
            }
          ></div>
          <img
            src="assets/image-product-3-thumbnail.jpg"
            alt="thumbnails-3"
            className={changeImage === 2 ? "w-full" : "w-[5.6rem] rounded-md"}
          />
        </div>

        <div
          className={
            changeImage === 3
              ? "relative  w-[5.6rem]  border-orange-500 border-2 rounded cursor-pointer"
              : "cursor-pointer group relative"
          }
          onClick={() => setChangeimage(3)}
        >
          <div
            className={
              changeImage === 3
                ? "bg-white absolute w-full h-full opacity-60"
                : "hidden group-hover:block group-hover:bg-white group-hover:absolute group-hover:w-full group-hover:h-full group-hover:opacity-60 rounded"
            }
          ></div>
          <img
            src="assets/image-product-4-thumbnail.jpg"
            alt="thumbnails-4"
            className={changeImage === 3 ? "w-full" : "w-[5.6rem] rounded-md"}
          />
        </div>
      </span>
    </div>
  );
}
