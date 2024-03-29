import React from 'react'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/image/logo.png'

const Footer = () => {
    return ( 
        <div>
            <div className="footer">
                <div className="row footer-header">
                    <div className="col-md-6 col-sm-12 col-xl-3 footer-address">
                        <p className="footer-text-wrapper">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                        <p className="footer-text-wrapper">binarcarrental@gmail.com</p>
                        <p className="footer-text-wrapper">081-233-334-808</p>
                    </div>
                    <div className="col-md-6 col-sm-12 col-xl-3 footer-nav">
                        <a className="footer-text-wrapper-2" href="/#Services" >Our services</a>
                        <a className="footer-text-wrapper-2" href="/#WhyUs" >Why Us</a>
                        <a className="footer-text-wrapper-2" href="/#Testimonial" >Testimonial</a>
                        <a className="footer-text-wrapper-2" href="/#FAQ" >FAQ</a>
                    </div>
                    <div className="col-md-6 col-sm-12 col-xl-3 footer-coonect">
                        <p className="text-wrapper">Connect with us</p>
                    <div className="list-item">
                        <a href="#"><i className="bi bi-facebook footer-icon"></i></a>
                        <a href="https://www.instagram.com/kakaa_genzz/"><i className="bi bi-instagram footer-icon"></i></a>
                        <a href="#"><i className="bi bi-twitter footer-icon"></i></a>
                        <a href="#"><i className="bi bi-envelope footer-icon"></i></a>
                        <a href="#"><i className="bi bi-twitch footer-icon"></i></a>
                    </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-xl-3 copyright">
                        <p className="footer-text-wrapper">Copyright Binar 2022</p>
                        <img src={logo} className='footer-logo' alt="binar-logo" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;