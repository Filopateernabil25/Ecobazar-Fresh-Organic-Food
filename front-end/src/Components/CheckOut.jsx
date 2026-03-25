import React from 'react';
import { useCart } from '../Pages/product/CartContext';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'; // مهم عشان الرجوع

export default function CheckOut() {
  const { cart, total, clearCart } = useCart(); // استدعي clearCart هنا
  const navigate = useNavigate();

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    Swal.fire({
      title: 'Confirm Order',
      text: "Are you sure you want to complete your purchase from EcoBazar?",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#6fb327',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Place Order!'
    }).then((result) => {
      if (result.isConfirmed) {
        // 1. هنا ممكن تبعت الداتا للـ API بتاعك (Node.js)

        // 2. تظهر رسالة النجاح
        Swal.fire({
          title: 'Success!',
          text: 'Your order has been placed successfully. Thank you for shopping with EcoBazar!',
          icon: 'success',
          confirmButtonColor: '#6fb327',
        }).then(() => {
          // 3. تفضي السلة بعد التأكيد
          clearCart();

          // 4. ترجعه لصفحة الـ Shop وهي فاضية
          navigate('/shopping');
        });
      }
    });
  };

  return (
    <div className="container my-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <form onSubmit={handlePlaceOrder} className="row g-5">

        {/* الجزء الأيسر: بيانات الشحن (Billing Information) */}
        <div className="col-lg-8">
          <h4 className="fw-bold mb-4">Billing Information</h4>
          <div className="row g-3">
            <div className="col-md-4">
              <label className="form-label small">First name</label>
              <input type="text" className="form-control py-2" placeholder="First name" required />
            </div>
            <div className="col-md-4">
              <label className="form-label small">Last name</label>
              <input type="text" className="form-control py-2" placeholder="Last name" required />
            </div>
            <div className="col-md-4">
              <label className="form-label small">Company Name (Optional)</label>
              <input type="text" className="form-control py-2" placeholder="Company name" />
            </div>
            <div className="col-12">
              <label className="form-label small">Street Address</label>
              <input type="text" className="form-control py-2" placeholder="Email" required />
            </div>
            <div className="col-md-4">
              <label className="form-label small">Country / Region</label>
              <select className="form-select py-2">
                <option>Select</option>
                <option>Egypt</option>
                <option>USA</option>
              </select>
            </div>
            <div className="col-md-4">
              <label className="form-label small">States</label>
              <select className="form-select py-2">
                <option>Selects</option>
                <option>Cairo</option>
                <option>Alexandria</option>
              </select>
            </div>
            <div className="col-md-4">
              <label className="form-label small">Zip Code</label>
              <input type="text" className="form-control py-2" placeholder="Zip Code" />
            </div>
            <div className="col-md-6">
              <label className="form-label small">Email</label>
              <input type="email" className="form-control py-2" placeholder="Email Address" required />
            </div>
            <div className="col-md-6">
              <label className="form-label small">Phone</label>
              <input type="tel" className="form-control py-2" placeholder="Phone number" required />
            </div>
            <div className="col-12 mt-3">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="shipAddress" />
                <label className="form-check-label small" htmlFor="shipAddress">Ship to a different address</label>
              </div>
            </div>
            <div className="col-12">
              <h5 className="fw-bold mt-4 mb-3">Additional Info</h5>
              <label className="form-label small">Order Notes (Optional)</label>
              <textarea className="form-control" rows="3" placeholder="Notes about your order, e.g. special notes for delivery"></textarea>
            </div>
          </div>
        </div>

        {/* الجزء الأيمن: ملخص الطلب والدفع (Order Summary) */}
        <div className="col-lg-4">
          <div className="p-4 border rounded-4 bg-white shadow-sm">
            <h5 className="fw-bold mb-4">Order Summary</h5>
            <div className="mb-4">
              {cart.map(item => (
                <div key={item.id} className="d-flex justify-content-between align-items-center mb-3">
                  <div className="d-flex align-items-center">
                    <img src={item.image} width="45" className="me-2 rounded shadow-sm" alt={item.name} />
                    <span className="small text-muted">{item.name} <b className="text-dark">x{item.quantity}</b></span>
                  </div>
                  <span className="fw-bold small">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="d-flex justify-content-between border-top pt-2 small">
              <span className="text-muted">Subtotal:</span>
              <span className="fw-bold">${total.toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between border-bottom pb-2 small">
              <span className="text-muted">Shipping:</span>
              <span className="text-success fw-bold">Free</span>
            </div>
            <div className="d-flex justify-content-between mt-3 mb-4">
              <span className="fw-bold">Total:</span>
              <span className="fw-bold fs-5">${total.toFixed(2)}</span>
            </div>

            <h6 className="fw-bold mb-3">Payment Method</h6>
            <div className="form-check mb-2">
              <input className="form-check-input" type="radio" name="payment" id="cod" defaultChecked />
              <label className="form-check-label small" htmlFor="cod">Cash on Delivery</label>
            </div>
            <div className="form-check mb-2">
              <input className="form-check-input" type="radio" name="payment" id="paypal" />
              <label className="form-check-label small" htmlFor="paypal">Paypal</label>
            </div>
            <div className="form-check mb-4">
              <input className="form-check-input" type="radio" name="payment" id="amazon" />
              <label className="form-check-label small" htmlFor="amazon">Amazon Pay</label>
            </div>

            <button type="submit" className="btn btn-success w-100 rounded-pill py-3 fw-bold border-0 shadow" style={{ backgroundColor: '#6fb327' }}>
              Place Order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}