import React from "react";
import { accessories, menItems, womenItems } from "../utils";

function Gallery() {


  const renderSection = (title, items) => (
    <div className="mb-5">
      <h3 className="text-dark fw-bold mb-4 text-uppercase">{title}</h3>
      <div className="row g-4">
        {items.map((item) => (
          <div className="col-6 col-md-4 col-lg-3" key={item.id}>
            <div className="card h-100 shadow-sm border-0 gallery-card">
              <div
                className="overflow-hidden"
                style={{ background: "#fff", height: "200px" }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-100 h-100 img-fluid object-fit-contain p-3 gallery-img"
                  style={{ transition: "transform 0.3s ease" }}
                />
              </div>
              <div className="card-body text-center">
                <h6 className="card-title mb-0">{item.title}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="py-5" style={{ background: "#f8f9fa", minHeight: "100vh" }}>
      <div className="container">
        <h2 className="text-center mb-5 fw-bold text-uppercase">Gallery</h2>
        {renderSection("Men", menItems)}
        {renderSection("Women", womenItems)}
        {renderSection("Accessories", accessories)}
      </div>
    </div>
  );
}

export default Gallery;
