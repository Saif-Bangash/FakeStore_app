// src/components/Header.js
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { GiCardExchange, GiHanger } from "react-icons/gi";
import { CartContext } from "../services/CartContext";

function Header() {
  const { cartItems, removeFromCart, offcanvasRef } = useContext(CartContext);
  const handleLinkClick = () => {
    if (offcanvasRef.current) {
      const bsOffcanvas = window.bootstrap.Offcanvas.getInstance(
        offcanvasRef.current
      );
      if (bsOffcanvas) {
        bsOffcanvas.hide(); // ✅ Close the offcanvas manually
      }
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg px-4 sticky-top" style={styles.header}>
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold text-white" to="/">
            FakeStore <GiCardExchange className="fs-6" />
          </Link>
          
         {/* Toggler and Cart (Mobile) Grouped with Less Gap) */}
<div className="d-flex align-items-center gap-2 ms-auto">
  {/* Navbar Toggler */}
  <button
    className="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#mainNavbar"
  >
    <span className="navbar-toggler-icon"></span>
  </button>

  {/* Cart Icon for Mobile */}
  <button
    className="btn btn-light position-relative d-block d-lg-none p-1"
    data-bs-toggle="offcanvas"
    data-bs-target="#cartOffcanvas"
  >
    🛒
    {cartItems.length > 0 && (
      <span
        className="position-absolute badge rounded-pill bg-danger"
        style={{
          top: "-4px",
          right: "-4px",
          fontSize: "0.65rem",
          padding: "4px 6px",
        }}
      >
        {cartItems.length}
      </span>
    )}
  </button>
</div>


          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav ms-auto gap-3 mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link text-white fw-semibold text-uppercase"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white fw-semibold text-uppercase"
                  to="/about"
                >
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white fw-semibold text-uppercase"
                  to="/gallery"
                >
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white fw-semibold text-uppercase"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* Cart Icon */}
            <button
              className="btn btn-light ms-3 position-relative d-none d-lg-block"
              data-bs-toggle="offcanvas"
              data-bs-target="#cartOffcanvas"
            >
              🛒
              {cartItems.length > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Offcanvas Cart */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="cartOffcanvas"
        ref={offcanvasRef}
      >
        <div className="offcanvas-header border-bottom">
          <h5 className="offcanvas-title fw-bold">🛒 Your Cart</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body d-flex flex-column">
          {cartItems.length === 0 ? (
            <div className="text-center my-5">
              <p className="text-muted">Your cart is empty.</p>
            </div>
          ) : (
            <>
              <ul className="list-group list-group-flush flex-grow-1 mb-3">
                {cartItems.map((item, index) => (
                  <li key={index} className="list-group-item">
                    <div className="d-flex align-items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{
                          width: "60px",
                          height: "60px",
                          objectFit: "contain",
                        }}
                        className="rounded border"
                      />
                      <div className="flex-grow-1">
                        <h6 className="mb-1">{item.title}</h6>
                        <span className="text-success fw-semibold">
                          ${item.price}
                        </span>
                      </div>
                      {/* ✅ Delete button */}
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => removeFromCart(index)}
                        title="Remove item"
                      >
                        &times;
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Subtotal and Checkout */}
             <div className="border-top pt-3 bg-light">
  <div className="d-flex flex-column align-items-center gap-2 pb-3">
    <Link
      to={"/cart"}
      onClick={handleLinkClick}
      className="btn btn-secondary rounded-pill w-100"
     >
      Open Cart
    </Link>

    <button
      className="btn btn-success rounded-pill w-100"
 
 >
      Proceed to Checkout
    </button>
  </div>
</div>

            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;

const styles = {
  header: {
    backgroundColor: "#2f4066",
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#fff",
  },
};
