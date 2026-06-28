import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Checkout() {
  const { cart, totalAmount } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "Air University Islamabad, E-9 Campus"
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOrder = () => {
    if (!form.name || !form.phone || !form.address) {
      alert("Please fill all fields");
      return;
    }

    const order = {
      id: Date.now(),
      customer: form.name,
      items: cart,
      total: totalAmount,
      status: "Pending",
      date: new Date().toLocaleString()
    };

    const existing =
      JSON.parse(localStorage.getItem("orders")) || [];
    localStorage.setItem(
      "orders",
      JSON.stringify([...existing, order])
    );

    alert("Order placed successfully!");
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="checkout-page container py-5">
      <h2 className="fw-bold mb-4 text-light">💳 Checkout</h2>

      <div className="row text-dark">
        <div className="col-md-6 mb-4">
          <div className="card p-4 checkout-card">
            <h5 className="mb-3">Customer Details</h5>

            <input
              name="name"
              placeholder="Full Name"
              className="form-control mb-3"
              value={form.name}
              onChange={handleChange}
            />

            <input
              name="phone"
              placeholder="Phone Number"
              className="form-control mb-3"
              value={form.phone}
              onChange={handleChange}
            />

            <textarea
              name="address"
              rows="3"
              className="form-control"
              value={form.address}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="card p-4 checkout-card">
            <h5>Order Summary</h5>

            <ul className="list-group mb-3">
              {cart.map(item => (
                <li
                  key={item.id}
                  className="list-group-item d-flex justify-content-between"
                >
                  {item.name} x {item.qty}
                  <span>Rs. {item.price * item.qty}</span>
                </li>
              ))}
            </ul>

            <h5>Total: Rs. {totalAmount}</h5>

            <button
              className="btn btn-success w-100 mt-3"
              onClick={handleOrder}
            >
              Confirm Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
