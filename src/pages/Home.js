import React from "react";
import { Link } from "react-router-dom";
import menuData from "../data/menu.json";
import FoodCard from "../components/FoodCard";

function Home() {
  const featured = menuData.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="hero-section d-flex align-items-center">
        <div className="overlay"></div>
        <div className="container text-center hero-content">
          <h1 className="display-4 fw-bold">
            Smart Bite 🍔
          </h1>
          <p className="lead">
            Smart ordering. Smart management. Smart dining experience.
          </p>
          <Link to="/menu" className="btn btn-danger btn-lg mt-3">
            Order Now
          </Link>
        </div>
      </section>

      {/* FEATURED */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">
            Featured Dishes
          </h2>
          <div className="row">
            {featured.map((item) => (
              <div className="col-md-4 mb-4" key={item.id}>
                <FoodCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
<section className="py-5" style={{ backgroundColor: "#020617" }}>
  <div className="container text-center">
    <h2 className="fw-bold mb-4 text-white">
      How It Works
    </h2>

    <div className="row">
      <div className="col-md-4">
        <h4 className="text-white">Browse</h4>
        <p className="text-secondary">
          Explore our smart menu
        </p>
      </div>
      <div className="col-md-4">
        <h4 className="text-white">Order</h4>
        <p className="text-secondary">
          Add items and checkout
        </p>
      </div>
      <div className="col-md-4">
        <h4 className="text-white">Enjoy</h4>
        <p className="text-secondary">
          Quality food, delivered fast
        </p>
      </div>
    </div>
  </div>
</section>

    </>
  );
}

export default Home;
