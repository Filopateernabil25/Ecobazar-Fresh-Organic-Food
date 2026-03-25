import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
    
    return (
        <>

            <div className='container my-5'>
                <div className="row g-4 align-items-stretch">

                    {/* 1. الصور (الآن على اليسار) */}
                    <div className="col-lg-5 col-md-4">
                        <div className="row g-2 h-100">
                            {/* صورة 1 - GitHub */}
                            <div className="col-6">
                                <a href="https://github.com/Filopateernabil25" target="_blank" rel="noopener noreferrer" className="insta-photo-card">
                                    <img src="../public/images/SocialMedia/4.png" alt="Coconut" className="insta-img" />
                                    <div className="insta-overlay">
                                        <i class="fa-brands fa-github insta-icon"></i>
                                    </div>
                                </a>
                            </div>
                            {/* صورة 2 - LinkedIn */}
                            <div className="col-6">
                                <a href="https://www.linkedin.com/in/filopateer-nabil-developer" target="_blank" rel="noopener noreferrer" className="insta-photo-card h-100">
                                    <img src="../public/images/SocialMedia/2.png" alt="LinkedIn" className="insta-img" />
                                    <div className="insta-overlay"><i className="fa-brands fa-linkedin-in insta-icon"></i></div>
                                </a>
                            </div>
                            {/* صورة 3 - صورة إضافية */}
                            <div className="col-6">
                                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="insta-photo-card">
                                    <img src="../public/images/SocialMedia/1.png" alt="Fresh tomatoes" className="insta-img" />
                                    <div className="insta-overlay">
                                        <i class="fa-brands fa-facebook-f insta-icon"></i>
                                    </div>
                                </a>
                            </div>
                            {/* صورة 4 - صورة إضافية */}
                            <div className="col-6">
                                <a href="https://wa.me/201270668295" target="_blank" rel="noopener noreferrer" className="insta-photo-card">
                                    <img src="../public/images/SocialMedia/6.png" alt="Various vegetables" className="insta-img" />
                                    <div className="insta-overlay">
                                        <i class="fa-solid fa-phone insta-icon"></i>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* 2. الفورم (الآن على اليمين) */}
                    <div className="col-lg-7 col-md-8">
                        <div className="contact-form-wrapper bg-white p-4 p-lg-5 shadow-sm rounded-4 h-100">
                            <h3 className="fw-bold mb-2">Just Say Hello!</h3>
                            <p className="text-muted small mb-4">
                                Do you fancy saying hi to me or you want to get started?
                                Feel free to contact me.
                            </p>

                            <form>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <input type="text" className="form-control custom-input" placeholder="Filopateer Nabil" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="email" className="form-control custom-input" placeholder="felofelo495@gmail.com" />
                                    </div>
                                    <div className="col-12">
                                        <input type="text" className="form-control custom-input" placeholder="Hello , I'm Ahmed" />
                                    </div>
                                    <div className="col-12">
                                        <textarea className="form-control custom-input" rows="7" placeholder="Subjects"></textarea>
                                    </div>
                                    <div className="col-12 text-end">
                                        <button type="submit" className="btn btn-success btn-send rounded-pill px-5">
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
            <section className="map-section container-fluid px-0 mt-5">
                <div className="row g-0">
                    <div className="col-12">
                        <div className="map-container" style={{ width: '100%', height: '450px', overflow: 'hidden' }}>
                            <iframe
                                title="Shopery Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.1166468767!2d31.2335!3d30.0444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAyJzQwLjAiTiAzMcKwMTQnMDAuNiJF!5e0!3m2!1sen!2seg!4v1710000000000!5m2!1sen!2seg"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(0.5) contrast(1.2)' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
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