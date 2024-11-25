import React, { useState } from 'react'; // Fixed incorrect useState import
import './style.css';
import SliderComp from "../../components/Slider/Slider";


const Home = () => {
  const [active, setActive] = useState(1); // Initialize state for active button
  const data= [{image:'url1', Name:'fruit1',count: 11},
              {image:'url2', Name:'fruit3',count: 10},
              {image:'url3', Name:'fruit4',count: 15}
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
          <ul style={{listStyle:'none'}}>
            {data.map((item)=>(<li>{item.Name}</li>))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
