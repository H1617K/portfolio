import React from 'react';
import { Link } from 'react-router-dom';
import '../Styled/Navbar.css';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <Link className="navbar-brand" to="Service"></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Services</Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="Product">Products</Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="Slider">Slider</Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="Blog">Blogs</Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="Testimonials">Client Testimonials</Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="FAQ">FAQs</Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="AboutUS">About Us</Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="ContactUs">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
