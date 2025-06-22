function Navbar() {
  return (
    <nav className="bg-white shadow-sm px-6 py-4">
      <ul className="flex items-center space-x-6 text-gray-500 font-medium">
        <li>
          <img src="/assets/logo.svg" alt="Sneakers Logo" className="h-5 w-auto" />
        </li>
        <li className="hover:text-black cursor-pointer">Collections</li>
        <li className="hover:text-black cursor-pointer">Men</li>
        <li className="hover:text-black cursor-pointer">Women</li>
        <li className="hover:text-black cursor-pointer">About</li>
        <li className="hover:text-black cursor-pointer">Contact</li>
        <li className="ml-auto">
          <img src="/assets/cart.svg" alt="Cart" className="h-5 w-auto" />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;