import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Use Link for internal routing

const Footer = () => {
  return (
    
    <footer className="bg-neutral text-neutral-content p-6 md:p-10 mt-12">
      <div className="w-11/12 mx-auto footer footer-center md:footer">
        
        {/* Brand Section */}
        <aside className="flex flex-col items-center md:items-start">
          <img 
            src="/src/assets/logo.png" 
            alt="Logo" 
            className="h-12 md:h-16 mb-4 bg-white rounded-lg p-1" 
          />
          <p className="font-bold text-center md:text-left">
            Career Hub Ltd.
            <br />
            Empowering your professional journey since 2024.
          </p>
          <p className="text-sm opacity-70 mt-2">© 2026 - All rights reserved</p>
        </aside>

        {/* Services Section */}
        <nav className="flex flex-col items-center md:items-start">
          <h6 className="footer-title opacity-100 font-bold text-white mb-2">Services</h6>
          <a className="link link-hover text-sm md:text-base">Job Search</a>
          <a className="link link-hover text-sm md:text-base">Resume Building</a>
          <a className="link link-hover text-sm md:text-base">Interview Prep</a>
          <a className="link link-hover text-sm md:text-base">Career Counseling</a>
        </nav>

        {/* Company Section */}
        <nav className="flex flex-col items-center md:items-start">
          <h6 className="footer-title opacity-100 font-bold text-white mb-2">Company</h6>
          <Link to="/about" className="link link-hover text-sm md:text-base">About us</Link>
          <Link to="/contact" className="link link-hover text-sm md:text-base">Contact</Link>
          <Link to="/mission" className="link link-hover text-sm md:text-base">Missions</Link>
          <a className="link link-hover text-sm md:text-base">Press kit</a>
        </nav>

        {/* Social Section */}
        <nav className="flex flex-col items-center md:items-start">
          <h6 className="footer-title opacity-100 font-bold text-white mb-2">Social</h6>
          <div className="grid grid-flow-col gap-6 text-2xl mt-2">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-all hover:-translate-y-1">
              <FaTwitter />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-all hover:-translate-y-1">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-all hover:-translate-y-1">
              <FaLinkedin />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-all hover:-translate-y-1">
              <FaFacebook />
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;