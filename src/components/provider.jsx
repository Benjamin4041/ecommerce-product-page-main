// import { createContext, useState } from 'react';

// export const MyContext = createContext();

// export const MyProvider = (props) => {
//   const [hide, setHide] = useState(true)
//   const [showCart, setShowCart] = useState(false)

//   return (
//     <MyContext.Provider value={{ hide, setHide,showCart,setShowCart }}>
//       {props.children}
//     </MyContext.Provider>
//   );
// };
import { createContext, useState } from 'react';

export const MyContext = createContext();

export const MyProvider = (props) => {
  const [showCart, setShowCart] = useState(false);
  const [hide, setHide] = useState(true);
 

  console.log('MyContext', { hide, setHide, showCart, setShowCart });

  return (
    <MyContext.Provider value={{ hide, setHide, showCart, setShowCart }}>
      {props.children}
    </MyContext.Provider>
  );
};
