import React from "react";
import Button from "./button";
import { MyContext } from "./provider";
import { useContext } from "react";
import Itemincart from "./itemincart";
export default function Cart({ itemnum ,clickadd }) {
  const { showCart } = useContext(MyContext);
  return (
    <div
      className={
        showCart === true
          ? "absolute translate-y-8  bg-[#ffffff] lg:w-[26rem] w-[96%] lg:pb-0   lg:-translate-y-1  shadow-2xl text-black rounded-xl z-10"
          : "hidden"
      }
    >
      <header className="border-b-2 flex justify-start font-kumbh text-base font-semibold  pl-3 pt-5 pb-5">
        <p>Cart</p>
      </header>
      {itemnum === 0 ? (
        <div className="flex justify-center items-center p-6 lg:pb-6 pb-6 flex-col">
          <p className="font-kumbh font-semibold text-[#a1a6ab] text-center">
            Your cart is empty.
          </p>
        </div>
      ) : clickadd===false ?(
        <div className="flex justify-center items-center p-6 lg:pb-6 pb-6 flex-col">
          <p className="font-kumbh font-semibold text-[#a1a6ab]">
            Your cart is empty.
          </p>
        </div>
      ): (
        <div className="flex justify-center items-center p-6 lg:pb-6 pb-6  flex-col">
          <Itemincart itemNum={itemnum} />
          <Button name={"Checkout"} cosStyle={"w-[100%] mt-6 "} />
        </div>
      )}
    </div>
  );
}
