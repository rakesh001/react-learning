import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./src/components/Header";
import BodyComponent from "./src/components/Body";
import FooterComponent from "./src/components/Footer";

/** Food Delivery Website Components
 * Header
 *  - Logo
 *  - Navigation Menu
 * Body
 *  - Tagline
 *  - Search
 *      - Location Dropdown
 *      - Search Text
 *  - Offer Crousel
 *      - Offer Name
 *      - Discount
 *  - Dishes Crousel
 *      - Dish Image
 *      - Dish name
 *      - Hyper link
 *  - Best Restaurent Crousel
 *    - Heading
 *      - Image
 *      - Rating
 *      - Type of food
 *      - Address
 *      - Cost for two
 *
 *  - Cities With Food deliver
 *    - Heading
 *      - City name with some text & hyper link
 * Footer
 *  - Coyyright
 *  - Contact us
 *  - Term and conditions
 * */

const AppComponent = () => {
  return (
    <div>
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent />);
