import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { isAdmin, logout } = useAuth();
  const { cart } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  const isAdminRoute = location.pathname.includes("admin");

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark sticky-top ${
        isAdminRoute ? "admin-nav" : "user-nav"
      }`}
    >
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          Smart Bite 🍔
        </Link>

        <ul className="navbar-nav ms-auto align-items-center">
          {/* USER NAVBAR */}
          {!isAdmin && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/menu">
                  Menu
                </Link>
              </li>

            <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  Cart ({cart.length})
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>

              <li className="nav-item">
  <Link className="nav-link" to="/contact">
    Contact
  </Link>
</li>

              
              <li className="nav-item">
                <Link
                  className="btn btn-sm btn-outline-light ms-3"
                  to="/admin-login"
                >
                  Admin
                </Link>
              </li>
            </>
          )}

          {/* ADMIN NAVBAR */}
          {isAdmin && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/admin">
                  Dashboard
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/admin/menu">
                  Manage Menu
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/admin/orders">
                  Orders
                </Link>
              </li>

              <li className="nav-item">
                <button
                  className="btn btn-danger btn-sm ms-3"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
