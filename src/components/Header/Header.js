import React from 'react';
import { Link} from 'react-router-dom';
import './Header.css';

const Header = () => {

    return (
        <div className='container'>
            <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand logoOne" href="/"><span className='store-title'>Learn Something New</span></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/order">Order</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/admin">Admin</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" >Deals</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link login-btn" to="/createAccount">Login</Link>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;