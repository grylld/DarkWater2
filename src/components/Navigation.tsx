import { useState } from 'react';
import darkwaterLogo from '../assets/images/darkwater_logo.png';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#guarantee', label: 'Guarantee' },
  { href: '#support', label: 'Support' },
  { href: '#contact', label: 'Contact' },
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="absolute inset-x-0 top-0 z-50 w-full py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16">
        <div className="flex items-center justify-center relative h-full">
          {/* Logo */}
          <a href="#home" className="absolute left-0 z-50 flex items-center">
            <img
              src={darkwaterLogo}
              alt="Dark Water"
              className="h-10 sm:h-12 w-auto"
            />
          </a>

          {/* Mobile menu toggle button */}
          <button
            onClick={toggleMenu}
            className="md:hidden absolute right-0 z-50 p-2"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <div
              className={`w-6 h-0.5 bg-white mb-1.5 transition-transform duration-300 ${
                isMenuOpen ? 'transform rotate-45 translate-y-2 bg-lime-500' : ''
              }`}
            />
            <div
              className={`w-6 h-0.5 bg-white mb-1.5 transition-opacity duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <div
              className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
                isMenuOpen ? 'transform -rotate-45 -translate-y-2 bg-lime-500' : ''
              }`}
            />
          </button>

          {/* Navigation Links */}
          <div
            className={`
            fixed inset-0 bg-dark-900/95 backdrop-blur-md flex flex-col items-center justify-center
            md:relative md:inset-auto md:bg-transparent md:backdrop-blur-none md:flex md:flex-row md:justify-center md:items-center
            transition-all duration-300 z-40
            ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible md:opacity-100 md:visible'}
          `}
          >
            <ul className="flex flex-col items-center space-y-6 md:flex-row md:space-y-0 md:space-x-2 lg:space-x-6">
              {navLinks.map((link) => (
                <li key={link.href} className="list-none">
                  <a
                    href={link.href}
                    className="relative inline-block group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {/* Link text */}
                    <span
                      className="
                      relative z-10 block uppercase text-white 
                      font-display font-semibold transition-colors duration-300 
                      group-hover:text-dark-900
                      text-3xl py-3 px-6
                      md:text-sm md:py-2 md:px-4
                      lg:text-sm lg:py-2 lg:px-5 tracking-wider
                    "
                    >
                      {link.label}
                    </span>
                    
                    {/* Top & bottom border animation */}
                    <span
                      className="
                      absolute inset-0 border-t-2 border-b-2 border-lime-500
                      transform scale-y-[2] opacity-0 
                      transition-all duration-300 origin-center
                      group-hover:scale-y-100 group-hover:opacity-100
                    "
                    />
                    
                    {/* Background fill animation */}
                    <span
                      className="
                      absolute top-[2px] left-0 w-full h-[calc(100%-4px)] bg-lime-500
                      transform scale-y-0 opacity-0
                      transition-all duration-300 origin-top
                      group-hover:scale-y-100 group-hover:opacity-100
                    "
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
