import React from "react";
import RecentViewSlider from "./ContactComps/RecentViewSlider";
import banner9 from "../../components/assets/banner-9-min.png"
import './style.css'
import ContactCart from "./ContactComps/ContactCart";
import logo from '../../components/assets/logo.png'
import GooglePay from '../../components/assets/Payments/google-play.jpg'
import AppStore from '../../components/assets/Payments/app-store.jpg'
import PaymentMethod from '../../components/assets/Payments/payment-method.png'
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

// importing icons 
import icon1 from "../../components/assets/Contact-Icons/icon-1.png"
import icon2 from "../../components/assets/Contact-Icons/icon-2.png"
import icon3 from "../../components/assets/Contact-Icons/icon-3.png"
import icon4 from "../../components/assets/Contact-Icons/icon-4.png"
import icon5 from "../../components/assets/Contact-Icons/icon-5.png"
import { Link } from "react-router-dom";
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
      <footer>
        <div className="footer-upper">
        <div className="f-banner">
          <Link to='/'><img src={logo} alt="logo img"/></Link>
          <h5>Awesome grocery store website <br/>template</h5>
          <p><strong>Address:</strong>  5171W Campbell Ave Kent, <br/>utah 53127 United States</p>
          <p><strong>Call Us:</strong>  (+880) - 017XXXXXXX</p>
          <p><strong>Email:</strong>  sale@nest.com</p>
          <p><strong>Hours:</strong>  10:00 - 18:00, Mon - Sat</p>
        </div>
        <div className="footer-menu">
          <div >
            <h3>Company</h3>
            <ul>
              <li>
                <a class="my-2" href="/about-us">About us</a></li><li>
                <a class="my-2" href="/about-us">Delivery Information</a></li><li>
                <a class="my-2" href="/privacy-policy">Privacy Policy</a></li><li>
                <a class="my-2" href="/terms-and-conditions">Terms &amp; Conditions</a></li><li>
                <a class="my-2" href="/contact-us">Contact Us</a></li><li>
                <a class="my-2" href="/support-center">Support Center</a></li><li>
                <a class="my-2" href="/careers">Careers</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Account</h3>
            <ul>
              <li>
                <a class="my-2" href="/about-us">Sign In</a></li><li>
                <a class="my-2" href="/about-us">View Cart</a></li><li>
                <a class="my-2" href="/privacy-policy">My Wishlist</a></li><li>
                <a class="my-2" href="/terms-and-conditions">Track My Order</a></li><li>
                <a class="my-2" href="/contact-us">Help Ticket</a></li><li>
                <a class="my-2" href="/support-center">Shipping Details</a></li><li>
                <a class="my-2" href="/careers">Compare products</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Corporate</h3>
            <ul>
            <li>
                <a class="my-2" href="/about-us">Become a Vendor</a></li><li>
                <a class="my-2" href="/about-us">Affiliate Program</a></li><li>
                <a class="my-2" href="/privacy-policy">Farm Business</a></li><li>
                <a class="my-2" href="/terms-and-conditions">Farm Careers</a></li><li>
                <a class="my-2" href="/contact-us">Our Suppliers</a></li><li>
                <a class="my-2" href="/support-center">Accessibility</a></li><li>
                <a class="my-2" href="/careers">Promotions</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Popular</h3>
            <ul>
            <li>
                <a class="my-2" href="/about-us">Milk & Flavoured Milk</a></li><li>
                <a class="my-2" href="/about-us">Butter and Margarine</a></li><li>
                <a class="my-2" href="/privacy-policy">Eggs Substitutes</a></li><li>
                <a class="my-2" href="/terms-and-conditions">Marmalades</a></li><li>
                <a class="my-2" href="/contact-us">Sour Cream and Dips</a></li><li>
                <a class="my-2" href="/support-center">Tea & Kombucha</a></li><li>
                <a class="my-2" href="/careers">Cheese</a>
              </li>
              
            </ul>
          </div>
        </div>
        <div style={{width:'20%'}}>
        <h3>Install App</h3>
        <p>From App Store of Google Play</p>
        <div className="footer-ImgLinks" style={{padding:'5px 0px', display:'flex'}}>
          <span><Link><img src={GooglePay} alt="Google play"/></Link></span>
          <span><Link><img src={AppStore} alt="App Store"/></Link></span>
        </div>
        <p>Secured Payment Gateway</p>
        <div className="footer-ImgLinks"><Link><img src={PaymentMethod} alt="App Store"/></Link></div>
        </div>
        </div>
        {/* <br></br> */}
        <hr class="colored-hr"></hr>
        <div className="footer-lower">
          <div>
            <p>©2024 Nest <br/>All rights reserved.</p>
          </div>
          <div className="toolfree">
            <span className="icon"><HeadsetMicOutlinedIcon/></span>
            <div> 
              <Link><h2>01XXXXXXXX</h2></Link>
              <p>Working 8:00 - 22:00</p>
            </div>
          </div>
          <div className="toolfree">
            <span className="icon"><HeadsetMicOutlinedIcon/></span>
            <div> 
              <Link><h2>01XXXXXXXX</h2></Link>
              <p>Working 8:00 - 22:00</p>
            </div>
            
            
          </div>
          <div>
              <div  className="followus">
                <h4>Follow Us</h4>
                <Link className="icon"><FacebookOutlinedIcon/></Link>
                <Link className="icon"><TwitterIcon/></Link>
                <Link className="icon"><WhatsAppIcon/></Link>
                <Link className="icon"><InstagramIcon/></Link>
              </div>
              <p>Up to 15% discount on your first subscribe</p>
          </div>
        </div>
      </footer>
  </div>
  
};

export default Contact;