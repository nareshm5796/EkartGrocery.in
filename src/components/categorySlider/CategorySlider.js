import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './CategorySlider.css'

const SimpleSlider = ({ names }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 2
  };

  return (
    <div>
      <Slider {...settings}>
      {names.map((item, index) => (
          <div key={index}>
             <div className = "category-card" style={{background:item.background}}> 
                <img className = "category-card-img" src={item.image} alt={item.Name} />
                <h5 className = "category-card-title">{item.Name}</h5>
                <p className = "category-card-count">{item.count} items</p>
              </div>   
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
