import Logo from '../assets/logo.svg';
import CartIcon from '../assets/icon-cart.svg';
import Avatar from '../assets/image-avatar.png';
import HamburgerIcon from '../assets/icon-menu.svg';
import CloseIcon from '../assets/icon-close.svg';
import { useState } from 'react';



function Navbar({cartItem}) {
  
  const [showCart, setShowCart]=useState(false);

  const safeCartItem={
    quantity:cartItem?.quantity||0,
    price:cartItem?.price||0,
  };

  const toggleCart=()=>setShowCart(prev=>!prev)
  const total=safeCartItem.quantity*safeCartItem.price;
  const[sidebarOpen,setSidebarOpen]=useState(false);
  const toggleSidebar=()=>setSidebarOpen(prev=>!prev)

  return (
    <nav className="bg-white shadow-sm px-6 py-4 w-full">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        <div className='md:hidden mr-4'>
          <img 
          src={HamburgerIcon}
           alt="Hamburger Menu" 
           className='h-6 w-6 cursor-pointer'
           onClick={toggleSidebar}
           />

        </div>
      
        <div className="flex items-center space-x-10">
          <img src={Logo} alt="Sneakers Logo" className="h-5 w-auto" />

          <ul className="hidden md:flex items-center space-x-6 text-gray-500 font-medium">
              <li className="pb-2 hover:text-black hover:border-b-4 hover:border-orange-500 border-transparent">Collections</li>
              <li className="pb-2 hover:text-black hover:border-b-4 hover:border-orange-500 border-transparent">Men</li>
              <li className="pb-2 hover:text-black hover:border-b-4 hover:border-orange-500 border-transparent">Women</li>
              <li className="pb-2 hover:text-black hover:border-b-4 hover:border-orange-500 border-transparent">About</li>
              <li className="pb-2 hover:text-black hover:border-b-4 hover:border-orange-500 border-transparent">Contact</li>
</ul>

        </div>

        
        <div className="flex items-center space-x-6 relative">
          <img src={CartIcon} alt="Cart" className="h-8 w-auto cursor-pointer" 
          onClick={toggleCart}
          />
          {cartItem?.quantity > 0 && (
        <span className="absolute top-0 right-12 bg-orange-500 text-white text-xs font-bold rounded-full px-2 py-0.5">
          {cartItem.quantity}
        </span>
)}

          <img
            src={Avatar}
            alt="Profile"
            className="w-9 h-9 rounded-full border border-gray-300 cursor-pointer hover:border-2 hover:border-orange-500"
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
      <div
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-6 transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
          onClick={e => e.stopPropagation()}
        >
        <button className='mb-8 'onClick={toggleSidebar}>
          <img src={CloseIcon} alt="Close Menu" className='h-6 w-6' />

        </button>
        <ul className='flex flex-col space-y-6 text-gray-700 font-medium text-lg'>
         <li className="hover:text-orange-500">Collections</li>
            <li className="hover:text-orange-500">Men</li>
            <li className="hover:text-orange-500">Women</li>
            <li className="hover:text-orange-500">About</li>
            <li className="hover:text-orange-500">Contact</li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
