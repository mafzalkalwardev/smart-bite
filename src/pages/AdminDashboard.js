import React, { useEffect, useRef, useState } from "react";

function AdminDashboard() {
  const [orders, setOrders] = useState([]);
  const canvasRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(data);
  }, []);

  useEffect(() => {
    // 🔒 Safety checks
    if (!canvasRef.current) return;
    if (!window.Chart) return;

    // Destroy old chart if exists (IMPORTANT)
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const completed = orders.filter(o => o.status === "Completed").length;
    const pending = orders.filter(o => o.status === "Pending").length;

    chartInstance.current = new window.Chart(canvasRef.current, {
      type: "doughnut",
      data: {
        labels: ["Completed", "Pending"],
        datasets: [
          {
            data: [completed, pending],
            backgroundColor: ["#22c55e", "#ef4444"]
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            labels: {
              color: "#e5e7eb"
            }
          }
        }
      }
    });

    // Cleanup on unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [orders]);

  const revenue = orders.reduce((sum, o) => sum + o.total, 0);

  return (
    <div className="admin-page py-5">
      <div className="container">
        <h2 className="fw-bold mb-4">📊 Admin Dashboard</h2>

        {/* KPI CARDS */}
        <div className="row mb-4">
          <div className="col-md-3">
            <div className="admin-card">
              <h6>Total Orders</h6>
              <h3>{orders.length}</h3>
            </div>
          </div>

          <div className="col-md-3">
            <div className="admin-card">
              <h6>Total Revenue</h6>
              <h3>Rs. {revenue}</h3>
            </div>
          </div>

          <div className="col-md-3">
            <div className="admin-card">
              <h6>Completed</h6>
              <h3>
                {orders.filter(o => o.status === "Completed").length}
              </h3>
            </div>
          </div>

          <div className="col-md-3">
            <div className="admin-card">
              <h6>Pending</h6>
              <h3>
                {orders.filter(o => o.status === "Pending").length}
              </h3>
            </div>
          </div>
        </div>

        {/* CHART */}
        <div className="row">
          <div className="col-md-6">
            <div className="chart-card">
              <h5 className="mb-3">Order Status Analytics</h5>
              <canvas ref={canvasRef}></canvas>
            </div>
          </div>

          <div className="col-md-6">
            <div className="chart-card">
              <h5 className="mb-3">Insights</h5>
              <p>✔ Real-time frontend analytics</p>
              <p>✔ React StrictMode safe</p>
              <p>✔ Chart lifecycle managed</p>
              <p>✔ No backend required</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
