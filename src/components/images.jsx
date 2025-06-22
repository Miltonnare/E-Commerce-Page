import { useState } from "react";

function Images() {

  const [overlayImage,setOverlayImage]=useState(null)

  const thumbnails=[
    {
      thumb:"/image-product-1-thumbnail.jpg",
      full:"/image-product-1.jpg",
      alt:"Thembnail-1"
    },
    {
      thumb:"/image-product-2-thumbnail.jpg",
      full:"/image-product-2.jpg",
      alt:"Thumbnail-2"
    },
    {
      thumb:"/image-product-3-thumbnail.jpg",
      full:"/image-product-3.jpg",
      alt:"Thumbnail-3"
    },
    {
      thumb:"/image-product-4-thumbnail.jpg",
      full:"/image-product-4.jpg",
      alt:"Thumbnail-4"
    }

  ]
  return (
    <div className="p-6 bg-white max-w-xl mx-auto">
      <img
        src="/image-product-1.jpg"
        alt="Main athletic sneaker"
        className="rounded-lg mb-4"
      />
      <div className="flex space-x-4">
       {thumbnails.map( 
        (img,index)=>(
          <img 
          key={index}
          src={img.thumb}
          alt={img.alt}
          className="w-16 h-16 rounded-lg cursor-pointer hover:ring-2 ring-orange-500"
          onClick={
            ()=>setOverlayImage(img.full)
          }
          />
        )
       )}
      
      </div>
     {overlayImage && (
  <div
    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
    onClick={() => setOverlayImage(null)}
  >
    <img
      src={overlayImage}
      alt="Enlarged view"
      className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl"
    />
  </div>
)}

    </div>
  );
}


export default Images;