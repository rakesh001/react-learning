const HeaderComponent = () => {
  return (
    <div id="header" className="bg-yellow-600 p-4">
      <div className="header-wrapper flex items-center justify-between">
        <img
          src="https://picsum.photos/200/300"
          alt="Random"
          className="h-16 w-16 rounded-full"
        />
        <ul className="nav-bar-wrapper flex space-x-4">
          <li className="text-white font-semibold hover:text-yellow-300 cursor-pointer">
            Home
          </li>
          <li className="text-white font-semibold hover:text-yellow-300 cursor-pointer">
            About Us
          </li>
          <li className="text-white font-semibold hover:text-yellow-300 cursor-pointer">
            Cart
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
