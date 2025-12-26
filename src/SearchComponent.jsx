import React from 'react';

function SearchComponent({ searchProduct, productSearchUserFunction }) {
  return (
    <header className="Shop-header">
      <h1>CReT Products</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchProduct}
          onChange={productSearchUserFunction}
        />
      </div>
    </header>
  );
}

export default SearchComponent;
