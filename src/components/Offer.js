import React, { useState } from "react";

const OfferCarousel = (props) => {
  const { offers } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextOffer = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % offers.length);
  };

  const prevOffer = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + offers.length) % offers.length
    );
  };

  return (
    <div className="relative">
      <div id="offer-carousel" className="flex overflow-hidden">
        <div
          className="flex transition-transform"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {offers.map((offer, index) => (
            <div
              key={index}
              className="flex-none w-64 bg-white rounded-lg shadow-lg overflow-hidden mx-2" // Added mx-2 for gap
            >
              <img
                src={offer.img}
                alt={offer.name}
                className="w-full h-40 object-cover rounded-t-lg" // Added rounded-t-lg for rounded top corners
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{offer.name}</h3>
                <p className="text-green-600 font-bold">{offer.discount}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {offers.length > 1 && (
        <>
          <button
            onClick={prevOffer}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded"
            disabled={currentIndex === 0}
          >
            &lt;
          </button>
          <button
            onClick={nextOffer}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded"
            disabled={currentIndex === offers.length - 1}
          >
            &gt;
          </button>
        </>
      )}
    </div>
  );
};

export default OfferCarousel;
