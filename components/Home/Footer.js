import React from 'react'
import Image from 'next/image'
function Footer() {
  return (
    <footer className="page-footer dark-footer-bg">
    <div className="container">
        <div className="row">
            <div className="col-lg-4">
                <div className="footer-widget widget-about">
                
                 <a href="/index"><Image className="footer-logo" src="/assets/images/dq-logo-bottom.svg" alt="footer logo"
                   width={213} height={120}/></a>
                <p>Thanks for visiting us. our services will promote your brand, business and our products, tools will enchance your 
                    growth in your business domain.</p>
                   
                    <ul className="social-icons">
                        <li>
                            <a href="http://www.facebook.com/dqindia" target="_blank"  rel="noopener noreferrer">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a href="http://twitter.com/dqindia" target="_blank"  rel="noopener noreferrer">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://ca.linkedin.com/company/digitalq-information-services-pvt-ltd" target="_blank"  rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/dq.india" target="_blank"  rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li>
                    </ul>
                    
                </div>
                
            </div>
            

            <div className="col-lg-3">
                <div className="footer-widget">
                    <h5 className="footer-nav-title">Services</h5>
                    <ul className="footer-nav dynamic-nav">
                        <li><a href="/Service/Cloudservices">Cloud Services</a></li>
                        <li><a href="/Service/Infrastructure">Infrastructure Management</a></li>
                        <li><a href="/Service/Application">Application Management</a></li>
                        
                        <li><a href="//Service/Security">Security Audit</a></li>
                        <li><a href="/Service/Socialmedia">Social Media Marketing</a></li>
                    </ul>
                </div>
            </div>

            <div className="col-lg-3">
                <div className="footer-widget">
                    <h5 className="footer-nav-title">Support</h5>
                    <ul className="footer-nav dynamic-nav">
                         <li><a href="/About">About us</a></li>
                        <li><a href="/Contact">Contact</a></li>
                        <li><a href="/Support/Privacypolicy">Privacy Policy</a></li>
                        <li><a href="/Support/Termsndcondition">Terms &amp; Conditions</a></li>
            <li><a href="/Support/Refund">Refund &amp; Cancellation Policy</a></li>

                    </ul>
                </div>
            </div>

            <div className="col-lg-2">
                <div className="footer-widget">
                    <h5 className="footer-nav-title">Solutions</h5>
                    <ul className="footer-nav dynamic-nav">
                        <li><a href="staffing-solutions.php">Staffing Solutions</a></li>
                        <li><a href="opensource.php">Open Source Solution</a></li>
                       
                        <li><a href="https://dqserv.com">Restaurant POS</a></li>
                        <li><a href="https://dqserv.com">Customer Issue Tracking System</a></li>
                        <li><a href="https://dqserv.com">Lead Management System</a></li>
                       
                    </ul>
                </div>
            </div>
        </div>
                    <p className="copywrite-txt text-center" >© 2020 <a href="https://digitalq.co.in">DigitalQ Information Services Pvt Ltd</a>. All Rights
                        Reserved.</p>
    </div>
</footer>
  )
}

export default Footer