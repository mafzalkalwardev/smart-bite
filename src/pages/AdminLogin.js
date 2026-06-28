import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function AdminLogin() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(form.username, form.password);
    if (success) {
      navigate("/admin");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="admin-login d-flex align-items-center justify-content-center text-dark">
      <div className="card p-4 shadow-lg" style={{ width: "380px" }}>
        <h3 className="text-center mb-3">Admin Login</h3>

        {error && (
          <div className="alert alert-danger py-2">{error}</div>
        )}

        <form onSubmit={handleSubmit}>
          <input
            name="username"
            placeholder="Username"
            className="form-control mb-3"
            onChange={handleChange}
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            className="form-control mb-3"
            onChange={handleChange}
          />

          <button className="btn btn-dark w-100">
            Login
          </button>
        </form>

        <small className="text-muted mt-3 d-block text-center">
          Demo: admin / admin123
        </small>
      </div>
    </div>
  );
}

export default AdminLogin;
