import React, { useContext, useState } from "react";
import Nav from "../components/Nav";
import Card from "../components/Card";
import Card2 from "../components/Card2";
import Footer from "../components/Footer";
import { categories } from "../Category";
import { food_items } from "../food";
import { dataContext } from "../context/UserContext";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";


function Home() {
  const { cate, setCate, input,showCart,setShowCart } = useContext(dataContext);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function filter(category) {
    setSelectedCategory(category);

    if (category === "All") {
      setCate(food_items);
    } else {
      const newList = food_items.filter(
        (item) => item.food_category === category
      );
      setCate(newList);
    }
  }
  let items = useSelector(state => state.cart);
  let subTotal = items.reduce((total, item) => total + item.qty*item.price, 0);
  let deliveryFee = 40;
  let taxes = Number((subTotal * 0.5 / 100).toFixed(2));
  let total = Math.floor(subTotal + deliveryFee + taxes);
  return (
    <div className="bg-slate-300 w-full min-h-screen">
      <Nav />

      {/* ✅ SHOW CATEGORIES ONLY WHEN SEARCH IS EMPTY */}
      {input === "" && (
        <div className="flex flex-wrap justify-center items-center gap-5 w-full p-5">
          {categories.map((item) => (
            <div
              key={item.name}
              onClick={() => filter(item.name)}
              className={`w-[140px] h-[150px] ${
                selectedCategory === item.name
                  ? "bg-green-400 text-white scale-105"
                  : "bg-red-50 text-gray-600"
              } flex flex-col items-center gap-5 p-5 justify-center text-[18px] font-semibold rounded-lg shadow-xl cursor-pointer transition-all duration-200`}
            >
              {item.icon}
              {item.name}
            </div>
          ))}
        </div>
      )}

      {/* ✅ CATEGORY TITLE (HIDE DURING SEARCH) */}
      {input === "" && (
        <div className="text-center underline text-2xl font-semibold text-gray-700 -mb-5">
          <h3>{selectedCategory === "All" ? "All Items" : selectedCategory}</h3>
        </div>
      )}

      {/* ✅ FOOD CARDS (ALWAYS SHOW) */}
      <div className="w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8">
        {cate.length > 0 ? 
  cate.map((item) => (
    <Card
      key={item.id}
      name={item.food_name}
      image={item.food_image}
      price={item.food_price}
      id={item.id}
      type={item.food_type}
    />
  )) 
  :
  <div className="text-start text-2xl text-green-500 font-semibold">
    No Dish Found
  </div>
}

      </div>
      <div className={`w-full md:w-[40vw] h-full fixed top-0 right-0 bg-white shadow-xl p-6 transition-all duration-500 flex flex-col items-center overflow-auto ${showCart?"translate-x-0":"translate-x-full"}`}>
        <header className="w-full flex justify-between items-center " >
          <span className="text-green-400 text-[18px] font-semibold">Order Items:</span>
          <RxCross2 className="text-green-400 text-[18px] font-semibold w-[30px] h-[30px] cursor-pointer hover:text-green-600" onClick={() => {
            setShowCart(false)
          }}/>
        </header>
        {items.length>0? <>
        <div className="w-full mt-9 flex flex-col gap-8">
          {items.map((item) => (
            <Card2 name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty} />
          ))}
        </div>
        <div className="w-full border-t-2 border-b-2 border-gray-400 mt-7 flex flex-col gap-2 p-4">
          <div className="w-full flex justify-between items-center">
            <span className="text-lg text-gray-600 font-semibold">Subtotal</span>
            <span className="text-green-400 font-semibold text-lg">Rs. {subTotal}</span>
          </div>
          <div className="w-full flex justify-between items-center">
            <span className="text-lg text-gray-600 font-semibold">Delivery Fee</span>
            <span className="text-green-400 font-semibold text-lg">Rs. {deliveryFee}</span>
          </div>
          <div className="w-full flex justify-between items-center">
            <span className="text-lg text-gray-600 font-semibold">Taxes</span>
            <span className="text-green-400 font-semibold text-lg">Rs. {taxes}</span>
          </div>
        </div>
        <div className="w-full flex justify-between items-center p-4 pt-5">
            <span className="text-lg text-gray-600 font-semibold">TOTAL</span>
            <span className="text-green-400 font-semibold text-lg">Rs. {total}</span>
        </div>
          <button className='w-[80%] p-3 rounded-lg bg-green-500 text-white hover:bg-green-300 transition-all cursor-pointer hover:text-xl hover:font-semibold' onClick={() => {
            toast.success("Order Placed Successfully")
          }}>Place Your Order</button>
        </> :
          <div className="text-center text-2xl text-green-500 font-semibold pt-5">
            Empty Cart
          </div>
        }
      </div>
      <Footer />
    </div>
  );
}

export default Home;
