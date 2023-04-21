import React from "react";

export default function Button({ name, showCart ,cosStyle,click }) {
  return (
    <button className={`bg-[#ff7d1a] p-3 pl-12 pr-12 text-white rounded-lg flex gap-3 hover:bg-[#ffac6a] justify-center ${cosStyle}`} onClick={click}>
     {showCart === true ? <img src="assets/icon-cart.svg" alt="" className="brightness-200 contrast-200 "/> : ""} {name}
    </button>
  );
}
