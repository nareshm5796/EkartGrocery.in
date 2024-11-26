import React, { useState } from "react";
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Card.css";

const Card = ({ product }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <div className="card-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {/* Top-left Green Label */}
      <div className="card-label-green">10%</div>

      {/* Image with Tooltip */}
      <div style={{ position: "relative" }}><img src={hovered ? product.img2 : product.img}alt={product.title}/>
        <div className="card-tooltip">Exclusive Offer</div>
      </div>

      {/* Fresh Fruits Label */}
      <p className="card-label">Fresh Fruits</p>

      {/* Title */}
      <Button variant="text" className="card-title-button">
        {product.title}
      </Button>

      {/* Rating */}
      <p className="card-rating">
        <strong>Rating:</strong> {product.rating}
      </p>

      {/* Brand with Link */}
      <p className="card-brand"><strong>By:</strong>{" "}<a href="#1">{product.brand}</a></p>

      {/* Price */}
      <p className="card-price">
        <span className="current-price">${product.price.toFixed(2)}</span>
        <span className="old-price">${product.oldPrice.toFixed(2)}</span>
      </p>

      {/* Add to Cart Button */}
      <div className="card-add-button"><ShoppingCartIcon fontSize="small" />Add</div>
</div>
  );
};

export default Card;
