import React, { useEffect } from 'react'
import './assets/MainPageLayouts.css' // Create this CSS file for styling
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { useCart } from '../Pages/product/CartContext';
export default function MainPageLayouts() {
    const location = useLocation();
    const currentPath = location.pathname;
    const { cart } = useCart();
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    useEffect(() => {
        const el = document.querySelector(".scroller");
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop;
            el.style.width = `${(scrollTop / height) * 100}%`;
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
                            <i className="fa-solid fa-bag-shopping"></i>
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
                        <NavLink to={"/"}>Home</NavLink>
                        <NavLink to={"/shopping"}>Shop</NavLink>
                        <NavLink to={"/faqs"}>Faqs</NavLink>
                        <NavLink to={"/about"}>About</NavLink>
                        <NavLink to={"/contact"}>Contact Us</NavLink>
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

            <main class="content">
                <Outlet />

            </main>

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
                        <a href="https://www.linkedin.com/in/filopateer-nabil-developer"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://github.com/Filopateernabil25"><i className="fab fa-twitter"></i></a>
                        <a href="https://www.linkedin.com/in/filopateer-nabil-developer"><i className="fab fa-pinterest-p"></i></a>
                        <a href="https://github.com/Filopateernabil25"><i className="fab fa-instagram"></i></a>
                    </div>
                    {/* </div> */}
                </div>
            </div>

        </>
    )
}
