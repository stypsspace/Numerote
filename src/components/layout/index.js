
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import HeaderTemplate from 'src/components/header/HeaderTemplate'; // Import the MenuToggle component



const Layout = ({ children }) => {




return (

<div className="site-wrapper">

<header className='site-header'>

<HeaderTemplate/> {/* Use the MenuToggle component */}

</header>





<main className='wrap'>{children}</main>

<footer className='site-footer'>

<div className='site-footer-inner'>
<div className='site-footer-content'>
</div>

<div className='site-footer-nav'>
<div className='site-footer-nav-copyright'>©2023</div>
</div>

</div>
</footer>
</div>

);
};

export default Layout;
