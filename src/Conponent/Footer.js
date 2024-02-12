import React from 'react';
import { Link } from 'react-router-dom';
import '../Styled/Footer.css';
import { FaFacebookF, FaInstagramSquare, FaLinkedinIn, FaSnapchatGhost, FaTwitter} from 'react-icons/fa';

export const Footer = () => {
  return (
    <>
      <div className='footer-container'>
        <div className='Footerlink-container-1'>
          <div className='footerLink-Box-1'>
            <div className='Footer-Header'>
              Force Web Tech
            </div>
            <br />
            <ul className='foot-list-1'>
              <li><Link to="" className='link-item'>info@forcewebtech.com</Link></li>
              <br />
              <li>
                <Link to="" className='link-item'>
                  ForceWebTech<br />
                  WTT (World Trade Tower)<br />
                  A-1010 Off, Sarkhej - Gandhinagar Hwy<br />
                  Makarba, Ahmedabad<br />
                  Gujarat 380051 India
                </Link>
              </li>
            </ul>
          </div>
          <div className='footerLink-Box-2'>
            <div className='Footer-Header'>
              Company
            </div>
            <br />
            <ul className='foot-list-2'>
              <li><Link to="/Service" className='link-item'>Services</Link></li>
              <li><Link to="/AboutUS" className='link-item'>About Us</Link></li>
              <li><Link to="/Blog" className='link-item'>Blog</Link></li>
              <li><Link to="/Testimonials" className='link-item'>Client Testimonials</Link></li>
              <li><Link to="/Product" className='link-item'>Product</Link></li>
              <li><Link to="/ContactUs" className='link-item'>Contact Us</Link></li>
            </ul>
          </div>
          <div className='footerLink-Box-3'>
            <div className='Footer-Header'>
              Have Questions?
            </div>
            <br />
            <ul className='foot-list-3'>
              <li><Link to="" className='link-item'>+91 9104082699</Link></li>
            </ul>
            <div className='Footer-Header'>
              Follow Us:
            </div>
            <div className='media-container'>
                    <ul className='media-list'>
                        <li><Link to="" className='link-Socail'><FaLinkedinIn /></Link></li>
                        <li><Link to="" className='link-Socail'><FaSnapchatGhost /></Link></li>
                        <li><Link to="" className='link-Socail'><FaFacebookF /></Link></li>
                        <li><Link to="" className='link-Socail'><FaInstagramSquare /></Link></li>
                        <li><Link to="" className='link-Socail'><FaTwitter /></Link></li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
      <div className='Footerlink-container-2'>
        <div>
          <span>Copyright © 2021 ForceWeb Tech. All Rights Reserved</span>
        </div>
      </div>
    </>
  );
}
