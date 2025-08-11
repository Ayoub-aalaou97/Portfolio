import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import siteLogo from "../../public/img/logo.png";

const SiteHeader = () => {
  return (
    <header className='h-14 border-b-1'>
      <div className="container max-w-7xl mx-auto">
        <div className="header-menu-container flex justify-between">

          {/* start navlogo */}
          <div className="nav-logo-container">
            <Image 
              src={siteLogo}
              alt="Site logo"
              style={{ display: 'inline-block', height: '52px', width: '52px' }}
            />
            <span className="grad-text">Ayoub Aalaou</span>
          </div>
          {/* start navmenu */}
          <nav>
            <ul className='flex items-center h-14'>
              <li className='mr-7'>
                <Link href="/">Home</Link>
              </li>
              {/* <li className='mr-7'>
                <Link href="/">About me</Link>
              </li> */}
              <li className='mr-7'>
                <Link href="/resume">Resume</Link>
              </li>
              <li className='mr-7'>
              {/* //  <a href="#">Blog</a> */}
                <Link href="/blog">blog</Link>
              </li>
              <li className='mr-7'>
                <Link href="/">Project</Link>
              </li>
            </ul>
          </nav>
        </div>

      </div>
    </header>
  )
}

export default SiteHeader
