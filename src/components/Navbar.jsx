import Logo from '../assets/logo.svg';
import CartIcon from '../assets/icon-cart.svg';
import Avatar from '../assets/image-avatar.png';

function Navbar() {
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

        
        <div className="flex items-center space-x-6">
          <img src={CartIcon} alt="Cart" className="h-5 w-auto cursor-pointer" />
          <img
            src={Avatar}
            alt="Profile"
            className="w-9 h-9 rounded-full border border-gray-300 cursor-pointer"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
