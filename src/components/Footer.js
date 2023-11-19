import React from 'react';
import './Footer.css';
import { FaInstagram, FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-address'>
                Vijayaragavan | 187 South Street, Arivalur | Mayiladuthurai, Tamil nadu, 609401
            </div>
            <div className='footer-contact'>
                Phone: +91 995-283-6477 | Email: iamvijayragav@gmail.com
            </div>
            <div className='footer-icons'>
                <a href='https://www.instagram.com/iam_vijay_ragav/' target='_blank' rel='noopener noreferrer'>
                    <FaInstagram />
                </a>
                <a href='https://www.linkedin.com/in/vijayaragavan-b-374736191' target='_blank' rel='noopener noreferrer'>
                    <FaLinkedin />
                </a>
                <a href='https://www.facebook.com/daan.vijay.3' target='_blank' rel='noopener noreferrer'>
                    <FaFacebook />
                </a>
                <a href='https://github.com/iamvijayragav' target='_blank' rel='noopener noreferrer'>
                    <FaGithub />
                </a>
            </div>
        </div>
    );
};

export default Footer;
