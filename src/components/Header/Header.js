import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='responsive-container'>
            <div className="main-header">
            <div className="store-title">
                <h4>Learn Something New</h4>
            </div>
            <div className="menu">
                <ul>
                    <Link to='/home'><li href="">Home</li></Link>
                    <Link to='/order'><li href="">Orders</li></Link>
                    <Link to='/admin'><li href="">Admin</li></Link>
                    <Link><li href="">Deals</li></Link>
                    <Link to='/login'><li className='login-btn' href="">Login</li></Link>
                </ul>
            </div>
            </div>
        </div>
    );
};

export default Header;