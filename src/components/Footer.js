import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer bg-dark text-light mt-5">
      {/* MAIN FOOTER CONTENT */}
      <div className="container py-5">
        <div className="row">

          {/* BRAND & DESCRIPTION */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Smart Bite 🍽️</h5>
            <p className="mt-3">
              Smart Bite is a modern restaurant ordering and management
              system delivering quality food with smart technology and
              efficiency.
            </p>

            {/* SOCIAL MEDIA ICONS */}
            <div className="mt-3 social-icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-light fs-4"
              >
                <i className="fab fa-facebook"></i>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-light fs-4"
              >
                <i className="fab fa-instagram"></i>
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-light fs-4"
              >
                <i className="fab fa-twitter"></i>
              </a>

              <a
                href="https://wa.me/923079670503"
                target="_blank"
                rel="noreferrer"
                className="text-success fs-4"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">
                <Link className="text-light text-decoration-none" to="/">Home</Link>
              </li>
              <li className="mb-2">
                <Link className="text-light text-decoration-none" to="/menu">Menu</Link>
              </li>
              <li className="mb-2">
                <Link className="text-light text-decoration-none" to="/about">About Us</Link>
              </li>
              <li className="mb-2">
                <Link className="text-light text-decoration-none" to="/contact">Contact Us</Link>
              </li>
              <li className="mb-2">
                <Link className="text-light text-decoration-none" to="/admin-login">
                  Admin Login
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT & MAP */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Contact Us</h5>

            <p className="mt-3 mb-1">📍 Air University Islamabad</p>
            <p className="mb-1">E-9 Campus, Islamabad</p>

            <p className="mb-1">
              📞 <a
                href="tel:+923079670503"
                className="text-light text-decoration-none"
              >
                +92 307 9670503
              </a>
            </p>

            <p className="mb-1">
              💬 <a
                href="https://wa.me/923079670503"
                target="_blank"
                rel="noreferrer"
                className="text-success text-decoration-none"
              >
                WhatsApp
              </a>
            </p>

            <p className="mb-3">
              📧 kalwarmuhammadafzal@gmail.com
            </p>

            <iframe
              title="Smart Bite Location"
              src="https://www.google.com/maps?q=Air+University+Islamabad+E-9&output=embed"
              width="100%"
              height="150"
              style={{ border: 0, borderRadius: "10px" }}
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </div>

      {/* FOOTER BOTTOM BAR */}
      <div className="text-center py-3" style={{ backgroundColor: "#020617" }}>
        <small>© 2025 Smart Bite. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
