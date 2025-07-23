// src/pages/Home.js
import React, { useContext } from "react";
import { ProductContext } from "../services/ProductContext";
import { Link } from "react-router-dom";

function Home() {
  const { products } = useContext(ProductContext);

  return (
    <>
      {/* Hero Section */}
      <section className="container-fluid py-4">
        <div
          id="homepageCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner rounded-3">
            {/* Slide 1 */}
            <div className="carousel-item active">
              <img
                src="https://images.unsplash.com/photo-1529720317453-c8da503f2051?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="d-block w-100 card-img-top"
                alt="Banner 1"
               />
              <div className="carousel-caption d-none d-md-block">
                <h2 className="fw-bold">Welcome to FakeStore</h2>
                <p>Shop the best products with unbeatable prices!</p>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1600&q=80"
                className="d-block w-100 card-img-top"
                alt="Banner 2"
               />
              <div className="carousel-caption d-none d-md-block">
                <h2 className="fw-bold">Latest Fashion & Electronics</h2>
                <p>Browse our newest arrivals and hot deals.</p>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="carousel-item">
              <img
                src="https://plus.unsplash.com/premium_photo-1678730056405-51c04f1a3770?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="d-block w-100 card-img-top"
                alt="Banner 3"
               />
              <div className="carousel-caption d-none d-md-block">
                <h2 className="fw-bold">Free Shipping on Orders Over $50</h2>
                <p>Fast, secure, and always reliable.</p>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#homepageCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#homepageCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* Product Grid */}
      <section className="container-fluid py-5">
        <h2 className="text-center mb-4">🛍 Latest Products</h2>
        <div className="row g-4">
          {products.length === 0 ? (
            <div className="text-center">Loading products...</div>
          ) : (
            products.map((product) => (
              <div className="col-sm-6 col-md-4 col-lg-3" key={product.id}>
                <div className="card h-100 shadow-sm border-0">
                  <img
                    src={product.image}
                    className="card-img-top p-3"
                    alt={product.title}
                    style={{ height: "200px", objectFit: "contain" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h6 className="card-title fw-semibold">
                      {product.title.length > 40
                        ? product.title.slice(0, 40) + "..."
                        : product.title}
                    </h6>
                    <div className="mb-2">
                      <span className="text-warning fw-bold">
                        ★ {product.rating.rate.toFixed(1)}
                      </span>{" "}
                      <small className="text-muted">
                        ({product.rating.count} reviews)
                      </small>
                    </div>
                    <p className="text-primary fw-bold mb-2">
                      ${product.price}
                    </p>
                    <Link
                      to={`/product/${product.id}`}
                      className="btn mt-auto"
                      style={styles.button}
                    >
                      View Detail
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Why Shop With Us */}
      <section className="bg-light py-5">
        <div className="container-fluid text-center">
          <h2 className="mb-5 fw-bold">Why Shop With Us?</h2>
          <div className="row g-4">
            {/* Feature 1 */}
            <div className="col-md-4">
              <div className="p-4 bg-white rounded-4 shadow-sm h-100 hover-shadow transition">
                <div className="mb-3">
                  <div
                    className="bg-primary bg-opacity-10 text-primary rounded-circle d-inline-flex align-items-center justify-content-center"
                    style={{
                      width: "60px",
                      height: "60px",
                      fontSize: "1.5rem",
                    }}
                  >
                    🚚
                  </div>
                </div>
                <h5 className="fw-semibold">Free Shipping</h5>
                <p className="text-muted mb-0">On all orders above $50.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="col-md-4">
              <div className="p-4 bg-white rounded-4 shadow-sm h-100 hover-shadow transition">
                <div className="mb-3">
                  <div
                    className="bg-success bg-opacity-10 text-success rounded-circle d-inline-flex align-items-center justify-content-center"
                    style={{
                      width: "60px",
                      height: "60px",
                      fontSize: "1.5rem",
                    }}
                  >
                    🔒
                  </div>
                </div>
                <h5 className="fw-semibold">Secure Checkout</h5>
                <p className="text-muted mb-0">100% safe payment via SSL.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="col-md-4">
              <div
                className="p-4 bg-white rounded-4 shadow-sm h-100 hover-shadow transition"
                style={styles.hoverShadow}
              >
                <div className="mb-3">
                  <div
                    className="bg-warning bg-opacity-10 text-warning rounded-circle d-inline-flex align-items-center justify-content-center"
                    style={{
                      width: "60px",
                      height: "60px",
                      fontSize: "1.5rem",
                    }}
                  >
                    💬
                  </div>
                </div>
                <h5 className="fw-semibold">24/7 Support</h5>
                <p className="text-muted mb-0">We’re always here for you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-fluid py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">What Our Customers Say</h2>
          <div className="row g-4">
            {/* Testimonial 1 */}
            <div className="col-md-4">
              <div className="p-4 bg-white rounded-4 shadow-sm border-start border-4 border-primary h-100">
                <div className="mb-3">
                  <i className="bi bi-quote fs-1 text-primary"></i>
                </div>
                <p className="fst-italic">
                  “Amazing products and fast delivery!”
                </p>
                <div className="text-warning mb-2">★★★★★</div>
                <strong>- Sarah K.</strong>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="col-md-4">
              <div className="p-4 bg-white rounded-4 shadow-sm border-start border-4 border-success h-100">
                <div className="mb-3">
                  <i className="bi bi-quote fs-1 text-success"></i>
                </div>
                <p className="fst-italic">
                  “Top quality, great support — highly recommend!”
                </p>
                <div className="text-warning mb-2">★★★★★</div>
                <strong>- Ahmed R.</strong>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="col-md-4">
              <div className="p-4 bg-white rounded-4 shadow-sm border-start border-4 border-warning h-100">
                <div className="mb-3">
                  <i className="bi bi-quote fs-1 text-warning"></i>
                </div>
                <p className="fst-italic">
                  “Five stars experience every time I order.”
                </p>
                <div className="text-warning mb-2">★★★★★</div>
                <strong>- Lisa M.</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscribe */}
      <section
        className="py-5"
        style={{ backgroundColor: "#ffeef2", color: "#2f4066" }}
      >
        <div className="container text-center">
          <h3 className="mb-3 fw-bold">📬 Subscribe to Our Newsletter</h3>
          <p className="mb-4" style={{ color: "#555" }}>
            Get weekly updates, exclusive offers, and more!
          </p>

          <form className="row justify-content-center align-items-center g-2">
            <div className="col-md-6 col-lg-4">
              <div className="input-group input-group-lg">
                <span className="input-group-text bg-white text-dark rounded-start">
                  <i className="bi bi-envelope-fill"></i>
                </span>
                <input
                  type="email"
                  className="form-control border-0 rounded-end"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="col-auto">
              <button
                type="submit"
                className="btn px-4 btn-lg rounded-pill"
                style={{
                  backgroundColor: "#f67280",
                  color: "#fff",
                  border: "none",
                }}
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Home;

const styles = {
  button: {
    backgroundColor: "#2f4066",
    color: "#fff",
    padding: "6px 15px",
    border: "none",
    borderRadius: "5px",
  },
  hoverShadow: {
    boxShadow: "0 0.5rem 1.5rem rgba(0, 0, 0, 0.1)",
    transform: "translateY(-3px)",
  },
};
