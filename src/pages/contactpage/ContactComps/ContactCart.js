import React from "react";
import "./ContactCart.css"

const ContactCart=({icon})=>{
        return< div className="contact-cart">
        <img src={icon.img} alt="img11"/>
        <div className="contact-cart-info">
                <h4>{icon.title}</h4>
                <p>{icon.subtitle}</p>
        </div>
        </div>
}

export default ContactCart;