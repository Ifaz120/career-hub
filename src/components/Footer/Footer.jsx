import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content p-10 mt-12">
      <div className="w-11/12 mx-auto footer">
        {/* Brand Section */}
        <aside>
          <img src="/src/assets/logo.png" alt="Logo" className="h-16 mb-4 bg-white rounded-lg p-1" />
          <p className="font-bold">
            Career Hub Ltd.
            <br />
            Empowering your professional journey since 2024.
          </p>
          <p className="text-sm opacity-70">© 2026 - All rights reserved</p>
        </aside>

        {/* Services Section */}
        <nav>
          <h6 className="footer-title opacity-100 font-bold text-white">Services</h6>
          <a className="link link-hover">Job Search</a>
          <a className="link link-hover">Resume Building</a>
          <a className="link link-hover">Interview Prep</a>
          <a className="link link-hover">Career Counseling</a>
        </nav>

        {/* Company Section */}
        <nav>
          <h6 className="footer-title opacity-100 font-bold text-white">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Missions</a>
          <a className="link link-hover">Press kit</a>
        </nav>

        {/* Social Section */}
        <nav>
          <h6 className="footer-title opacity-100 font-bold text-white">Social</h6>
          <div className="grid grid-flow-col gap-4 text-2xl">
            <a href="https://twitter.com" target="_blank" className="hover:text-primary transition-colors">
              <FaTwitter />
            </a>
            <a href="https://github.com" target="_blank" className="hover:text-primary transition-colors">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" className="hover:text-primary transition-colors">
              <FaLinkedin />
            </a>
            <a href="https://facebook.com" target="_blank" className="hover:text-primary transition-colors">
              <FaFacebook />
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;