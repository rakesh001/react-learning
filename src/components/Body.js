import DishesCrousel from "./Dish";
import OfferCarousel from "./Offer";
import BestRestaurantsCrousel from "./Restaurant";
import CitiesWithDelivery from "./City";

import { useState } from "react";
import { cities, restaurants, dishes, offers } from "../../utils/dummyData";

const BodyComponent = () => {
  const [restaurantList, setRestaurantList] = useState(restaurants);

  return (
    <div id="body-wrapper" className="p-4 bg-gray-100">
      <div className="tagline-wrapper text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Welcome to
          <span className="text-red-500 underline"> Feastly</span>
        </h1>
        <p className="text-gray-600">Explore the best dishes & restaurants!</p>
      </div>

      <div className="search-wrapper mb-6 flex flex-col md:flex-row md:justify-center md:space-x-4">
        <select
          name="city-search"
          className="location-dropdown p-2 border border-gray-300 rounded-md mb-4 md:mb-0 md:w-1/3"
          onChange={(e) => {
            const city = e.target.value;
            const filteredRestaurants = restaurants.filter(
              (restaurant) => restaurant.city === city
            );
            setRestaurantList(filteredRestaurants);
          }}
        >
          <option key="default" value="">
            Select City
          </option>
          {cities.map((city, index) => (
            <option key={index} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          name="text-search"
          placeholder="Search for dishes or restaurants"
          className="p-2 border border-gray-300 rounded-md md:w-1/3"
          onKeyUp={(e) => {
            const query = e.target.value.toLowerCase();
            const filteredRestaurants = restaurants.filter((restaurant) =>
              restaurant.name.toLowerCase().includes(query)
            );
            setRestaurantList(filteredRestaurants);
          }}
        />
      </div>
      <OfferCarousel offers={offers} />
      <DishesCrousel dishes={dishes} />
      <BestRestaurantsCrousel restaurants={restaurantList} />
      <CitiesWithDelivery cities={cities} />
    </div>
  );
};

export default BodyComponent;
