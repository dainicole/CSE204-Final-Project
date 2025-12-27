import React, { useState } from 'react';
import { Routes, Route, useOutletContext } from 'react-router-dom';
import SearchComponent from './SearchComponent';
import Products from './Products';
import Cart from './Cart';
import Quickview from './Quickview';
import './styles/Shop.css';

function Shop() {
  const { cartProducts, setCartProducts } = useOutletContext();

  const [products] = useState([
    { id: 1, name: 'Star Keychain', price: 4, size: 'S', onSale: true, images: ['/CSE204-Final-Project/productImages/star.jpeg'] },
    { id: 2, name: 'Whale Keychain', price: 3, size: 'S', onSale: false, images: ['/CSE204-Final-Project/productImages/whaleBlue.png','/CSE204-Final-ProjectproductImages/whaleLightBlue.png','/CSE204-Final-Project/productImages/whaleOrange.png', '/CSE204-Final-ProjectproductImages/yellowWhale.png'] },
    { id: 3, name: 'Octopus Keychain', price: 5, size: 'S', onSale: true, images: ['/CSE204-Final-Project/productImages/octopusKeyChain.jpeg', '/CSE204-Final-ProjectproductImages/octopusKeychainPink.png', '/CSE204-Final-Project/productImages/octopusMultiple.png'] },
    { id: 4, name: 'Tiger Keychain', price: 6, size: 'S', onSale: false, images: ['/CSE204-Final-Project/productImages/tigerKeychain.jpeg'] },
    { id: 5, name: 'Tiger', price: 8, size: 'M', onSale: false, images: ['/CSE204-Final-Project/productImages/tiger.jpeg'] },
    { id: 6, name: 'Bunny', price: 10, size: 'M', onSale: false, images: ['/CSE204-Final-Project/productImages/bunny.png'] },
    { id: 7, name: 'Bird', price: 12, size: 'M', onSale: false, images: ['/CSE204-Final-Project/productImages/bird.png'] },
    { id: 8, name: 'Octopus', price: 12, size: 'M', onSale: false, images: ['/CSE204-Final-Project/productImages/octopus.png'] },
    { id: 9, name: 'Fox Keychain', price: 10, size: 'S', onSale: false, images: ['/CSE204-Final-Project/productImages/foxKeyChainS.png'] },
    { id: 10, name: 'Fox KeyChain', price: 10, size: 'M', onSale: false, images: ['/CSE204-Final-Project/productImages/foxKeyChainM.jpg'] },
    { id: 11, name: 'Fox', price: 10, size: 'M', onSale: false, images: ['/CSE204-Final-Project/productImages/fox.png'] },
    { id: 12, name: 'Fox with Skirt', price: 12, size: 'M', onSale: true, images: ['/CSE204-Final-Project/productImages/foxSkirt.jpeg'] },
    { id: 13, name: 'Sleepy Fox', price: 12, size: 'M', onSale: false, images: ['/CSE204-Final-Project/productImages/sleepyFox.jpeg'] },
    { id: 14, name: 'Turtle Basket', price: 12, size: 'M', onSale: false, images: ['/CSE204-Final-Project/productImages/turtleBasket.png'] },
    { id: 15, name: 'Cat', price: 8, size: 'M', onSale: true, images: ['/CSE204-Final-Project/productImages/cat.png'] },
    { id: 16, name: 'Ox', price: 15, size: 'L', onSale: false, images: ['/CSE204-Final-Project/productImages/ox.png'] },
    { id: 17, name: 'Yellow Tiger', price: 8, size: 'M', onSale: false, images: ['/CSE204-Final-Project/productImages/yellowTiger.png'] },
    { id: 18, name: 'Tiger (Full Body)', price: 15, size: 'L', onSale: false, images: ['/CSE204-Final-Project/productImages/tigerFullBody.png','/CSE204-Final-Project/productImages/tigerFullBody2.png'] },
    { id: 19, name: 'Mouse', price: 6, size: 'S', onSale: false, images: ['/CSE204-Final-Project/productImages/mouse.png'] },
    { id: 20, name: 'Mouse', price: 10, size: 'L', onSale: true, images: ['/CSE204-Final-Project/productImages/mouseL.png'] },
    { id: 21, name: 'Penguin', price: 6, size: 'M', onSale: false, images: ['/CSE204-Final-Project/productImages/penguin.png','/CSE204-Final-Project/productImages/penguinTeal.png','/CSE204-Final-Project/productImages/penguinMultiple.png'] },
    { id: 22, name: 'Duck', price: 8, size: 'M', onSale: false, images: ['/CSE204-Final-Project/productImages/duck.png'] },
    { id: 23, name: 'Jellyfish', price: 8, size: 'M', onSale: false, images: ['/CSE204-Final-Project/productImages/jellyfish.png'] },
    { id: 24, name: 'Rabbit', price: 6, size: 'M', onSale: false, images: ['/CSE204-Final-Project/productImages/rabbit.png', '/CSE204-Final-Project/productImages/blueRabbit.png'] },
  ]);

  const [searchProduct, setSearchProduct] = useState('');
  const [selectedSize, setSelectedSize] = useState('All');
  const [sortBy, setSortBy] = useState('none');
  const [onSaleOnly, setOnSaleOnly] = useState(false);
  const [quickviewProduct, setQuickviewProduct] = useState(null);

  const openQuickview = (product) => {
    setQuickviewProduct(product);
  };

  const closeQuickview = () => {
    setQuickviewProduct(null);
  };

  const addProductToCartFunction = (product) => {
    const alreadyInCart = cartProducts.find(item => item.product.id === product.id);
    if (alreadyInCart) {
      const updatedCart = cartProducts.map(item =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartProducts(updatedCart);
    } else {
      setCartProducts([...cartProducts, { product: product, quantity: 1 }]);
    }
  };

  const deleteProductFromCartFunction = (product) => {
    const updatedCart = cartProducts.filter(item => item.product.id !== product.id);
    setCartProducts(updatedCart);
  };

  const totalAmountCalculationFunction = () => {
    return cartProducts.reduce((total, item) => {
      const price = item.product.onSale
        ? item.product.price * 0.7
        : item.product.price;
  
      return total + price * item.quantity;
    }, 0);
  };
  

  const productSearchUserFunction = (event) => {
    setSearchProduct(event.target.value);
  };

  const filteredProducts = products
    .filter(product => product.name.toLowerCase().includes(searchProduct.toLowerCase()))
    .filter(product => selectedSize === 'All' || product.size === selectedSize)
    .filter(product => !onSaleOnly || product.onSale)
    .sort((a, b) => {
      if (sortBy === 'priceLowHigh') return a.price - b.price;
      if (sortBy === 'priceHighLow') return b.price - a.price;
      if (sortBy === 'nameAZ') return a.name.localeCompare(b.name);
      if (sortBy === 'nameZA') return b.name.localeCompare(a.name);
      return 0;
    });

  return (
    <div className="Shop">
      <main className="Shop-main">
        <Routes>
          <Route index element={
            <>
              <SearchComponent
                searchProduct={searchProduct}
                productSearchUserFunction={productSearchUserFunction}
              />

              <div className="filter-controls">
                <label>
                  Size:
                  <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
                    <option value="All">All</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                  </select>
                </label>

                <label>
                  Sort By:
                  <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="none">None</option>
                    <option value="priceLowHigh">Price: Low to High</option>
                    <option value="priceHighLow">Price: High to Low</option>
                    <option value="nameAZ">Alphabetical (A-Z)</option>
                    <option value="nameZA">Alphabetical (Z-A)</option>
                  </select>
                </label>

                <label>
                  <input
                    type="checkbox"
                    checked={onSaleOnly}
                    onChange={() => setOnSaleOnly(!onSaleOnly)}
                  />
                  On Sale Only
                </label>
              </div>

              <Products
                products={products}
                filteredProducts={filteredProducts}
                addProductToCartFunction={addProductToCartFunction}
                openQuickview={openQuickview}
              />

              {quickviewProduct && (
                <Quickview product={quickviewProduct} onClose={closeQuickview} />
              )}
            </>
          } />
          
          <Route path="products" element={
            <>
              <SearchComponent
                searchProduct={searchProduct}
                productSearchUserFunction={productSearchUserFunction}
              />

              <div className="filter-controls">
                <label>
                  Size:
                  <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
                    <option value="All">All</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                  </select>
                </label>

                <label>
                  Sort By:
                  <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="none">None</option>
                    <option value="priceLowHigh">Price: Low to High</option>
                    <option value="priceHighLow">Price: High to Low</option>
                    <option value="nameAZ">Alphabetical (A-Z)</option>
                    <option value="nameZA">Alphabetical (Z-A)</option>
                  </select>
                </label>

                <label>
                  <input
                    type="checkbox"
                    checked={onSaleOnly}
                    onChange={() => setOnSaleOnly(!onSaleOnly)}
                  />
                  On Sale Only
                </label>
              </div>

              <Products
                products={products}
                filteredProducts={filteredProducts}
                addProductToCartFunction={addProductToCartFunction}
                openQuickview={openQuickview}
              />

              {quickviewProduct && (
                <Quickview product={quickviewProduct} onClose={closeQuickview} />
              )}
            </>
          } />

          <Route path="view-cart" element={
            <div>
              <Cart
                cartProducts={cartProducts}
                deleteProductFromCartFunction={deleteProductFromCartFunction}
                totalAmountCalculationFunction={totalAmountCalculationFunction}
                setCartProducts={setCartProducts}
              />
            </div>
          } />
        </Routes>
      </main>
    </div>
  );
}

export default Shop;
