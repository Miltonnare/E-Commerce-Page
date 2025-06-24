import { useState } from "react";
import Close from "../assets/icon-close.svg";
import NextIcon from "../assets/icon-next.svg";
import PrevIcon from "../assets/icon-previous.svg";

function Images() {
  const thumbnails = [
    {
      thumb: "image-product-1-thumbnail.jpg",
      full: "image-product-1.jpg",
      alt: "Thumbnail 1",
    },
    {
      thumb: "image-product-2-thumbnail.jpg",
      full: "image-product-2.jpg",
      alt: "Thumbnail 2",
    },
    {
      thumb: "image-product-3-thumbnail.jpg",
      full: "image-product-3.jpg",
      alt: "Thumbnail 3",
    },
    {
      thumb: "image-product-4-thumbnail.jpg",
      full: "image-product-4.jpg",
      alt: "Thumbnail 4",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(null);

  const openOverlay = (index) => {
    setCurrentIndex(index);
  };

  const closeOverlay = () => {
    setCurrentIndex(null);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === 0 ? thumbnails.length - 1 : prev - 1
    );
  };

  const showNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === thumbnails.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="p-6 bg-white max-w-xl mx-auto">

      <img
        src="image-product-1.jpg"
        alt="Main Product"
        className="rounded-lg mb-4"
      />

      <div className="flex space-x-4">
        {thumbnails.map((img, index) => (
          <img
            key={index}
            src={img.thumb}
            alt={img.alt}
            className="w-16 h-16 rounded-lg cursor-pointer hover:ring-2 ring-orange-500"
            onClick={() => openOverlay(index)}
          />
        ))}
      </div>

      
      {currentIndex !== null && (
        <div
          className="fixed inset-0  flex items-center justify-center z-50"
          onClick={closeOverlay}
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
           
            <button
              onClick={closeOverlay}
              className="absolute -top-6 -right-6 p-2 hover:scale-110 transition-transform z-50"
            >
              <img src={Close} alt="Close Icon" className="w-6 h-6" />
            </button>

            
            <button
              onClick={showPrev}
              className="absolute left-[-60px] top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow hover:scale-105 transition"
            >
              <img src={PrevIcon} alt="Previous" className="w-3 h-3" />
            </button>

            
            <button
              onClick={showNext}
              className="absolute right-[-60px] top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow hover:scale-105 transition"
            >
              <img src={NextIcon} alt="Next" className="w-3 h-3" />
            </button>

           
            <img
              src={thumbnails[currentIndex].full}
              alt="Enlarged Product"
              className="max-w-[78vw] max-h-[75vh] rounded-lg shadow-2xl"
            />
             <div className="flex flex-wrap gap-2 w-full justify-center mb-4 sm:mb-6 md:space-x-4 md:flex-nowrap">
            {thumbnails.map((img, index) => (
            <img
              key={index}
              src={img.thumb}
              alt={img.alt}
              className="w-1/4 min-w-[64px] max-w-[90px] h-16 rounded-lg cursor-pointer hover:ring-2 ring-orange-500 object-cover md:w-16 md:min-w-0 md:max-w-none"
              onClick={() => openOverlay(index)}
    />
  ))}
</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Images;
