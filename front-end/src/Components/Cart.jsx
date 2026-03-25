import React, { useContext, useState } from 'react';

import { useCart } from '../Pages/product/CartContext';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


export default function Cart() {
  const { cart, removeFromCart, increaseQty, decreaseQty, subtotal, total, coupon, setCoupon, applyCoupon, discount } = useCart();

  const handleApplyCoupon = () => {
    applyCoupon();
    if (coupon === "SALE10" || coupon === "SALE20") {
      Swal.fire({
        icon: 'success',
        title: 'Coupon Applied!',
        text: `Congratulations! You've got a discount from EcoBazar`,
        confirmButtonColor: '#6fb327'
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Coupon',
        text: 'Please check the code and try again',
      });
    }
  };

  return (
    <div className="container my-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <h2 className="text-center fw-bold mb-5">My Shopping Cart</h2>
      <div className="row g-4">
        {/* جدول المنتجات */}
        <div className="col-lg-8">
          <div className="table-responsive shadow-sm rounded-4 bg-white p-3">
            <table className="table align-middle">
              <thead className="text-secondary border-bottom">
                <tr>
                  <th>PRODUCT</th>
                  <th>PRICE</th>
                  <th>QUANTITY</th>
                  <th>SUBTOTAL</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cart.map(item => (
                  <tr key={item.id} className="border-bottom-0">
                    <td className="py-3">
                      <div className="d-flex align-items-center">
                        <img src={item.image} alt={item.name} width="60" className="rounded-3 me-3" />
                        <span className="fw-medium">{item.name}</span>
                      </div>
                    </td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>
                      <div className="d-flex align-items-center border rounded-pill px-2 py-1" style={{ width: 'fit-content' }}>
                        <button className="btn btn-sm border-0" onClick={() => decreaseQty(item.id)}>-</button>
                        <span className="mx-3 fw-bold">{item.quantity}</span>
                        <button className="btn btn-sm border-0" onClick={() => increaseQty(item.id)}>+</button>
                      </div>
                    </td>
                    <td className="fw-bold">${(item.price * item.quantity).toFixed(2)}</td>
                    <td>
                      <button className="btn btn-outline-danger btn-sm rounded-circle" onClick={() => removeFromCart(item.id)}>×</button>
                    </td>
                  </tr>
                ))}
                <Link to="/shopping" className="btn-return-shop mt-3">
                  Return to shop
                </Link>
              </tbody>
            </table>
          </div>

          {/* كود الخصم */}
          <div className="mt-4 p-3 bg-white shadow-sm rounded-4 d-flex justify-content-between align-items-center border">
            <h6 className="mb-0 fw-bold">Coupon Code</h6>
            <div className="d-flex gap-2 w-50">
              <input
                type="text"
                className="form-control rounded-pill border-muted"
                placeholder="Enter code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
              />
              <button className="btn btn-dark rounded-pill px-4" onClick={handleApplyCoupon}>Apply</button>
            </div>
          </div>
        </div>

        {/* ملخص الحساب */}
        <div className="col-lg-4">
          <div className="p-4 shadow-sm rounded-4 bg-white border">
            <h5 className="fw-bold mb-4">Cart Total</h5>
            <div className="d-flex justify-content-between mb-2">
              <span className="text-muted">Subtotal:</span>
              <span className="fw-bold">${subtotal.toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between mb-2 border-bottom pb-2">
              <span className="text-muted">Shipping:</span>
              <span className="text-success fw-bold">Free</span>
            </div>
            {discount > 0 && (
              <div className="d-flex justify-content-between mb-2 text-danger fw-bold">
                <span>Discount:</span>
                <span>-${(subtotal * discount).toFixed(2)}</span>
              </div>
            )}
            <div className="d-flex justify-content-between fs-5 fw-bold mt-3">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <Link
              to="/checkout"
              className="btn btn-success w-100 rounded-pill mt-4 py-3 fw-bold border-0 shadow d-flex justify-content-center align-items-center"
              style={{ backgroundColor: '#6fb327', textDecoration: 'none' }}
            >
              Proceed to checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};