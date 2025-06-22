import { useState } from "react";

let price='$125.00';
let percentDiscount='50%';
let initialamount='$250.00';

function Details() {
  return (
    <div className="p-6 bg-white max-w-xl mx-auto">
      <h4 className="text-orange-500 font-semibold uppercase tracking-widest text-sm mb-2">
        Sneaker Company
      </h4>
      <h2 className="text-3xl font-bold mb-4">Fall Limited Edition Sneakers</h2>
      <p className="text-gray-500 mb-4">
        These low profile sneakers are your perfect casual wear companion. Featuring a durable rubber 
        outer sole, they'll withstand everything the weather can offer.
      </p>

      <div className="mb-4 flex items-center justify-between">
        <div className="text-2xl font-bold">{price}</div>
        <span className="bg-orange-100 text-orange-500 text-sm font-bold px-2 py-1 rounded">
          {percentDiscount}
        </span>
      </div>
      <div className="text-gray-400 line-through mb-4">{initialamount}</div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center bg-gray-100 px-4 py-2 rounded">
          <img src="./assets/icon-minus.svg" alt="Minus icon" className="cursor-pointer" />
          <span className="mx-3">0</span>
          <img src="./assets/icon-plus.svg" alt="Plus icon" className="cursor-pointer" />
        </div>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded flex items-center space-x-2">
          <img src="./assets/icon-cart.svg" alt="Cart icon" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}


export default Details;