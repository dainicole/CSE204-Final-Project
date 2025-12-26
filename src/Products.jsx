import React from 'react';
import './styles/Products.css';

function Products({ filteredProducts, openQuickview, addProductToCartFunction }) {
  return (
    <div className="product-grid">
      {filteredProducts.map((product) => (
        <div key={product.id} className="product-card">
          <div className="image-wrapper">
            <img
              className="product-image"
              src={product.images[0]}
              alt={product.name}
            />
            <button
              className="quickview-button"
              onClick={() => openQuickview(product)}
            >
              Quickview
            </button>
          </div>

          <div className="product-info">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">${product.price}</p>
            <button
              className="add-to-cart"
              onClick={() => addProductToCartFunction(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
