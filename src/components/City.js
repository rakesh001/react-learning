const CitiesWithDelivery = (props) => {
  const { cities } = props;
  return (
    <div id="cities-with-delivery" className="p-6 bg-gray-100">
      <div className="text-2xl font-bold mb-4">Cities with Food Delivery</div>
      {cities.map((city, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg p-4 mb-4 transition-transform transform hover:scale-105"
        >
          <h3 className="text-xl font-semibold">{city.name}</h3>
          <p className="text-gray-600">{city.text}</p>
          <a
            href={city.link}
            className="mt-2 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Explore
          </a>
        </div>
      ))}
    </div>
  );
};

export default CitiesWithDelivery;
