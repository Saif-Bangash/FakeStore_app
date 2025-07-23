import React, { useContext } from "react";
import { CartContext } from "../services/CartContext";
import { Link } from "react-router-dom";

function CartPage() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const total = cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div className="container py-5">
      <h2 className="mb-4">🛒 Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <div className="text-center py-5">
          <p className="text-muted">Your cart is currently empty.</p>
          <Link to="/" className="btn btn-primary rounded-pill px-4">
            Go Back to Shop
          </Link>
        </div>
      ) : (
        <div className="row g-4">
          {/* Cart Items */}
          <div className="col-md-6">
            <div className="vstack gap-3">
              {cartItems.map((item, index) => (
                <div key={index} className="card shadow-sm border-0">
                  <div className="row g-0 align-items-center">
                    <div className="col-4">
                      <img
                        src={item.image}
                        className="img-fluid p-2"
                        alt={item.title}
                        style={{ objectFit: "contain", height: "120px" }}
                      />
                    </div>
                    <div className="col-8">
                      <div className="card-body">
                        <h6 className="card-title mb-1">{item.title}</h6>
                        <p className="card-text text-success fw-bold">
                          ${item.price}
                        </p>
                        <button
                          className="btn btn-sm btn-outline-danger rounded-pill"
                          onClick={() => removeFromCart(index)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Subtotal / Checkout */}
          <div className="col-md-6">
            <div className="card shadow-sm border-0 p-4">
              <h5 className="mb-4 border-bottom pb-2">Order Summary</h5>
              <div className="d-flex justify-content-between mb-3">
                <span>Subtotal</span>
                <span className="fw-bold text-success">${total}</span>
              </div>
              <Link
                to="/checkout"
                className="btn btn-success rounded-pill mb-2"
              >
                Proceed to Checkout
              </Link>
              
              <Link
                to="/"
                className="btn btn-outline-secondary rounded-pill"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
