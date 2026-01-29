import React from 'react';
import { Link } from 'react-router-dom';
import { FiSun, FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter, FiFacebook } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <FiSun className="footer-logo-icon" />
            <span className="footer-logo-text">SurfauxDyeChem</span>
          </div>
          <p className="footer-description">
            Leading the future of sustainable chemistry with innovative, eco-friendly solutions 
            that protect our planet while delivering exceptional performance.
          </p>
          <div className="footer-social">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FiLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FiTwitter />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FiFacebook />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <div className="footer-links">
            <Link to="/about" className="footer-link">About Us</Link>
            <Link to="/services" className="footer-link">Our Services</Link>
            <Link to="/projects" className="footer-link">Products</Link>
            <Link to="/blog" className="footer-link">News & Blog</Link>
            <Link to="/contact" className="footer-link">Contact</Link>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Services</h3>
          <div className="footer-links">
            <span className="footer-link">Green Chemistry</span>
            <span className="footer-link">Sustainable Manufacturing</span>
            <span className="footer-link">Circular Economy</span>
            <span className="footer-link">Bio-based Materials</span>
            <span className="footer-link">Environmental Consulting</span>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Contact Info</h3>
          <div className="footer-contact">
            <div className="contact-item">
              <FiMapPin className="contact-icon" />
              <span>123 Green Technology Blvd<br />Eco City, EC 12345</span>
            </div>
            <div className="contact-item">
              <FiPhone className="contact-icon" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="contact-item">
              <FiMail className="contact-icon" />
              <span>info@ecochem tech.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {currentYear} SurfauxDyeChem. All rights reserved.</p>
          <div className="footer-bottom-links">
            <span className="footer-bottom-link">Privacy Policy</span>
            <span className="footer-bottom-link">Terms of Service</span>
            <span className="footer-bottom-link">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;