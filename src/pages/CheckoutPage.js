import React, { useState } from "react";
import { Link } from "react-router-dom";

function CheckoutPage() {
  const [success, setSuccess] = useState(false);

  const handlePayment = () => {
    const orderData = {
      name: "John Doe", // You can replace with real input values
      email: "john@example.com",
      address: "123 Main Street",
      phone: "+123456789",
      total: "$99.99", // Make dynamic if needed
    };

    // Save to localStorage
    localStorage.setItem("lastOrder", JSON.stringify(orderData));

    // Show success
    setSuccess(true);

    // Optional: Clear after delay
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">🧾 Checkout</h2>

      {success && (
        <div className="alert alert-success rounded-pill text-center" role="alert">
          ✅ Payment successful! Your order has been placed.
        </div>
      )}

      <div className="row g-4">
        {/* Billing Info */}
        <div className="col-md-6">
          <div className="card p-4 shadow-sm border-0">
            <h5 className="mb-3 border-bottom pb-2">Billing Information</h5>
            <form>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control rounded-pill" placeholder="John Doe" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-control rounded-pill" placeholder="john@example.com" />
              </div>
              <div className="mb-3">
                <label className="form-label">Address</label>
                <input type="text" className="form-control rounded-pill" placeholder="123 Main Street" />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input type="tel" className="form-control rounded-pill" placeholder="+123456789" />
              </div>
            </form>
          </div>
        </div>

        {/* Order Summary */}
        <div className="col-md-6">
          <div className="card p-4 shadow-sm border-0">
            <h5 className="mb-3 border-bottom pb-2">Order Summary</h5>
            <div className="d-flex justify-content-between mb-2">
              <span>Subtotal</span>
              <span className="fw-bold">$99.99</span>
            </div>
            <div className="d-flex justify-content-between mb-4">
              <span>Shipping</span>
              <span className="fw-bold text-muted">Free</span>
            </div>

            <button
              className="btn btn-success w-100 rounded-pill mb-2"
              onClick={handlePayment}
            >
              Confirm & Pay
            </button>

            <Link to="/cart" className="btn btn-outline-secondary w-100 rounded-pill">
              Back to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
