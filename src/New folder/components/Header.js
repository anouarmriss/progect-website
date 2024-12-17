import React from "react";

const Header = () => {
  return (
    <header>
      <div className="logo">Furniture</div>
      <nav>
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
      <div className="icons">
        <span>🔍</span>
        <span>🛒</span>
        <span>👤</span>
      </div>
    </header>
  );
};

export default Header;
