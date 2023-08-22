import React, { useState } from 'react';
import Link from 'next/link';

const HeaderTemplate = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <nav className={`site-header-nav-wrap ${isMenuOpen ? 'hidden' : ''}`}>
        <div className='site-header-nav'>
          <div className='styps-logo'>
            <Link href="/">
              <div className="site-header-logo">
                <span>Numerote</span>
              </div>
            </Link>
          </div>
          <span className='open-site-header-menu' onClick={openMenu}>. . .</span>
        </div>
      </nav>

      <div className={`site-header-menu ${isMenuOpen ? 'open' : 'hidden'}`}>
        <ul className='site-header-menu-content'>
          {/* You can add other menu items here */}
         <li className='site-header-menu-content-button-3'>
            <Link href='/shop'>
              Index
            </Link>
          </li>
           <li className='site-header-menu-content-button-3'>
            <Link href='/shop'>
              Info
            </Link>
          </li>
          <li className='site-header-menu-content-button-3'>
            <Link href='/shop'>
              Shop
            </Link>
          </li>
        </ul>
        {isMenuOpen && (
          <span className='close-site-header-menu' onClick={closeMenu}>Close</span>
        )}
      </div>
    </div>
  );
};

export default HeaderTemplate;
