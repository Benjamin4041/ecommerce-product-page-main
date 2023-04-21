import React, { useContext } from "react";
import { MyContext } from "./provider";
// import Cart from "./cart";

export default function Navbar({ cartNum }) {
  const { showCart, setShowCart} = useContext(MyContext);
  return (
    <nav className="relative flex flex-col">
      <div className="flex justify-between items-center pt-6 pb-6 p-5 lg:p-0 xl:p-0 lg:border-b-2">
        <span className="flex gap-20">
          <span className="flex items-center justify-center gap-3">
            <img
              src="assets/icon-menu.svg"
              alt=""
              className="lg:hidden xl:hidden scale-150"
            />
            <img src="assets/logo.svg" alt="logo" />
          </span>
          <ul className="lg:flex gap-5 hidden">
            <li className="cursor-pointer hover:border-b-4 lg:pb-9 lg:translate-y-4 self-center hover:border-[#fe7d1e]">
              Collections
            </li>
            <li className="cursor-pointer hover:border-b-4 lg:pb-9 lg:translate-y-4 self-center hover:border-[#fe7d1e]">
              Men
            </li>
            <li className="cursor-pointer hover:border-b-4 lg:pb-9 lg:translate-y-4 self-center hover:border-[#fe7d1e]">
              Women
            </li>
            <li className="cursor-pointer hover:border-b-4 lg:pb-9 lg:translate-y-4 self-center hover:border-[#fe7d1e]">
              About
            </li>
            <li className="cursor-pointer hover:border-b-4 lg:pb-9 lg:translate-y-4 self-center hover:border-[#fe7d1e]">
              Contact
            </li>
          </ul>
        </span>
        <span className="flex items-center lg:gap-9 xl:gap-9 gap-5 lg:m-5 ">
          <div className="relative cursor-pointer">
            <div
              className={
                cartNum > 0
                  ? "absolute top-0 -translate-y-2 translate-x-2 bg-[#fe7d1e] text-white text-xs w-fit p-0 pl-2 pr-2 rounded-3xl "
                  : "hidden"
              }
            >
              {cartNum}
            </div>
            <img src="assets/icon-cart.svg" alt="cart-img" onClick={()=> showCart===false?setShowCart(true):setShowCart(false)} />
          </div>
          <div className=" cursor-pointer  ">
            <img
              src="assets/image-avatar.png"
              alt="profile-img"
              className="w-12 scale-75 hover:border-[#fe7d1e] hover:border-2 rounded-full"
            />
          </div>
        </span>
      </div>
      {/* <Cart/> */}
    </nav>
  );
}
