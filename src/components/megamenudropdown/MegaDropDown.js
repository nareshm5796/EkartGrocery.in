import React from "react";
import './MegaDropDown.css'
import { Link } from "react-router-dom";
// import Img from '../assets./mega-img.png'
import image from '../assets/mega-img.png'


const MegaDropDown = ()=>{
    return(
    <div className="MegaCard">
        <div className="MegaCard-items">
          <h2 className="MegaCard-item-title">Products 10% Discount</h2>
          <ul className="MegaCard-items-lists">
            <li><button>Canada Dry Ginger Ale - 2 L Bottle</button></li>
            <li><button>Cauliflower Species Brassica the genus</button></li>
            <li><button>Nestle Original mate Coffee Creamer</button></li>
            <li><button>Onion hybrid  Allium</button></li>
            <li><button>Seeds of Change Organic Red Rice</button></li>
            <li><button>Seeds of Change  Red Rice</button></li>
            <li><button>Seeds of Change Organic Red</button></li>
          </ul>
        </div>
        <div className="MegaCard-items">
          <h2 className="MegaCard-item-title">Products 10% Discount</h2>
          <ul className="MegaCard-items-lists">
            <li><button>Canada Dry Ginger Ale - 2 L Bottle</button></li>
            <li><button>Cauliflower Species Brassica the genus</button></li>
            <li><button>Nestle Original Creamer</button></li>
            <li><button>Onion hybrid varieties genus Allium</button></li>
            <li><button>Seeds of Change Organic Red Rice</button></li>
          </ul>
        </div>  
        <div className="MegaCard-items">
          <h2 className="MegaCard-item-title">Products 10% Discount</h2>
          <ul className="MegaCard-items-lists">
            <li><button>Canada   Ale - 2 L Bottle</button></li>
            <li><button>Cauliflower Species Brassica the genus</button></li>
            <li><button>Nestle Original mate Coffee Creamer</button></li>
            <li><button>Seeds of Change Organic Red</button></li>
            <li><button>Onion hybrid varieties genus Allium</button></li>
            <li><button>Seeds of Change Organic Red Rice</button></li>
          </ul>
        </div> 
        <div>
        <Link><img src={image} alt="img not uploaded"></img></Link>
        </div> 
    </div>  
    );
};

export default MegaDropDown;