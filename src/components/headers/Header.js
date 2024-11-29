import React from 'react'
import '../headers/Header.css'
import logo from '../assets/logo.png';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import SelectDropDown from '../selectdropdown/SelectDropDown'
import VendorDropDown from '../vedordropdown/VendorDropDown';
import MegaDropDown from '../megamenudropdown/MegaDropDown';


import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';



import { useState } from 'react';
import { Link } from 'react-router-dom';


const Header=()=>{
        const [isDropdownVisible, setDropdownVisible] = useState(false);
        const [isvenderDropdownVisible, setvenderDropdownVisible] = useState(false);
        const [megaopen, setmegaopen] = useState(false);

        return(<div>
                <div className='header-part1' style={{display:'flex',justifyContent:'space-between',alignItems:'center', height:'90px', 
                 borderBottom: '1.5px solid rgba(189, 185, 185, 0.703'}}>
                        <div className='logo-section' style={{display: 'flex', margin: '10px'}}>
                                <img src={logo} className="App-logo" alt="logo" />
                                <div className='searchbar'><input type='text' placeholder='Search for products...'/><button>Search</button></div>
                        </div>
                        <div className='Menu-section' onMouseLeave={() => setDropdownVisible(false)}>
                                <div className='menu-item' ><button>Become Vendor <EastOutlinedIcon/></button></div>
                                <ul className='menu-items' >
                                        <li><button><CachedOutlinedIcon className='icon'/><span className='badge1'>3</span>Compare</button></li>
                                        <li><button><FavoriteBorderOutlinedIcon className='icon'/><span className='badge2'>0</span>Wishlist</button></li>
                                        <li><button><ShoppingCartOutlinedIcon className='icon'/><span className='badge3'>3</span>Cart</button></li>
                                        <li><button onMouseEnter={() => setDropdownVisible(true)}><PermIdentityOutlinedIcon className='icon'/>Account</button></li>
                                </ul>
                               <div className='select'  onClick={() => setDropdownVisible(false)} onMouseLeave={() => setDropdownVisible(false)}>
                               {isDropdownVisible && (<SelectDropDown />)}
                               </div>
                        </div>
                </div>
                <div className='header-part2 ' >
                        <div className='browser-all'><button className='browse-btn'><GridViewOutlinedIcon/><span>Browse All Categories</span><KeyboardArrowDownOutlinedIcon/></button></div>
                        <div className='nav' >
                                <ul className='nav-bar' onMouseLeave={()=>setvenderDropdownVisible(false)}  >
                                        <li className='nav-item'><button><LocalFireDepartmentOutlinedIcon/>Hot Deals</button></li>
                                        <li className='nav-item'><Link to='/'>Home</Link></li>
                                        <li className='nav-item'><Link to='/about'>About</Link></li>
                                        <li className='nav-item'><Link to='/shop'>Shop</Link></li>
                                        <li className='nav-item' ><button className='vendor-btn' onClick={()=>setvenderDropdownVisible(!isvenderDropdownVisible)} onMouseEnter={()=>setvenderDropdownVisible(true)}>Vendors<KeyboardArrowDownOutlinedIcon/></button></li>
                                        <div className='VendorDropDown' onClick={()=>setvenderDropdownVisible(false)} onMouseLeave={()=>setvenderDropdownVisible(false)}>
                                                {isvenderDropdownVisible && (<VendorDropDown/>)}
                                        </div>
                                        <li className='nav-item'><button onClick={()=>setmegaopen(!megaopen)} onMouseEnter={()=>setmegaopen(true)}  className='Mega-menu-btn' >Mega Menu<KeyboardArrowDownOutlinedIcon/></button></li>
                                        
                                        <li className='nav-item'><Link to='/blogs'>Blogs</Link></li>
                                        <li className='nav-item'><Link to='/contact'>Contact</Link></li>
                                </ul>
                               
                        </div>
                </div>
                 <div className='megaMenuDropDown' onClick={()=>setmegaopen(false)} onMouseLeave={()=>setmegaopen(false)}>
                 {megaopen && (<MegaDropDown/>)}
                  </div>
                  
                  </div>
                
        );

};

export default Header;