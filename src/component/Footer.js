import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <footer style={styles.footer}>
      <div className="container text-md-left">
        <div className="row py-4">
          {/* Company Info */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
            <h5 className="text-uppercase fw-bold">FakeStore</h5>
            <hr
              className="mb-3 mt-0 d-inline-block mx-auto"
              style={{ width: "60px", backgroundColor: "#fff", height: "2px" }}
            />
            <p>
              We build quality products and empower businesses through
              innovation and design.
            </p>
          </div>

          {/* Links */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Links</h6>
            <hr
              className="mb-3 mt-0 d-inline-block mx-auto"
              style={{ width: "60px", backgroundColor: "#fff", height: "2px" }}
            />
            <p>
              <a href="/" className="text-white text-decoration-none">
                Home
              </a>
            </p>
            <p>
              <a href="/about" className="text-white text-decoration-none">
                About
              </a>
            </p>
            <p>
              <a href="/gallery" className="text-white text-decoration-none">
                Gallery
              </a>
            </p>
            <p>
              <a href="/contact" className="text-white text-decoration-none">
                Contact
              </a>
            </p>
          </div>

          {/* Newsletter */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Newsletter</h6>
            <hr
              className="mb-3 mt-0 d-inline-block mx-auto"
              style={{ width: "60px", backgroundColor: "#fff", height: "2px" }}
            />
            <form className="d-flex">
              <input
                type="email"
                className="form-control me-2"
                placeholder="Your email"
              />
              <button className="btn btn-primary">Subscribe</button>
            </form>
          </div>

          {/* Social */}
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold">Follow us</h6>
            <hr
              className="mb-3 mt-0 d-inline-block mx-auto"
              style={{ width: "60px", backgroundColor: "#fff", height: "2px" }}
            />
            <div className="d-flex gap-3">
              <a
                href="https://github.com/Saif-Bangash"
                className="btn btn-outline-light btn-floating rounded-circle"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/saifullahbangash/"
                className="btn btn-outline-light btn-floating rounded-circle"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center pt-3 border-top mt-4 pb-3">
        © {new Date().getFullYear()} MyCompany. All Rights Reserved.
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#2f4066",
    color: "#fff",
    marginTop: "3rem",
  },
};

export default Footer;
