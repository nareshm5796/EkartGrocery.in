import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './CategorySlider.css'

const SimpleSlider = ({ names }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 3
  };

  return (
    <div>
      <Slider {...settings} className="slider1">
      {names.map((item, index) => (
          <div key={index}>
             <div className = "category-card" style={{background:item.background}}> 
                <button className="btn1"> 
                <img className = "category-card-img" src={item.image} alt={item.Name} />
                <h4 className = "category-card-title">{item.Name}</h4>
                </button>
                <p className = "category-card-count">{item.count} items</p>
              </div>   
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
