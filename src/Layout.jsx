import { Outlet } from 'react-router';
import Navigation from './Navigation';
import './styles/Layout.css';
import { useState } from 'react';

function Layout() {
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <>
      <Navigation cartProducts={cartProducts} />

      <main>
        <Outlet context={{ cartProducts, setCartProducts }} />
      </main>

      <footer>
        <p>
          Follow us at STLCRET
          <a href="https://www.facebook.com/STLCRET/" className="social-link">
            <img
              src="https://cdn-icons-png.flaticon.com/512/20/20673.png"
              alt="Facebook logo"
              className="social-logo"
            />
          </a>
        </p>
        <p>Established April 2020</p>
        <p>CopyRight &copy; 2025</p>
      </footer>
    </>
  );
}

export default Layout;
