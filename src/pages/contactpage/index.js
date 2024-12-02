import React from "react";
import RecentViewSlider from "./ContactComps/RecentViewSlider";
import banner9 from "../../components/assets/banner-9-min.png"
import './style.css'

const Contact = ()=> {
  return <div style={{margin:'15px'}}>
      <RecentViewSlider/>
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
  </div>
  
};

export default Contact;