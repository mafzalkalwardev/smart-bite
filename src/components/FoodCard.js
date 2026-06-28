import React from "react";
import { useCart } from "../context/CartContext";

function FoodCard({ item }) {
  const { addToCart } = useCart();

  return (
    <div className="card food-card h-100">
      <img
        src={item.image}
        className="card-img-top"
        alt={item.name}
      />

      <div className="card-body text-center">
        <h5>{item.name}</h5>
        <p className="text-muted">{item.category}</p>
        <h6 className="text-danger">Rs. {item.price}</h6>

        <button
          className="btn btn-dark btn-sm mt-2"
          onClick={() => addToCart(item)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default FoodCard;
