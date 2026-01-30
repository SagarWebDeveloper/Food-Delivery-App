import React, { useContext, useEffect } from 'react'
import {MdOutlineShoppingBag,MdOutlineSearch,MdFoodBank } from "react-icons/md";
import { dataContext } from '../context/UserContext';
import logo from '../assets/logomy1.png'
import { food_items } from '../food';
import { useSelector } from 'react-redux';

function Nav() {
  let { input, setInput, cate, setCate,showCart, setShowCart } = useContext(dataContext);
  useEffect(() => {
    let newList = food_items.filter((item) => item.food_name.toLowerCase().includes(input.toLowerCase()))
    setCate(newList)
  }, [input])
  let items = useSelector(state => state.cart)
  return (
    <div className='w-full h-[100px] flex justify-between items-center px-5 md:px-8'>
          <div className='w-[60px] h-[60px] bg-white rounded-full flex justify-center items-center '>
              <img src={logo} />
          </div>
          <form className='w-[45%] h-[60px] flex items-center bg-white px-5 gap-5 rounded-2xl shadow-md md:w-[70%]' onSubmit={(e)=>e.preventDefault()}>
              <MdOutlineSearch className='text-green-500 w-5 h-5 rounded-md text-[16px] md:text-[20px] '/>
              <input type="text" placeholder='Search Here...' className='w-15 sm:w-full outline-none text-[20px]' onChange={(e)=>setInput(e.target.value)} value={input} />
          </form>
      <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative' onClick={() => {
        setShowCart(true)
          }}>
        <span className='absolute top-0 right-2 text-green-500 font-bold text-[18px]'>{items.length}</span>
              <MdOutlineShoppingBag className='w-7 h-7 text-green-600 md:w-5 md:h-5 cursor-pointer ' />
          </div>
    </div>
  )
}

export default Nav
