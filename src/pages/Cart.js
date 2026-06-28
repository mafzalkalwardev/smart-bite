import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart, updateQty, totalAmount } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="container py-5 text-center">
        <h3>Your cart is empty 🛒</h3>
        <Link to="/menu" className="btn btn-dark mt-3">
          Go to Menu
        </Link>
      </div>
    );
  }

  const tax = totalAmount * 0.05;
  const grandTotal = totalAmount + tax;

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4">🛒 Your Cart</h2>

      <table className="table table-bordered align-middle">
        <thead className="table-dark">
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th width="140">Quantity</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {cart.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>Rs. {item.price}</td>
              <td>
                <input
                  type="number"
                  min="1"
                  className="form-control"
                  value={item.qty}
                  onChange={(e) =>
                    updateQty(item.id, Number(e.target.value))
                  }
                />
              </td>
              <td>Rs. {item.price * item.qty}</td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* SUMMARY */}
<div className="col-md-4">
  <div className="cart-summary">
    <p>Subtotal: Rs. {totalAmount}</p>
    <p>Tax (5%): Rs. {tax.toFixed(0)}</p>
    <p className="cart-total">
      Grand Total: Rs. {grandTotal.toFixed(0)}
    </p>

    <button
      className="btn btn-success w-100 mt-3"
      onClick={() => navigate("/checkout")}
    >
      Proceed to Checkout
    </button>
  </div>
</div>

    </div>
  );
}

export default Cart;
