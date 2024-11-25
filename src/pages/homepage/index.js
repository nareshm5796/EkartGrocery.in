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


const Home = () => {
  const [active, setActive] = useState(1); // Initialize state for active button
  const names = [
    { image: Cat1, Name: 'Vegetables', count: 11, background: 'rgb(242, 252, 228)' },
    { image: Cat2, Name: 'Strawberry', count: 10, background: 'rgb(255, 252, 235)' },
    { image: Cat3, Name: 'Peach', count: 15, background: 'rgb(236, 255, 236)' },
    { image: Cat4, Name: 'Red Apple', count: 12, background: 'rgb(254, 239, 234)' },
    { image: Cat5, Name: 'fruit4', count: 10, background: 'rgb(255, 243, 235)' },
    { image: Cat6, Name: 'fruit4', count: 22, background: 'rgb(255, 243, 255)' },
    { image: Cat7, Name: 'fruit4', count: 10, background: 'rgb(242, 252, 228)' },
    { image: Cat8, Name: 'Organic Kiwi', count: 12, background: 'rgb(254, 239, 234)' },
    { image: Cat9, Name: 'Cake & Milk', count: 15, background: 'rgb(242, 252, 228)' },
    { image: Cat10, Name: 'fruit4', count: 15, background: 'rgb(254, 239, 234)' },
    { image: Cat11, Name: 'fruit4', count: 11, background: 'rgb(236, 255, 236)' },
    { image: Cat6, Name: 'fruit4', count: 1, background: 'rgb(255, 243, 255)' },
    { image: Cat2, Name: 'fruit4', count: 8, background: 'rgb(242, 252, 228)' },
    { image: Cat9, Name: 'fruit4', count: 15, background: 'rgb(236, 255, 236)' },
    { image: Cat1, Name: 'fruit4', count: 19, background: 'rgb(255, 243, 255)' },
  ];

  return (
    <div className="home-container">
      <SliderComp />
      <div className="Featured-container">
        <div className="nav">
          <div className="head1">
            <h1>Featured Categories</h1>
          </div>
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
        </div>
        <div className='featured-item'>
          <SimpleSlider names={names} / > 
        </div>
      </div>
    </div>
  );
};

export default Home;

