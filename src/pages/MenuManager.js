import React, { useState } from "react";
import menuData from "../data/menu.json";

function MenuManager() {
  const [menu, setMenu] = useState(menuData);
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    image: ""
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const addItem = () => {
    if (!form.name || !form.price || !form.category) return;

    setMenu([
      ...menu,
      { id: Date.now(), ...form, price: Number(form.price) }
    ]);

    setForm({ name: "", price: "", category: "", image: "" });
  };

  const removeItem = (id) =>
    setMenu(menu.filter(item => item.id !== id));

  return (
    <div className="container py-5 text-light">
      <h2 className="fw-bold mb-4">🍽️ Menu Manager</h2>

      <div className="card p-3 mb-4 bg-dark text-light">
        <h5>Add New Item</h5>
        <div className="row g-2">
          {["name", "price", "category", "image"].map(f => (
            <div className="col-md-3" key={f}>
              <input
                name={f}
                placeholder={f.toUpperCase()}
                className="form-control bg-dark text-light"
                value={form[f]}
                onChange={handleChange}
              />
            </div>
          ))}
          <div className="col-md-12">
            <button className="btn btn-success w-100" onClick={addItem}>
              Add Item
            </button>
          </div>
        </div>
      </div>

      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {menu.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>Rs. {item.price}</td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => removeItem(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MenuManager;
