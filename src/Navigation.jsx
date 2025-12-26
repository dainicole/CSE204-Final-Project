import { NavLink } from 'react-router-dom';
import './styles/Navigation.css';

function Navigation({ cartProducts }) {
  const cartCount = cartProducts.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="nav">
      <ul className="nav-list">
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/previous-projects" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Previous Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/shop/products" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/shop/view-cart" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            View Cart {cartCount > 0 && <span className="cart-badge">({cartCount})</span>}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
