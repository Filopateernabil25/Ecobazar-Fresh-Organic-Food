import React from 'react'
import { Link } from 'react-router-dom';

export default function About() {
    
    const logos = [
        'bookoff-corporation-logo.png', 'mango-1.png', 'food.png',
        'vector.png', 'mango-1.png', 'food.png'
    ];
    return (
        <>
            <section className="about-intro py-5 mt-3">
                <div className="container">
                    <div className="row align-items-center">
                        {/* النص */}
                        <div className="col-12 col-lg-6">
                            <h2 className="fw-bold  mb-4">100% Trusted Organic <br /> Food Store</h2>
                            <p className="text-muted w-75 small">
                                Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.
                            </p>
                        </div>
                        {/* الصورة */}
                        <div className="col-12 col-lg-6">
                            <img src="../public/images/About/intro-image.png" className="img-fluid rounded shadow-sm" alt="Farmer" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-hero-section d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        {/* دفع الكلام لليمين باستخدام offset أو خليه في عمود لوحده */}
                        <div className="col-12 col-md-6 offset-md-6">
                            <div className="hero-content p-4">
                                <h2 className="fw-bold main-title mb-4 display-5">100% Trusted Organic Food Store</h2>

                                <div className="d-flex align-items-start mb-3">
                                    <div className="icon-box me-3 text-success">
                                        <i className="bi bi-leaf fs-2"></i>
                                    </div>
                                    <div>
                                        <h5 className="fw-bold mb-0">100% Organic food</h5>
                                        <p className="text-muted">100% healthy & Fresh food.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-intro py-5 mt-3">
                <div className="container">
                    <div className="row align-items-center">
                        {/* النص */}
                        <div className="col-12 col-lg-6">
                            <h2 className="fw-bold  mb-4">We Delivered, You <br /> Enjoy Your Order.</h2>
                            <p className="text-muted w-75 small">
                                Ut suscipit egestas suscipit. Sed posuere pellentesque nunc, ultrices consectetur velit dapibus eu. Mauris sollicitudin dignissim diam, ac mattis eros accumsan rhoncus. Curabitur auctor bibendum nunc eget elementum.
                            </p>
                            <ul className="list-unstyled custom-checklist mb-5">
                                <li className="d-flex align-items-center mb-2">
                                    <div className="check-icon me-2">
                                        <i className="bi bi-check2 "></i>
                                    </div>
                                    <span className="list-text">Sed in metus pellentesque.</span>
                                </li>

                                <li className="d-flex align-items-center mb-2">
                                    <div className="check-icon me-2">
                                        <i className="bi bi-check2"></i>
                                    </div>
                                    <span className="list-text">Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.</span>
                                </li>

                                <li className="d-flex align-items-center">
                                    <div className="check-icon me-2">
                                        <i className="bi bi-check2"></i>
                                    </div>
                                    <span className="list-text">Maecenas ut nunc fringilla erat varius.</span>
                                </li>
                            </ul>
                            <a href='/shopping' className="promo-about">Shop Now <span className="arrow"> <i class="fa-solid fa-arrow-right"></i></span></a>

                        </div>
                        {/* الصورة */}
                        <div className="col-12 col-lg-6">
                            <img src="../public/images/About/intro-image.png" className="img-fluid rounded shadow-sm" alt="Farmer" />
                        </div>
                    </div>
                </div>
            </section>

            <div className="logo-slider-container py-5">
                <div className="container">
                    <div className="logo-track">
                        {[...logos, ...logos].map((logo, index) => (
                            <div className="logo-item" key={index}>
                                <img src={`../public/images/clients/${logo}`} alt="brand-logo" />
                                <div className="divider"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="back-to-home-wrapper">
                <Link to="/" className="back-to-home-btn">
                    <span className="btn-icon">
                        <i className="fa-solid fa-arrow-left-long"></i>
                    </span>
                    <span className="btn-text">Back to Home</span>
                </Link>
            </div>
        </>
    );
}
