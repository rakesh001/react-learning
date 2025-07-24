import React from "react";
import ReactDOM from "react-dom/client";

// Using JSX
const Logo = () => (
  <div className="logo-wrapper">
    <img src="https://picsum.photos/200/300" alt="Random" />
  </div>
);
const SearchBar = () => (
  <div className="search-wrapper">
    <input type="text" placeholder="Search..."></input>
  </div>
);
const UserIcon = () => (
  <div className="user-icon-wrapper">
    <img src="https://picsum.photos/200/300" alt="Random" />
  </div>
);
const Heading = () => (
  <div id="header">
    {Logo()}
    <SearchBar />
    <UserIcon></UserIcon>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
