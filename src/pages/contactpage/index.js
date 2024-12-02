import React from "react";
import RecentViewSlider from "./ContactComps/RecentViewSlider";
import banner9 from "../../components/assets/banner-9-min.png"
import './style.css'
import ContactCart from "./ContactComps/ContactCart";

// importing icons 
import icon1 from "../../components/assets/Contact-Icons/icon-1.png"
import icon2 from "../../components/assets/Contact-Icons/icon-2.png"
import icon3 from "../../components/assets/Contact-Icons/icon-3.png"
import icon4 from "../../components/assets/Contact-Icons/icon-4.png"
import icon5 from "../../components/assets/Contact-Icons/icon-5.png"
// import icon6 from "../../components/assets/Contact-Icons/icon-6.svg"

// icons Data
const iconsData= [{id:1, img:icon1, title:'Best price & Offers', subtitle:'Order $50 or more' },
                  {id:2, img:icon2, title:'Free delivery', subtitle:'Order $50 or more' },
                  {id:3, img:icon3, title:'Great daily deal', subtitle:'Order $50 or more' },
                  {id:4, img:icon4, title:'Wide assortment', subtitle:'Order $50 or more' },
                  {id:5, img:icon5, title:'Easy returns', subtitle:'Order $50 or more' },
]

const Contact = ()=> {
  return <div style={{margin:'15px'}}>
      <RecentViewSlider/>
      {/* Grocery Deals Banner  */}
      <div className=" grocey-deals">
        <div className="slide-container">
          <div className="banner">
            <img src={banner9} alt="banner-2"></img>
            <div className="banner-info"> 
              <h1>Stay home & get your daily<br/>needs from our shop</h1>
              <p>Start Your Daily Shopping with <span style={{color:'green'}}>Nest Grocery</span></p>
              <div className="mail">
                <input className="mail-input" placeholder="Your email address"/><button>Subscribe</button>
              </div>
            </div>
          </div>          
        </div>
      </div>
      <div style={{display:'flex',alignItems:'center', justifyContent:'space-between', gap:'20px'}}>
        {iconsData.map((icon)=>(
          <ContactCart key={icon.id} icon = {icon}/>
        ))}
      </div>
  </div>
  
};

export default Contact;