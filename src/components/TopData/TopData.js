import React from "react";
import "./TopData.css"
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
const TopData=({data})=>{
        return(
                <div className="TopSellCard">
                        <div className="Top-card-img"><img  src={data.img} alt="top data img" style={{width:'100%'}}/></div>
                        <div className="Top-card-info"> 
                                <button  className="card-title-button">
                                        <p >{data.title}</p>
                                </button>
                                {/* Rating */}
                                <div className="card-rating">
                                        <Stack  spacing={1}>    
                                        <Rating name="half-rating-read" defaultValue={data.rating} precision={0.5} readOnly />  
                                        </Stack>
                                        <p>{data.rating}</p>
                                </div>
                                {/* Price */}
                                <div className="card-price-add" >
                                        <div className="card-price"> 
                                        <p className="current-price">${data.price.toFixed(2)}</p>
                                        <p className="old-price">${data.oldPrice.toFixed(2)}</p>
                                        </div>
                                        {/* Add to Cart Button */}
                                        {/* <div className="card-add-button"><ShoppingCartIcon fontSize="small" />Add</div> */}
                                </div>
                        </div>
                </div>
        );
};
export default TopData;