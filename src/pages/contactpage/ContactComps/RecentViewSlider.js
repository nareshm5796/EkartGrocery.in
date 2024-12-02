import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import TopData from "../../../components/TopData/TopData";
import './RecentViewSlider.css'

// Top Selling Images 
import TopSellingImg1 from "../../../components/assets/topProducts/product-1-1.jpg"
import TopSellingImg2 from "../../../components/assets/topProducts/product-2-1.jpg"
import TopSellingImg3 from "../../../components/assets/topProducts/product-3-1.jpg"
import TopSellingImg4 from "../../../components/assets/topProducts/product-4-1.jpg"
import TopSellingImg5 from "../../../components/assets/topProducts/product-5-1.jpg"

const RecentViewData = [{id:1, title:'Seeds of Change Organic Red Rice', rating:'3.5', price: 10, oldPrice:14, img:TopSellingImg1},
                        {id:2, title:'Angie’s Sweet & Salty Kettle Corn',rating:'4.5', price: 50, oldPrice:64, img:TopSellingImg2},
                        {id:3, title:'Foster Farms Takeout Crispy Classic', rating:'3.5', price: 20, oldPrice:30, img:TopSellingImg3},
                        {id:4, title:'Haagen Caramel Cone Ice Cream Boxed', rating:'1.5', price: 15, oldPrice:30, img:TopSellingImg4},
                        {id:5, title:'Gorton’s Beer Battered Fish Fillets', rating:'3.5', price: 18, oldPrice:25, img:TopSellingImg5}]

const RecentViewSlider=()=>{

        const settings = {
                dots: false,           
                infinite: true,       
                speed: 500,          
                slidesToShow: 4,      
                slidesToScroll: 1,
                autoplay: false,      
                autoplaySpeed: 3000,
                pauseOnHover: false, 
                // fade:true,  
              };

        return<>
                <div className="RecentSlider">
                        <h3>Recent View Products</h3> 
                <Slider {...settings} >
                        {RecentViewData.map((Item)=>(
                                <div className='recent-veiw'><TopData key={Item.id} data= {Item}/></div>     
                        ))}
                </Slider>
                </div>
      
        </>
};

export default RecentViewSlider;