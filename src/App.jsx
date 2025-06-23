import { useState } from "react";
import Navbar from "./components/Navbar";
import Details from "./components/Details";
import Images from "./components/images";
import "./index.css";
import ErrorBoundary from "./components/errorBoundary";

function App() {
  const [cartItem,setCartItem]=useState({quantity:0,price:125});

  const handleAddToCart=(quantity)=>{
    if(quantity>0){
      setCartItem((prev)=>({
        ...prev,
        quantity
      }))
    }
  }

  return (
    <div className="bg-white min-h-screen font-sans">
      <ErrorBoundary> 

        <Navbar cartItem={cartItem}/>

      </ErrorBoundary>
      
      <div className="p-6 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <Images />
        <Details onAddToCart={handleAddToCart}/>
      </div>
    </div>
  );
}
export default App;
