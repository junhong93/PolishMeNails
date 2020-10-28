import React, { useState, useEffect, Linking } from 'react';
// import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import { EmailJSResponseStatus } from 'emailjs-com';

function Navbar() {
    const [click, setClick] = useState(false);
    //   const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);



    return (
        <nav className='navbar'>

            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                POLISH&nbsp;ME&nbsp;NAIL
          </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu-active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
              </Link>
                </li>
                <li className='nav-item'>
                    <Link
                        to='/services'
                        className='nav-links'
                        onClick={closeMobileMenu}
                    >
                        Services
              </Link>
                </li>
                <li className='nav-item'>
                    <Link
                        to='/products'
                        className='nav-links'
                        onClick={closeMobileMenu}
                    >
                        Products
              </Link>
                </li>
                <li className='nav-item'>
                    <Link
                        to='/gallery'
                        className='nav-links'
                        onClick={closeMobileMenu}
                    >
                        Gallery
                </Link>
                </li>
                <li className='nav-item'>
                    <Link
                        to='/contact-us'
                        className='nav-links'
                        onClick={closeMobileMenu}
                    >
                        Contact Us
                </Link>
                </li>
            </ul>
            <ul className={click ? 'nav-icons-active' : 'nav-icons'}>
                <li className='nav-icons-list' >
                    <a
                        className="nav-links"
                        href="https://www.instagram.com/polish_me_nail/"
                    >
                        <i class="fab fa-instagram-square"></i>
                    </a>
                </li>
                <li className='nav-icons-list'>
                    <Link
                        to='/email'
                        className='nav-links'
                        onClick={closeMobileMenu}
                    >
                        <i class="fas fa-envelope"></i>
                    </Link>
                </li>
                <li className='nav-icons-list-phone'>
                    <a
                        target="_blank"
                        id="action-list-9"
                        class="nav-links"
                        href="tel:+1-647-895-6245"
                        data-tracking-element-type="2"
                        jslog="// LINT.IfChange(PostCTAType)56037; track:impression,click"
                        itemprop="telephone"
                        data-enable-ga="true"
                        data-ga-prefix="action-list"
                    >
                        <i class="fas fa-phone-square"></i>
                    </a>
                </li>
            </ul>

        </nav>
    );
}

export default Navbar;