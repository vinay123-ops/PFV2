import React, { useState, useEffect, useRef } from 'react';
import { logotext } from '../assets/Utilities/utilities';
import { HashLink } from 'react-router-hash-link';
import { navItems } from '../assets/Utilities/utilities';
import { Link } from 'react-router-dom';
import 'animate.css'

const Header = () => {
  const [activeLink, setActiveLink] = useState(navItems[0].id);
  const [scrolled, setScrolled] = useState(false);
  const [isManualNavigation, setIsManualNavigation] = useState(false);
  const navbarRef = useRef(null);
  const disabledButtonId = 3;


  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = navbarRef.current?.offsetHeight || 100;

      if (!isManualNavigation) {                               // Only run if no link was manually clicked
        navItems.forEach((item) => {
          const section = document.querySelector(item.href);
          if (section) {
            const sectionTop = section.getBoundingClientRect().top + window.scrollY - navbarHeight;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
              setActiveLink(item.id);
            }
          }
        });
      }

      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isManualNavigation]);

  const handleClick = (id) => {
    setActiveLink(id);
    setIsManualNavigation(true);               // Indicate that a manual click happened
                                                                               
    setTimeout(() => setIsManualNavigation(false), 800);   // Reset manual navigation flag after a delay
  };

  return (
    <header ref={navbarRef} id="header" className={`h-auto  ${scrolled ? 'scrolled' : ''}`}>
      <div className="animate__animated animate__fadeInDown animate__slow w-full fixed z-50 pt-2 flex items-center justify-between">
        <div>
          <Link to="/">
            <div className="ml-40 mt-3 pb-5 h-[60px] text-4xl font-bold text-white">{logotext}</div>
          </Link>
        </div>
        <div className="ml-auto flex">
          <nav id='bar'>
            <ul className="flex gap-6">
              {navItems.map((item) => (
                <li key={item.id}>
                  <HashLink
                    smooth
                    to={item.href}
                    className={`link text-xl font-light pr-1 w-full items-center text-center ${item.id === disabledButtonId ? 'opacity-50 cursor-not-allowed' : ''} ${activeLink === item.id ? 'text-hibiscus-300 border-b-2 border-hibiscus-300' : 'text-white'}`}
                    onClick={() => {
                      if (item.id !== disabledButtonId) {
                        handleClick(item.id, item.href); // Handle scroll and active link update
                      }
                    }}
                  >
                    <item.icon className="inline-block mr-2" />{item.title}
                  </HashLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <button onClick={() => {
          document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
        }}
          className="mr-8 mt-4 font-bold text-white border border-white px-8 py-4 text-lg ml-4 bg-transparent transition-all duration-300 hover:bg-white hover:text-hibiscus-600 hover:border-hibiscus-600 relative">
          Let's connect
        </button>
      </div>
    </header>
  );
};

export default Header;
