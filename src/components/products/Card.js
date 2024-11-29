import * as React from 'react';
import { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Card.css";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ShuffleOutlinedIcon from '@mui/icons-material/ShuffleOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Card = ({ product }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <div className="card-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {/* Top-left Green Label */}
      <div className="card-label-green">10%</div>

      {/* Image with Tooltip */}
      <div style={{ position: "relative" }}><img src={hovered ? product.img2 : product.img} alt={product.title}/>
        <div className="card-tooltip">
        <Tooltip className='tooltip-icon' title="Quick View" arrow placement="top"><VisibilityOutlinedIcon/></Tooltip>
        <Tooltip className='tooltip-icon' title="Compare" arrow placement="top"><ShuffleOutlinedIcon/></Tooltip>
        <Tooltip className='tooltip-icon' title="Wishlist" arrow placement="top"><FavoriteBorderOutlinedIcon/></Tooltip>
        </div>
      </div>

      {/* Fresh Fruits Label */}
      <p className="card-label">Fresh Fruit</p>

      {/* Title */}
      <button  className="card-title-button">
        <p className='card-heading'>{product.title}</p>
      </button>

      {/* Rating */}
      <div className="card-rating">
        <Stack  spacing={1}>    
          <Rating name="half-rating-read" defaultValue={product.rating} precision={0.5} readOnly />  
        </Stack>
        <p>{product.rating}</p>
      </div>

      {/* Brand with Link */}
      <div className="card-brand">
        <span>By</span>{" "}<a href="#1">{product.brand}</a>
      </div>

      {/* Price */}
      <div className="card-price-add" >
        <div className="card-price"> 
          <p className="current-price">${product.price.toFixed(2)}</p>
          <p className="old-price">${product.oldPrice.toFixed(2)}</p>
        </div>
        {/* Add to Cart Button */}
        <div className="card-add-button"><ShoppingCartIcon fontSize="small" />Add</div>
      </div>

      
      
</div>
  );
};

export default Card;
