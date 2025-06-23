import { useState } from "react";
import Navbar from "./components/Navbar";
import Details from "./components/Details";
import Images from "./components/images";
import "./index.css";

function App() {
  const [cartItem,setCartItem]=useState(null);

  const handleAddToCart=(quantity)=>{
    if(quantity>0){
      setCartItem({quantity})
    }
  }

  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar cartItem={cartItem}/>
      <div className="p-6 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <Images />
        <Details onAddToCart={handleAddToCart}/>
      </div>
    </div>
  );
}
export default App;
