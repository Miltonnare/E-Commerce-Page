import Logo from '../assets/logo.svg';
import CartIcon from '../assets/icon-cart.svg';
import Avatar from '../assets/image-avatar.png';
import { useState } from 'react';


function Navbar({cartItem}) {
  
  const [showCart, setShowCart]=useState(false);

  const safeCartItem={
    quantity:cartItem?.quantity||0,
    price:cartItem?.price||0,
  };

  const toggleCart=()=>setShowCart(prev=>!prev)
  const total=safeCartItem.quantity*safeCartItem.price;

  return (
    <nav className="bg-white shadow-sm px-6 py-4 w-full">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
      
        <div className="flex items-center space-x-10">
          <img src={Logo} alt="Sneakers Logo" className="h-5 w-auto" />

          <ul className="hidden md:flex items-center space-x-6 text-gray-500 font-medium border-red">
            <li className="hover:text-black cursor-pointer">Collections</li>
            <li className="hover:text-black cursor-pointer">Men</li>
            <li className="hover:text-black cursor-pointer">Women</li>
            <li className="hover:text-black cursor-pointer">About</li>
            <li className="hover:text-black cursor-pointer">Contact</li>
          </ul>
        </div>

        
        <div className="flex items-center space-x-6 relative">
          <img src={CartIcon} alt="Cart" className="h-8 w-auto cursor-pointer" 
          onClick={toggleCart}
          />
          {cartItem?.quantity > 0 && (
        <span className="absolute top-2 right-15 bg-blue-500 text-white text-xs font-bold rounded-full px-2 py-0.5">
          {cartItem.quantity}
        </span>
)}

          <img
            src={Avatar}
            alt="Profile"
            className="w-9 h-9 rounded-full border border-gray-300 cursor-pointer"
          />
          {
            showCart && (
              <div className='absolute top-16 right-0 w-80 bg-white shadow-lg rounded-lg p-4 text-sm'>
                <h3 className='font-bold mb-4 border-b pb-2'>Cart</h3>
                {cartItem.quantity>0 ? (
                  <div>
                    <div className="flex items-center justify-between mb-4">
                    <img src="/image-product-1-thumbnail.jpg" alt="product" className="w-12 h-12 rounded" />
                    <div className='text-gray-700 flex-1 ml-4'>
                      <p>Fall Limited Edition Sneakers</p>
                      <p>
                        ${cartItem.price.toFixed(2)} x {cartItem.quantity}
                        <strong className='ml-2'>${total.toFixed(2)}</strong>
                      </p>

                    </div>

                    </div>
                     <button className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600">
                      Checkout
                    </button>
                  </div>
                )
                :(
                   <p className="text-center text-gray-500 py-10">Your cart is empty.</p>
                )
                }

              </div>
            )
          }
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
