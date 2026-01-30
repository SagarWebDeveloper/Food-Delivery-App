import React, { createContext, useState } from 'react'
export const dataContext = createContext();
import { food_items } from '../food';
function UserContext({ children }) {
    const [input,setInput]=useState("")
    const [cate, setCate] = useState(food_items);
    let [showCart, setShowCart] = useState(false);
    let data = { input, setInput, cate, setCate,showCart, setShowCart }
  return (
      <div>
          <dataContext.Provider value={data}>
              {children}
          </dataContext.Provider>
    </div>
  )
}

export default UserContext;
