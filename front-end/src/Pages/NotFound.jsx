import React from 'react'
import '../Layouts/assets/MainPageLayouts.css' // Create this CSS file for styling
import { Link, Outlet, useLocation } from 'react-router-dom'
import { useCart } from '../Pages/product/CartContext';

export default function NotFound() {
  const location = useLocation();
  const currentPath = location.pathname;
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <div id='section-location'>
        <div id="location">
          <div className="location_text_left">
            <p><i className="fa-solid fa-location-dot" /> Store Location: Cairo, Egypt</p>
          </div>
          <div className="location_text_right">
            <a href="/login">Sign In</a>
            <a href="/register">Sign Up</a>
          </div>
        </div>
      </div>
      <header>
        <nav>
          <div id="logo">
            <a href="/"><img src="../public/images/logo.png" alt="" /> Ecobazar</a>
          </div>
          <div id="search">
            <input type="search" placeholder="search" />
            <button>Search</button>
          </div>
          <div id="icon">
            <Link className="cart-icon-wrapper" to="/cart">
              <i className="fa-solid fa-basket-shopping"></i>
              <span className="cart-badge">
                {totalItems}
              </span>
            </Link>

          </div>
        </nav>
      </header>

      <section className="top-header">
        <div className="header-content">
          <div className="links">
            <Link to={"/"}>Home</Link>
            <Link to={"/shopping"}>Shop</Link>
            <Link to={"/faqs"}>Faqs</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact Us</Link>
          </div>
          <div className="phone-main">
            <h5>
              <i className="fa-solid fa-phone-volume"></i> 2001270668295
            </h5>
          </div>
        </div>
      </section>

      <section className="hero">
        <div className="content">
          <p><i class="fa-regular fa-house"></i> {currentPath}</p>
        </div>
      </section>

      <div className="container mt-5 text-center">
        <img src="../public/images/404NotFound.png" alt="404 Not Found" />
        <div className="my-3 text-notfound">
          <h2>Oops! page not found</h2>
          <p className='text-muted my-4'>Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros. Maecenas sagittis tortor at metus mollis</p>
          <a href="/" className="btn btn-success rounded-5 mb-5 px-3">Go Back Home</a>
        </div>
      </div>

      <footer className="footer">
        <div className="newsletter-section">
          <div className="newsletter-content">
            <div className="text-side">
              <h2>Subcribe our Newsletter</h2>
              <p>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.</p>
            </div>

            <div className="form-side">
              <div className="input-group">
                <input type="email" placeholder="Your email address" />
                <button className="btn-subscribe">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-main">
        <div className="container footer-grid">
          <div className="footer-col branding">
            <div className="mb-3 d-flex align-items-center  gap-2">
              <img src="../public/images/logo.png" alt="Ecobazar" className="logo" />
              <h2 className="mb-0">Ecobazar</h2>
            </div>
            <p id='description'>Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna.</p>
            <div className="contact-info">
              <span><a href="https://wa.me/201270668295">+2001270608295</a></span> <span className="or">or</span> <span><a href="https://wa.me/201270668295">felo495@gmail.com</a></span>
            </div>
          </div>
          <div className="footer-col">
            <h3>My Account</h3>
            <ul>
              <li><Link to={"/"}>Home</Link></li>
              <li><a href="#">Order History</a></li>
              <li><a href="#">Shopping Cart</a></li>
              <li><a href="#">Wishlist</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Helps</h3>
            <ul>
              <li><Link to={"/contact"}>Contact Us</Link></li>
              <li><Link to={"/faqs"}>Faqs</Link></li>
              <li><a href="#">Terms &amp; Condition</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Proxy</h3>
            <ul>
              <li><Link to={"/about"}>About</Link></li>
              <li><Link to={"/shopping"}>Shop</Link></li>
              <li><Link to={"/shopping"}>Products</Link></li>
              <li><a href="#">Track Order</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Categories</h3>
            <ul>
              <li><Link to={"/shopping"}>Fruit &amp; Vegetables</Link></li>

              <li><a href="#">Meat &amp; Fish</a></li>
              <li><a href="#">Bread &amp; Bakery</a></li>
              <li><a href="#">Beauty &amp; Health</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          {/* <div className="container"> */}
          <p>Ecobazar eCommerce © 2026. All Rights Reserved</p>
          {/* الأيقونات اللي على اليمين */}
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-pinterest-p"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  )
}
