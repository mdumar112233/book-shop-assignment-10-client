import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import icon from '../../icons/outlined_menu-512.webp';

const Header = () => {

    return (
        <div className='responsive-container container'>
            <div className="main-header">
            <div className="store-title">
                <div className="menu-icon">
                    <img  src={icon} alt=""/>
                </div>
                <h4>Learn Something New</h4>
            </div>
            <div id='slide' className="menu">
                <ul>
                    <li href=""><Link className='menu-link' to='/home'>Home</Link></li> 
                    <li href=""><Link className='menu-link' to='/order'>Order</Link></li> 
                    <li href=""><Link className='menu-link' to='/admin'>Admin</Link></li> 
                    <li href=""><Link className='menu-link'>Deals</Link></li> 
                    <li href=""><Link className='menu-link' className='login-btn' to='/login'>Login</Link></li> 

                </ul>
            </div>
            </div>
        </div>
    );
};

export default Header;