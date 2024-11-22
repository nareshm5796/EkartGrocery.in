import React from 'react'
import './SelectDropDown.css'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const SelectDropDown = () =>{
      return(<div className='dropdown'>
      <ul className='dropdown-menu'>
      <li className='dropdown-menu-item' ><button><PermIdentityOutlinedIcon/>My Account</button></li>
      <li className='dropdown-menu-item'><button><LocationOnOutlinedIcon/>Order Tracking</button></li>
      <li className='dropdown-menu-item'><button><LabelOutlinedIcon/>My Voucher</button></li>
      <li className='dropdown-menu-item'><button><FavoriteBorderOutlinedIcon/>My Wishlist</button></li>
      <li className='dropdown-menu-item'><button><SettingsOutlinedIcon/>Setting</button></li>
      <li className='dropdown-menu-item'><button><LogoutOutlinedIcon/>Logout</button></li>
      </ul>
      </div>)
};

export default SelectDropDown;