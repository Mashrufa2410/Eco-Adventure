import React from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-base-200 text-base-content p-10">
      <aside>
        <img src={logo} className="w-[150px] rounded-full" alt="Eco Adventures Logo" />
        <p>
          Eco Adventures Ltd.
          <br />
          Promoting sustainable travel since 1992
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Eco-Tourism Planning</a>
        <a className="link link-hover">Sustainable Travel Guides</a>
        <a className="link link-hover">Workshops & Events</a>
        <a className="link link-hover">Environmental Advocacy</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <Link to='/aboutUs' className="link link-hover">About Us</Link>
        <Link to='/contactUs' className="link link-hover">Contact Us</Link>
        <a className="link link-hover">Careers</a>
        <a className="link link-hover">Press Kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of Use</a>
        <a className="link link-hover">Privacy Policy</a>
        <a className="link link-hover">Cookie Policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
