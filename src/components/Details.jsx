import { useState } from "react";
import Minus from '../assets/icon-minus.svg';
import Plus from '../assets/icon-plus.svg';
import Cart from '../assets/icon-cart.svg';
import Images from "./images";


let price='$125.00';
let percentDiscount='50%';
let initialamount='$250.00'

function Details({onAddToCart}) {

  const [quantity,setQuantity]=useState(0);

function MinusFunction(){
  setQuantity(
    function (min){
      if(min>0){
        return min-1
      }
    
    else 
    return 0;
    } 
  )
}

function PlusFunction(){
  setQuantity(
    function(min){
    return min+1
    }
  )
}

function handleAddToCart(){
  onAddToCart(quantity)
}
  return (
    <div className="p-6 bg-white max-w-xl mx-auto">
      <h4 className="text-gray-500 font-semibold uppercase tracking-widest text-sm mb-2">
        Sneaker Company
      </h4>
      <h2 className="text-5xl font-bold mb-4">Fall Limited Edition Sneakers</h2>
      <p className="text-gray-500 mb-4">
        These low profile sneakers are your perfect casual wear companion. Featuring a durable rubber 
        outer sole, they'll withstand everything the weather can offer.
      </p>

      <div className="mb-4 flex items-center gap-2">
        <div className="text-2xl font-bold">{price}</div>
        <span className="bg-gray-900 text-white text-sm font-bold px-2 py-1 rounded">
            {percentDiscount}
        </span>

      </div>
      <div className="text-gray-400 line-through mb-4">{initialamount}</div>

      <div className="flex flex-col gap-4 mt-4 w-full">
        <div className="flex items-center bg-gray-100 px-4 py-2 rounded gap-x-4 w-full sm:w-auto mx-2 sm:mx-0 justify-between">
          <img src={Minus} alt="Minus icon" className="cursor-pointer" onClick={MinusFunction} />
          <span className="mx-3 ">{quantity}</span>
          <img src={Plus} alt="Plus icon" className="cursor-pointer" onClick={PlusFunction}/>
        </div>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded flex items-center justify-center space-x-2 w-full sm:w-auto"
          onClick={handleAddToCart}
          disabled={quantity==0}
          >
          <img src={Cart} alt="Cart icon"/>
          <span className="text-gray-700">Add to Cart</span>
        </button>
      </div>
    </div>
  );
}


export default Details;