import React from "react";
import './DealsOfTheDay.css'

const DealsOfTheDay=({deals})=>{
        return(
                <div className='f-banner deals-card' >
                        <img className="deals-card-img" src={deals.dealimg} alt="Deals" style={{width:'100%'}}/>
                        
                </div>
        )
}
export default DealsOfTheDay;