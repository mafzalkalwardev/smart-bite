import React, { useState, useEffect } from "react";
import menuData from "../data/menu.json";
import FoodCard from "../components/FoodCard";

function Menu() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    setItems(menuData);
  }, []);

  const categories = ["All", ...new Set(menuData.map(i => i.category))];

  const filteredItems = items.filter(item => {
    const matchSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchCategory =
      category === "All" || item.category === category;
    return matchSearch && matchCategory;
  });

  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-4">🍽️ Our Menu</h2>

      {/* FILTER BAR */}
      <div className="row mb-4">
        <div className="col-md-6 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search food..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="col-md-6 mb-2">
          <select
            className="form-control"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((cat, index) => (
              <option key={index}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      {/* MENU GRID */}
      <div className="row">
        {filteredItems.length === 0 && (
          <p className="text-center w-100">
            No items found.
          </p>
        )}

        {filteredItems.map(item => (
          <div className="col-md-3 mb-4" key={item.id}>
            <FoodCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
