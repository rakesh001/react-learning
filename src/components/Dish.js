const DishesCrousel = (props) => {
  const { dishes } = props;
  return (
    <div id="dishes-carousel" className="py-8 bg-gray-100">
      <div className="text-2xl font-bold text-center mb-6">Popular Dishes</div>
      <div className="flex flex-wrap justify-center">
        {dishes.map((dish, index) => (
          <div
            key={index}
            className="m-4 p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <a href={dish.link} className="block">
              <img
                src={`http://localhost:3000/assets/images/dishes/${dish.name}.jpg`}
                alt={dish.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3 className="text-lg font-semibold text-center mt-2">
                {dish.name}
              </h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DishesCrousel;
