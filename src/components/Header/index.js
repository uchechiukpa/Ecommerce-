import React from 'react';
import { logo } from '../../images';
import './header.css'

function Header(props) {
    return (
        <div className='header-container'>
            <div className='logo-container'>
                <img src={logo} />
                <h1>GREY <br/> VELVET</h1>
            </div>

            <div className='pages-container'>
                <ul>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>LockBook</li>
                    <li>Blog</li>
                    <li>Sale</li>
                </ul>
            </div>


            <div className='shopping-container'>
                <i class="fas fa-search"></i>
                <i class="fas fa-shopping-cart"></i>
            </div>
        </div>
    );
}

export default Header;