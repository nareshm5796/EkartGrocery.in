import React, { useState } from 'react'; // Fixed incorrect useState import
import './style.css';
import SliderComp from "../../components/Slider/Slider";
import SimpleSlider from '../../components/categorySlider/CategorySlider';

import Cat1 from "../../../src/components/assets/Category/cat-1.png"
import Cat2 from "../../../src/components/assets/Category/cat-2.png"
import Cat3 from "../../../src/components/assets/Category/cat-3.png"
import Cat4 from "../../../src/components/assets/Category/cat-4.png"
import Cat5 from "../../../src/components/assets/Category/cat-5.png"
import Cat6 from "../../../src/components/assets/Category/cat-6.png"
import Cat7 from "../../../src/components/assets/Category/cat-7.png"
import Cat8 from "../../../src/components/assets/Category/cat-8.png"
import Cat9 from "../../../src/components/assets/Category/cat-9.png"
import Cat10 from "../../../src/components/assets/Category/cat-10.png"
import Cat11 from "../../../src/components/assets/Category/cat-11.png"

import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import banner1 from '../../../src/components/assets/Category/banner1.png'
import banner2 from '../../../src/components/assets/Category/banner2.png'
import banner3 from '../../../src/components/assets/Category/banner3.png'

import { products } from "./productsdata";
import Card from "../../components/products/Card"
import Banner5 from "../../components/assets/DailyDeals/banner-5-min.png"
import Banner6 from "../../components/assets/DailyDeals/banner-6-min.png"
import Banner7 from "../../components/assets/DailyDeals/banner-7-min.png"
import Banner8 from "../../components/assets/DailyDeals/banner-8-min.png"
import DealsOfTheDay from "../../components/DealsoftheDay/DealsOfTheDay"


