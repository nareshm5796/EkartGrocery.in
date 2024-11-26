import React from "react";
import './Slider.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import banner2 from'../assets/slider-1-min.png'
import banner1 from'../assets/slider-2-min.png'

const SliderComp = ()=>{
  const settings = {
    dots: true,           
    infinite: true,       
    speed: 500,          
    slidesToShow: 1,      
    slidesToScroll: 1,
    autoplay: true,      
    autoplaySpeed: 3000,
    pauseOnHover: false, 
    // fade:true,  
  };
  return(
        <div className="slide-container">
          <Slider {...settings}>
              <div className="banner">
                <img src={banner1} alt="banner-2"></img>
                <div className="banner-info"> 
                  <h1>Fresh Vegetables Big <br/>discount</h1>
                  <p>Save up to 50% off on your first order</p>
                  <div className="mail">
                    <input className="mail-input" placeholder="Your email address"/><button>Subscribe</button>
                  </div>
                </div>
              </div>
              <div className="banner">
                <img src={banner2} alt="banner-2"></img>
                <div className="banner-info"> 
                  <h1>Don't miss amazing <br/>grocery deals</h1>
                  <p>Sign up for daily newsletter</p>
                  <div className="mail">
                    <input className="mail-input" placeholder="Your email address"/><button>Subscribe</button>
                  </div>
                </div>
              </div>
          </Slider>
          {/* <div className="mail">
            <input className="mail-input" placeholder="Your email address"/><button>Subscribe</button>
          </div> */}
        </div> 
  )
};
export default SliderComp;