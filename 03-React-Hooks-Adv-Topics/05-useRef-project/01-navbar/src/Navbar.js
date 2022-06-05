import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaFacebook, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'


const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const handleClick = () => {
    console.log(linksContainerRef.current.style.height);

    setShowLinks(!showLinks);
  }

  useEffect(() => {
    // to get the DOM's height to show dynamically when links added or removed
    const linksRect = linksRef.current.getBoundingClientRect();
    // console.log(linksContainerRect);

    if (showLinks) {
      linksContainerRef.current.style.height = `${linksRect.height}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }

  }, [showLinks])


  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="logo" />
          <button className="nav-toggle" onClick={handleClick}><FaBars /></button>
        </div>

        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {
              links.map((link) => {
                return (
                  <li key={link.id}><a href={link.url}>{link.text}</a></li>
                );
              })
            }
          </ul>
        </div>

        <ul className="social-icons">
          {
            social.map((item) => {
              return (
                <li key={item.id}><a href={item.url}>{item.icon}</a></li>
              );
            })
          }
        </ul>
      </div>
    </nav>
  );
}

export default Navbar
