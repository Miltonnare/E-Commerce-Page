
function Images() {
  return (
    <div className="p-6 bg-white max-w-xl mx-auto">
      <img
        src="/image-product-1.jpg"
        alt="Main athletic sneaker"
        className="rounded-lg mb-4"
      />
      <div className="flex space-x-4">
        <img
          src="/image-product-1-thumbnail.jpg"
          alt="Thumbnail 1"
          className="w-16 h-16 rounded-lg cursor-pointer hover:ring-2 ring-orange-500"
        />
        <img
          src="/image-product-2-thumbnail.jpg"
          alt="Thumbnail 2"
          className="w-16 h-16 rounded-lg cursor-pointer hover:ring-2 ring-orange-500"
        />
        <img
          src="/image-product-3-thumbnail.jpg"
          alt="Thumbnail 3"
          className="w-16 h-16 rounded-lg cursor-pointer hover:ring-2 ring-orange-500"
        />
        <img
          src="/image-product-4-thumbnail.jpg"
          alt="Thumbnail 4"
          className="w-16 h-16 rounded-lg cursor-pointer hover:ring-2 ring-orange-500"
        />
      </div>
    </div>
  );
}


export default Images;