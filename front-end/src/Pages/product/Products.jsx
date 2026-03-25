import React, { useContext } from 'react'
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';

export default function Products({ product }) {
    const { addToCart } = useCart();

    return (
        <>
            <div className="col-6 col-md-4 col-lg-3 col-xl-3">
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
        </>
    )
}
