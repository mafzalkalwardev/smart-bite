import React, { useEffect, useState } from "react";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(data);
  }, []);

  const updateStatus = (id, status) => {
    const updated = orders.map(o =>
      o.id === id ? { ...o, status } : o
    );
    setOrders(updated);
    localStorage.setItem("orders", JSON.stringify(updated));
  };

  return (
    <div className="container py-5 text-light">
      <h2 className="fw-bold mb-4">📦 Orders</h2>

      {orders.length === 0 && <p>No orders found.</p>}

      {orders.length > 0 && (
        <div className="table-responsive">
          <table className="table table-dark table-hover align-middle">
            <thead>
              <tr>
                <th>ID</th>
                <th>Customer</th>
                <th>Total</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(o => (
                <tr key={o.id}>
                  <td>{o.id}</td>
                  <td>{o.customer}</td>
                  <td>Rs. {o.total}</td>
                  <td>
                    <select
                      className="form-select bg-dark text-light"
                      value={o.status}
                      disabled={o.status === "Completed"}
                      onChange={(e) =>
                        updateStatus(o.id, e.target.value)
                      }
                    >
                      <option value="Pending">Pending</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </td>
                  <td>{o.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Orders;
