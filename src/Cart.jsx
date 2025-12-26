import React, { useEffect, useState } from 'react';
import './styles/Cart.css';

const apiKey = '2769d4d6bc0f44639686b1d0';
const baseCurrency = 'USD';

function Cart({
  cartProducts,
  deleteProductFromCartFunction,
  totalAmountCalculationFunction,
  setCartProducts,
}) {
  const [currency, setCurrency] = useState('USD');
  const [exchangeRate, setExchangeRate] = useState(1);

  useEffect(() => {
    if (currency === 'USD') {
      setExchangeRate(1);
    } else {
      fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCurrency}`)
        .then(response => response.json())
        .then(data => {
          if (data.conversion_rates && data.conversion_rates[currency]) {
            setExchangeRate(data.conversion_rates[currency]);
          } else {
            console.error('Error: Invalid currency or response');
          }
        })
        .catch(error => console.error('Error fetching exchange rate:', error));
    }
  }, [currency]);

  const convertedTotal = (totalAmountCalculationFunction() * exchangeRate).toFixed(2);

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h2>My Cart</h2>
        <div className="currency-selector">
          <label htmlFor="currency-select">Select Currency: </label>
          <select
            id="currency-select"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">USD ($)</option>
            <option value="EUR">Euro (€)</option>
            <option value="GBP">British Pound (£)</option>
            <option value="JPY">Japanese Yen (¥)</option>
            <option value="AUD">Australian Dollar (A$)</option>
          </select>
        </div>
      </div>

      <div className="cart-content">
        <div className="cart-items">
          {cartProducts.length === 0 ? (
            <p className="empty-cart-message">Your cart is empty.</p>
          ) : (
            cartProducts.map((item) => (
              <div key={item.product.id} className="cart-item-enhanced">
                <img
                  src={item.product.images[0]}
                  alt={item.product.name}
                  className="cart-product-image-enhanced"
                />

                <div className="cart-item-info">
                  <div className="cart-item-header">
                    <h3 className="cart-item-title">{item.product.name}</h3>
                    <button
                      className="cart-item-remove"
                      onClick={() => deleteProductFromCartFunction(item.product)}
                    >
                      ✕
                    </button>
                  </div>

                  <p className="item-meta">Size: {item.product.size}</p>

                  <p className="item-price">
                    {item.product.onSale ? (
                      <>
                        <span className="old-price">${item.product.price.toFixed(2)}</span>{' '}
                        <span className="sale-price">
                          ${(item.product.price * 0.7).toFixed(2)}
                        </span>
                      </>
                    ) : (
                      <>${item.product.price.toFixed(2)}</>
                    )}
                  </p>

                  <div className="quantity-controls">
                    <button onClick={() => {
                      setCartProducts((prev) =>
                        prev.map((prevItem) =>
                          prevItem.product.id === item.product.id
                            ? { ...prevItem, quantity: Math.max(prevItem.quantity - 1, 0) }
                            : prevItem
                        )
                      );
                    }}>−</button>
                    <span className="quantity-count">{item.quantity}</span>
                    <button onClick={() => {
                      setCartProducts((prev) =>
                        prev.map((prevItem) =>
                          prevItem.product.id === item.product.id
                            ? { ...prevItem, quantity: prevItem.quantity + 1 }
                            : prevItem
                        )
                      );
                    }}>+</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="cart-summary">
          <p className="total">Total Amount: {currency} {convertedTotal}</p>

          {cartProducts.length > 0 && (
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc_k4_6YBuWALsr_IK89QFfJyWKgGaJv50WuA7IvlN8DholPA/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="checkout-button">
                Proceed to Payment
              </button>
            </a>
          )}

          <div className="payment-info">
            <h3>Payment Methods</h3>
            <p>Cash, PayPal, Zelle or Venmo</p>

            <h3>Pick-Up Locations:</h3>
            <h4>St Louis:</h4>
            <p>6710 Clayton Rd, 63117</p>

            <h4>Chesterfield:</h4>
            <p>Jennifer Li - 636-591-5437</p>
            <p>Erica Chen - 313-671-8678</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