const Home = () => {
  // const [filteredProducts, setFilteredProducts] = useState(products);
  const [active, setActive] = useState(1); // Initialize state for active button
  const names = [
    { image: Cat1, Name: 'Vegetables', count: 11, background: 'rgb(242, 252, 228)' },
    { image: Cat2, Name: 'Strawberry', count: 10, background: 'rgb(255, 252, 235)' },
    { image: Cat3, Name: 'Peach', count: 15, background: 'rgb(236, 255, 236)' },
    { image: Cat4, Name: 'Red Apple', count: 12, background: 'rgb(254, 239, 234)' },
    { image: Cat5, Name: 'Custard apple', count: 10, background: 'rgb(255, 243, 235)' },
    { image: Cat6, Name: 'Red Apple', count: 22, background: 'rgb(255, 243, 255)' },
    { image: Cat7, Name: 'Peach', count: 10, background: 'rgb(242, 252, 228)' },
    { image: Cat8, Name: 'Organic Kiwi', count: 12, background: 'rgb(254, 239, 234)' },
    { image: Cat9, Name: 'Cake & Milk', count: 15, background: 'rgb(242, 252, 228)' },
    { image: Cat10, Name: 'Coffee & Tea', count: 15, background: 'rgb(254, 239, 234)' },
    { image: Cat11, Name: 'Head Phone', count: 11, background: 'rgb(236, 255, 236)' },
    { image: Cat6, Name: 'Red Apple', count: 1, background: 'rgb(255, 243, 255)' },
    { image: Cat2, Name: 'Strawberry', count: 8, background: 'rgb(242, 252, 228)' },
    { image: Cat9, Name: 'Cake & Milk', count: 15, background: 'rgb(236, 255, 236)' },
    { image: Cat1, Name: 'Vegetables', count: 19, background: 'rgb(255, 243, 255)' },
  ];

  // Deals of the day data 
  const Deals_of_the_day_imgs = [{id:1, dealimg:Banner5, title:'Organic Cage Grade', rating:2.5, brand: "Orange ", price: 10.75, oldPrice: 15.0}, 
                                  {id:2, dealimg:Banner6, title:'Naturally Flavored Cinnamon', rating:2.5, brand: "Orange ", price: 10.75, oldPrice: 15.0}, 
                                  {id:3, dealimg:Banner7, title:'Seeds of Change Organic', rating:2.5, brand: "Orange ", price: 10.75, oldPrice: 15.0},
                                  {id:4, dealimg:Banner8, title:'Dried fruit: apricots',rating:2.5, brand: "Orange ", price: 10.75, oldPrice: 15.0}];

  // for scroll detecting
  document.addEventListener("scroll", () => {
    const banners = document.querySelectorAll(".f-banner");
    
    banners.forEach((banner) => {
      const rect = banner.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isVisible) {
        banner.classList.add("show");
      }
    });
  });
  

  return (
    <div className="home-container">
      <SliderComp />
      {/* Feature container */}
      <div className="Featured-container">
        <div className="nav">
          <div className="head1">
            <h1>Featured Categories</h1>
          </div>
          {/*Feature container -- Menu starts from here.. */}
          <div>
            <ul><li><button
                  onClick={() => setActive(1)} // Set active state
                  style={{
                    color: active === 1 ? 'rgba(59, 183, 126, 0.8)' : 'black', // Conditional color
                  }}
                >
                  Cake & Milk
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActive(2)} // Set active state
                  style={{
                    color: active === 2 ? 'rgba(59, 183, 126, 0.8)' : 'black',
                  }}
                >
                  Coffees & Teas
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActive(3)} // Set active state
                  style={{
                    color: active === 3 ? 'rgba(59, 183, 126, 0.8)' : 'black',
                  }}
                >
                  Pet Foods
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActive(4)} // Set active state
                  style={{
                    color: active === 4 ? 'rgba(59, 183, 126, 0.8)' : 'black',
                  }}
                >
                  Vegetables
                </button>
              </li>
            </ul>
          </div>
          {/* Feature container -- Cards and banner images */}
        </div>
        <div className='featured-item'>
            <div>
              <SimpleSlider names={names} />
              <div className='f-banner' style={{ width:'100%', display:'flex',justifyContent:'space-between' }}>
                <button className='banner-part'>
                  <div className='banner-img-part'>
                    <img src={banner1} alt='text1'/>
                  </div>
                  <div className='banner-info-part'>
                          <h1>Everyday Fresh & Clean with Our Products</h1> 
                          <button>Shop Now <span><EastOutlinedIcon/></span></button>
                  </div>
                </button>
                <button className='banner-part'>
                  <div className='banner-img-part'>
                    <img src={banner2} alt='text1'/>
                  </div>
                  <div className='banner-info-part'>
                          <h1>Make your Breakfast Healthy and Easy</h1> 
                          <button>Shop Now <span><EastOutlinedIcon/></span></button>
                  </div>
                </button>
                <button className='banner-part'>
                  <div className='banner-img-part'>
                    <img src={banner3} alt='text1'/>
                  </div>
                  <div className='banner-info-part'>
                          <h1>The Organic Product Online</h1> 
                          <button>Shop Now <span><EastOutlinedIcon/></span></button>
                  </div>
                </button>
              </div>
            </div>
        </div>
      </div>
      {/* Product container */}
      <div className="product-container Featured-container">
        {/* Product container -- Menu bar starts here..*/}
        <div className="head1">
          <h1>Popular Products</h1>
        </div>
        <div className="nav">
            <ul>
              <li><button onClick={() => setActive(1)} 
                  style={{color: active === 1 ? 'rgba(59, 183, 126, 0.8)' : 'black',}}
                  >All</button>
              </li>
              <li>
                <button onClick={() => setActive(2)} // Set active state
                  style={{color: active === 2 ? 'rgba(59, 183, 126, 0.8)' : 'black',}}
                >Baking Material</button>
              </li>
              <li>
                <button onClick={() => setActive(3)} // Set active state
                  style={{color: active === 3 ? 'rgba(59, 183, 126, 0.8)' : 'black',}}
                >Fresh Fruits</button>
              </li>
              <li>
                <button onClick={() => setActive(4)} // Set active state
                  style={{color: active === 4 ? 'rgba(59, 183, 126, 0.8)' : 'black',}}
                >Milk & Diries</button>
              </li>
              <li>
                <button onClick={() => setActive(5)} // Set active state
                  style={{color: active === 5 ? 'rgba(59, 183, 126, 0.8)' : 'black',}}
                >Meats</button>
              </li>
              <li>
                <button onClick={() => setActive(6)} // Set active state
                  style={{color: active === 6 ? 'rgba(59, 183, 126, 0.8)' : 'black',}}
                >Vegetables</button>
              </li>
            </ul>
        </div> 
      </div>
      {/* Products- Cards  */}
      <div className='products-card' style={{display:'flex'}}>
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
      </div>
      {/* Deals Of The Day --container */}
      <div className="head1">
        <h1>Deals Of The Day</h1>
      </div>
      <div className='DealsOfTheDay-cards'>
        {Deals_of_the_day_imgs.map((deals)=>(
          <DealsOfTheDay key={deals.id} deals={deals} />
        ))}
      </div>
      {/* Deals Of The Day --container */}

    </div> 
  );
};

export default Home;

