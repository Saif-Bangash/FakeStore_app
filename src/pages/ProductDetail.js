// src/pages/ProductDetail.js
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../services/ProductContext";
import { CartContext } from "../services/CartContext";

function ProductDetail() {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext); // ✅ Use context

  // Find the selected product from the context
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="text-center py-5">
        <h4>Loading product details...</h4>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row g-4">
        {/* Product Image */}
        <div className="col-md-5">
          <div className="border rounded p-3 bg-white shadow-sm">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid"
              style={{ maxHeight: "400px", objectFit: "contain" }}
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="col-md-7">
          <div className="p-3 bg-light border rounded shadow-sm h-100 d-flex flex-column">
            <h2 className="mb-3">{product.title}</h2>
            <h4 className="text-success mb-2">${product.price}</h4>
            <p className="text-muted mb-2">
              <strong>Category:</strong> {product.category}
            </p>
            <p>{product.description}</p>
            <button
              className="btn mt-auto w-50"
              style={styles.button}
              onClick={() => addToCart(product)} // ✅ Click adds to cart
            >
              Add to Cart
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

const styles = {
  button: {
    backgroundColor: "#2f4066",
    color: "#fff",
    padding: "6px 15px",
    border: "none",
    borderRadius: "5px",
  },
};
