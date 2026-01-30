import React from 'react' 
import image1 from "../assets/image1.avif"
import { ImBin } from "react-icons/im";
import { useDispatch } from 'react-redux';
import { DecreamentQty, IncreamentQty, RemoveItem } from '../redux/cartSlice';

function Card2({ name, id, price, image, qty }) {
    let dispatch = useDispatch();
  return (
    <div className='w-full h-[120px] shadow-lg p-2 flex justify-between'>
          <div className='w-[60%] h-full flex gap-5'>
              <div className='w-[60%] h-full overflow-hidden rounded-lg'>
                  <img src={image} alt="" className='object-cover'/>
              </div>
              <div className='w-[40%] h-full flex flex-col gap-3'>
                  <div className='text-lg text-gray-600 font-semibold'>{name}</div>
                  <div className='w-[110px] h-[50px] bg-slate-400 flex rounded-lg overflow-hidden shadow-lg border-2 font-semibold border-green-400 text-2xl'>
                      <button className='w-[30%] h-full text-green-900 bg-white flex justify-center items-center hover:bg-gray-200' onClick={() => {
              qty>1?dispatch(DecreamentQty(id)):1}}>-</button>
                      <span className='w-[40%] h-full bg-slate-300 flex justify-center items-center'>{qty}</span>
            <button className='w-[30%] h-full text-green-900 bg-white flex justify-center items-center hover:bg-gray-200' onClick={() => {
              dispatch(IncreamentQty(id))}}>+</button>
                  </div>
              </div>
          </div>
          <div className='flex flex-col justify-start items-end gap-6'>
              <span className='text-xl text-green-400 font-semibold'>Rs:{price}</span>
            <ImBin className='w-[30px] h-[30px] text-red-400 cursor-pointer' onClick={()=>dispatch(RemoveItem(id))}/>
          </div>
    </div>
  )
}

export default Card2
