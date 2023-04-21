import {  useState } from "react";
import Button from "./components/button";
import Navbar from "./components/navbar";
import Shoeimage from "./components/shoeimage";
import Viewimage from "./components/viewImage";
import {  MyProvider } from "./components/provider";

import Cart from "./components/cart";
function App() {
  let [itemnumber, setItemNumber] = useState(0);
  let [clickAdd,setClickAdd]=useState(false)
  const addToCart=()=>{
    setClickAdd(true)
    // localStorage.setItem()
  }
  return (
    <MyProvider>
      <div className=" w-screen lg:w-[100%] xl:w-[100%] lg:pl-28 xl:pl-28 lg:pr-28 xl:pr-28 ">
        <Navbar cartNum={clickAdd===false? 0 : itemnumber} />
      <span className="lg:flex lg:justify-end flex justify-center  ">
          <Cart itemnum={itemnumber} clickadd={clickAdd}/>
        </span>
        <span className="flex lg:gap-24 flex-col lg:flex-row xl:flex-row lg:mt-14 xl:mt-14">
          <Shoeimage />
          <span className="mt-10 lg:mt-24 lg:mb-0 xl:mb-0 mb-16 lg:pl-0 xl:pl-0 lg:pr-0 xl:pr-0 pl-5 pr-5">
            <h3 className="text-[#ff7d1a] font-kumbh font-normal ">
              SNEAKER COMPANY
            </h3>
            <h1 className=" text-4xl lg:w-96 font-kumbh text-[#000000] font-bold mt-3 mb-12 w-fit">
              Fall Limited Edition Sneakers
            </h1>
            <p className="lg:w-[28.1rem] xl:w-[28.1rem]  text-[#68707d] font-kumbh ">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they'll withstand
              everything the weather can offer.
            </p>
            <div className="flex lg:flex-col xl:flex-col lg:w-fit xl:w-fit  justify-between ">
              <span className="flex justify-between items-center mt-5 mb-1 font-kumbh text-2xl gap-10 font-extrabold text-[1.8rem]">
                $125.00
                <p className="bg-orange-200 text-orange-500 p-1 pl-3 pr-3 text-sm rounded-md font-kumbh">
                  50%
                </p>
              </span>
              <p className="font-kumbh text-[#caced1] line-through lg:self-start self-center text-xl">
                $250.00
              </p>
            </div>

            <span className="flex lg:flex-row xl:flex-row  gap-3 mt-[2.1rem] flex-col">
              <div className="flex items-center justify-evenly lg:w-40 xl:w-40 bg-[#f7f8fd] rounded-xl w-full lg:p-0 xl:p-0 p-4 ">
                <div>
                  <img
                    src="assets/icon-minus.svg"
                    alt=""
                    className="cursor-pointer hover:brightness-150"
                    onClick={() =>
                      setItemNumber((prev) => (itemnumber === 0 ? 0 : prev - 1))
                    }
                  />
                </div>
                <p>{itemnumber}</p>
                <div>
                  <img
                    src="assets/icon-plus.svg"
                    alt=""
                    className="cursor-pointer hover:brightness-150"
                    onClick={() => setItemNumber((prev) => prev + 1)}
                  />
                </div>
              </div>
              <Button name={"Add to cart"} showCart={true} click={addToCart} />
            </span>
          </span>
        </span>
        <Viewimage />
      </div>
    </MyProvider>
  );
}

export default App;
