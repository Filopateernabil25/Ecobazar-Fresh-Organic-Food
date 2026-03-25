import React, { useContext, useState } from 'react'
import { ProductSingleContext } from '../../services/ApiSingleProduct';
import { CategoryContext } from '../../services/ApiCategories';
import { useCart } from './CartContext';
import Swal from "sweetalert2";
import Products from './Products';
import { ProductContext } from '../../services/ApiProducts';
import { Link } from 'react-router-dom';

export default function ProductDetails() {
    const [quantity, setQuantity] = useState(1);
    const { product } = useContext(ProductSingleContext);
    const { Categories } = useContext(CategoryContext);
    const { products } = useContext(ProductContext);
    const categoryName = Categories.find(c => c.id === product.category_id)?.name || "Unknown";
    const { addToCart } = useCart();
    const handleAddToCart = () => {
        addToCart(product, quantity);

        Swal.fire({
            title: "Good job!",
            text: `${product.name} has been added to the cart!`,
            icon: "success",
            confirmButtonText: "OK"
        });
    }

    return (
        <>
            <div className="container my-5">
                <div className="row g-5">
                    <div className="col-lg-6 d-flex">
                        <div className="thumbnail-stack d-flex flex-column gap-2 me-3">
                            <img src={product.image} className="thumb-img" alt={product.name} />
                        </div>
                        <div className="main-image-container flex-grow-1">
                            <img src={product.image} className="img-fluid w-100" alt={product.name} />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="product-info">
                            <div className="d-flex align-items-center gap-2 mb-2">
                                <h1 className="fw-bold mb-0">{product.name}</h1>
                                <span className="badge bg-success-light text-success">In Stock</span>
                            </div>

                            <div className="d-flex align-items-center gap-2 mb-3">
                                <div className="stars text-warning">
                                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star text-muted"></i>
                                </div>
                                <span className="text-muted small">4 Review</span>
                                <span className="text-muted small ms-2">SKU: 2,51,594</span>
                            </div>

                            <div className="price-section d-flex align-items-center gap-2 mb-4">
                                <span className="text-muted text-decoration-line-through fs-5">$48.00</span>
                                <span className="text-success fw-bold fs-3">${product.price}</span>
                                <span className="badge bg-danger-light text-danger rounded-pill">64% Off</span>
                            </div>

                            <hr />

                            <div className="brand-share d-flex justify-content-between align-items-center py-3">
                                <div className="d-flex align-items-center gap-2">
                                    <span className="text-muted">Brand:</span>
                                    <img src="../public/images/Brand.png" alt="farm" height="30" />
                                </div>
                                <div className="share-icons d-flex align-items-center gap-2">
                                    <span className="text-muted me-2">Share item:</span>
                                    <a href="#" className="share-btn fb"><i className="bi bi-facebook"></i></a>
                                    <a href="#" className="share-btn fb"><i className="bi bi-twitter"></i></a>
                                    <a href="#" className="share-btn fb"><i className="bi bi-pinterest"></i></a>
                                    <a href="#" className="share-btn fb"><i className="bi bi-instagram"></i></a>
                                </div>
                            </div>

                            <p className="product-desc text-muted mb-4">
                                {product.description}
                            </p>

                            <div className="cart-actions d-flex align-items-center gap-3">
                                <div className="quantity-selector d-flex align-items-center border rounded-pill p-1">
                                    <button className="btn btn-light rounded-circle" onClick={() => setQuantity(q => q > 1 ? q - 1 : 1)}>-</button>
                                    <span className="px-3 fw-bold">{quantity}</span>
                                    <button className="btn btn-light rounded-circle" onClick={() => setQuantity(q => q + 1)}>+</button>
                                </div>
                                <button className="btn btn-success flex-grow-1 rounded-pill py-2 fw-bold d-flex align-items-center justify-content-center gap-2" onClick={handleAddToCart} >
                                    Add to Cart <i className="bi bi-bag"></i>
                                </button>
                                <button className="btn btn-light rounded-circle border"><i className="bi bi-heart"></i></button>
                            </div>

                            <div className="mt-4 pt-2">
                                <p className="mb-1"><strong>Category:</strong> <span className="text-muted">{categoryName}</span></p>
                                <p><strong>Tag:</strong> <span className="text-muted">{categoryName}, Healthy Chinese Cabbage Green Cabbage</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="products-section mb-5">
                <div className="container-section">
                    <h2 className="section-title">Related Products</h2>
                    <div className="title-underline mb-5">
                        <span></span>
                        <span className="active"></span>
                        <span></span>
                    </div>

                    <div className="row row-row">
                        {
                            products.slice(7, 11).map((product) => (
                                <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                                    <div className="product-card mb-2">
                                        <img src={product.image} alt={product.name} />
                                        <div className="product-body">
                                            <div className="row">
                                                <div className="col-6">
                                                    <h5 className="product-title">{product.name.substring(0, 10)}</h5>
                                                    <p className="product-price">${product.price}</p>
                                                </div>
                                                <div className="col-6">
                                                    <button className="wishlist-btn">
                                                        <i class="fa-regular fa-heart"></i>
                                                    </button>
                                                    <button className="add-to-cart-btn" onClick={() => addToCart(product)} >
                                                        <i class="fa-solid fa-cart-arrow-down"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <Link to={`product/${product.id}`} className='more-details-btn'>More Details</Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div >
            </section >
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

