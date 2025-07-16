import React from 'react';
import Image from 'next/image';


import siteLogo from "../../public/logo.png";

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
              width={52}
              height={52}
              style={{ display: 'inline-block' }}
            />
            <span className="grad-text">Ayoub Aalaou</span>
          </div>
          {/* start navmenu */}
          <nav>
            <ul className='flex items-center h-14'>
              <li className='mr-7'>
                <a className='' href="#">Home</a>
              </li>
              <li className='mr-7'>
                <a href="#">About me</a>
              </li>
              <li className='mr-7'>
                <a href="#">Resume</a>
              </li>
              <li className='mr-7'>
                <a href="#">Blog</a>
              </li>
              <li className='mr-7'>
                <a href="#">Project</a>
              </li>
            </ul>
          </nav>
        </div>

      </div>
    </header>
  )
}

export default SiteHeader
