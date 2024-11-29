import React from "react";
import './DealsOfTheDay.css'
import DateTimeDisplay from './DateTimeDisplay'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const DealsOfTheDay=({deals})=>{

        return(
                <div className='f-banner deals-card'>
                        <img className="deals-card-img" src={deals.dealimg} alt="Deals" style={{width:'100%'}}/>
                        <div className="deals-card-timer">
                                <DateTimeDisplay/>
                                <div className="deals-info">
                                        <button  className="card-title-button">
                                                <p className='card-heading'>{deals.title}</p>
                                        </button>
                                        {/* Rating */}
                                        <div className="card-rating">
                                                <Stack  spacing={1}>    
                                                <Rating name="half-rating-read" defaultValue={deals.rating} precision={0.5} readOnly />  
                                                </Stack>
                                                <p>{deals.rating}</p>
                                        </div>
                                        {/* Brand with Link */}
                                        <div className="card-brand">
                                                <span>By</span>{" "}<a href="#1">{deals.brand}</a>
                                        </div>

                                        {/* Price */}
                                        <div className="card-price-add" >
                                                <div className="card-price"> 
                                                <p className="current-price">${deals.price.toFixed(2)}</p>
                                                <p className="old-price">${deals.oldPrice.toFixed(2)}</p>
                                                </div>
                                                {/* Add to Cart Button */}
                                                <div className="card-add-button"><ShoppingCartIcon fontSize="small" />Add</div>
                                        </div>

                                </div>
                        </div>
                </div>
        )
}
export default DealsOfTheDay;