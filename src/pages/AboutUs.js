import React from "react";

function AboutUs() {
  return (
    <div
      className="py-5"
      style={{
        background: "linear-gradient(to right, #2F4066, #1B1B2F)",
        color: "#fff",
        minHeight: "100vh",
      }}
    >
      <div className="container">
        <div className="row align-items-center g-5 mb-5">
          {/* Image Column */}
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1522199710521-72d69614c702"
              alt="About Us"
              className="img-fluid rounded-4 shadow"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </div>

          {/* Text Column */}
          <div className="col-md-6">
            <h2 className="fw-bold mb-4">Who We Are</h2>
            <p className="lead mb-3">
              Welcome to <strong>YourBrand</strong> — where creativity meets technology. We’re a passionate team crafting sleek and scalable web solutions that leave a lasting impression.
            </p>
            <p className="text-white-50">
              We serve startups, agencies, and online stores with pixel-perfect design, clean code, and user-first experiences.
            </p>
            <ul className="list-unstyled mt-4">
              <li className="mb-2">✅ Clean & Responsive UI</li>
              <li className="mb-2">✅ Fast-loading optimized code</li>
              <li className="mb-2">✅ Built with React, Bootstrap, and modern tools</li>
              <li className="mb-2">✅ Trusted by 50+ happy clients worldwide</li>
            </ul>
            <button className="btn btn-outline-light rounded-pill mt-3 px-4">
              Learn More
            </button>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="text-center mb-5">
          <h3 className="fw-bold">Why Choose Us</h3>
          <p className="text-white-50 mb-4">
            Our values shape the way we work and the results we deliver.
          </p>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="p-4 bg-dark rounded-4 h-100 shadow-sm">
                <h5 className="text-warning mb-2">🚀 Performance First</h5>
                <p className="text-white-50">
                  We build optimized web apps with fast load times and smooth interactions.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 bg-dark rounded-4 h-100 shadow-sm">
                <h5 className="text-warning mb-2">🎨 Beautiful UI</h5>
                <p className="text-white-50">
                  Clean, modern, and responsive designs tailored for all screen sizes.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 bg-dark rounded-4 h-100 shadow-sm">
                <h5 className="text-warning mb-2">🤝 Client Focused</h5>
                <p className="text-white-50">
                  Transparent communication and timely delivery — every time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision or Team Highlight */}
        <div className="bg-light rounded-4 p-5 text-dark shadow">
          <div className="row align-items-center">
            <div className="col-md-7">
              <h4 className="fw-bold">Our Mission</h4>
              <p className="mb-0">
                At <strong>YourBrand</strong>, we believe in building meaningful digital experiences that empower businesses and delight users. Whether it's a landing page or a full-scale web app — we deliver with passion and precision.
              </p>
            </div>
            <div className="col-md-5 mt-4 mt-md-0 text-center">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692"
                alt="Team"
                className="img-fluid rounded-4 shadow"
                style={{ maxHeight: "250px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
