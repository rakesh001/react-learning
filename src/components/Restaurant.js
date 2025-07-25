import React, { useState } from "react";

const BestRestaurantsCrousel = (props) => {
  const { restaurants } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextRestaurant = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, restaurants.length - 1)
    );
  };

  const prevRestaurant = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const hasNext = currentIndex < restaurants.length - 1;
  const hasPrev = currentIndex > 0;

  return (
    <div id="best-restaurants-carousel" className="py-8 bg-gray-100">
      <div className="text-2xl font-bold text-center mb-6">
        Best Restaurants
      </div>
      <div className="flex items-center justify-center">
        <button
          onClick={prevRestaurant}
          className="bg-gray-300 p-2 rounded-l"
          disabled={!hasPrev}
        >
          Previous
        </button>
        <div className="flex overflow-hidden">
          <div
            className="flex space-x-4"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: "transform 0.5s ease",
            }}
          >
            {restaurants.map((restaurant, index) => (
              <div
                key={index}
                className="m-4 p-4 bg-white rounded-lg shadow-lg max-w-xs"
              >
                <img
                  src={restaurant.img}
                  alt={restaurant.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <h3 className="text-xl font-semibold mt-2">
                  {restaurant.name}
                </h3>
                <p className="text-gray-600">Rating: {restaurant.rating}</p>
                <p className="text-gray-600">Type: {restaurant.type}</p>
                <p className="text-gray-600">Address: {restaurant.address}</p>
                <p className="text-gray-600">
                  Cost for Two: {restaurant.costForTwo}
                </p>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={nextRestaurant}
          className="bg-gray-300 p-2 rounded-r"
          disabled={!hasNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BestRestaurantsCrousel;
