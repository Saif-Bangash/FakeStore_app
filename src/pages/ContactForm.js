import React, { useState } from "react";
import { FaUser, FaEnvelope, FaTag, FaCommentDots } from "react-icons/fa";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div
      className="py-5"
      style={{
        background: "linear-gradient(to right, #2F4066, #1B1B2F)",
        minHeight: "100vh",
        color: "#fff",
      }}
    >
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">📬 Get in Touch</h2>

        {submitted && (
          <div className="alert alert-success text-center rounded-pill">
            ✅ Your message has been sent!
          </div>
        )}

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div
              className="card p-4 border-0 shadow-lg"
              style={{
                background: "rgba(207, 200, 200, 0.05)",
                backdropFilter: "blur(10px)",
                borderRadius: "1.5rem",
              }}
            >
              <form onSubmit={handleSubmit}>
                <div className="mb-4 position-relative">
                  <label className="form-label text-white">Full Name</label>
                  <div className="input-group">
                    <span className="input-group-text bg-white rounded-start">
                      <FaUser />
                    </span>
                    <input
                      type="text"
                      name="name"
                      className="form-control rounded-end"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-4 position-relative">
                  <label className="form-label text-white">Email Address</label>
                  <div className="input-group">
                    <span className="input-group-text bg-white rounded-start">
                      <FaEnvelope />
                    </span>
                    <input
                      type="email"
                      name="email"
                      className="form-control rounded-end"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label text-white">Subject</label>
                  <div className="input-group">
                    <span className="input-group-text bg-white rounded-start">
                      <FaTag />
                    </span>
                    <input
                      type="text"
                      name="subject"
                      className="form-control rounded-end"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label text-white">Message</label>
                  <div className="input-group">
                    <span className="input-group-text bg-white">
                      <FaCommentDots />
                    </span>
                    <textarea
                      name="message"
                      rows="4"
                      className="form-control"
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-light w-100 py-2 rounded-pill fw-semibold"
                >
                  ✉️ Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
