import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function Footer() {
  return (
    
    <footer className="page-footer dark-footer-bg">
    <div className="container">
        <div className="row">
            <div className="col-lg-4">
                <div className="footer-widget widget-about">
                
                 <Link href="/index"><Image className="footer-logo" src="/assets/images/dq-logo-bottom.svg" alt="footer logo"
                   width={213} height={120}/></Link>
                <p>Thanks for visiting us. our services will promote your brand, business and our products, tools will enchance your 
                    growth in your business domain.</p>
                   
                    <ul className="social-icons">
                        <li>
                            <Link href="http://www.facebook.com/dqindia" target="_blank"  rel="noopener noreferrer">
                                <i className="fab fa-facebook-f"></i>
                            </Link>
                        </li>
                        <li>
                            <Link href="http://twitter.com/dqindia" target="_blank"  rel="noopener noreferrer">
                                <i className="fab fa-twitter"></i>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://ca.linkedin.com/company/digitalq-information-services-pvt-ltd" target="_blank"  rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.instagram.com/dq.india" target="_blank"  rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </Link>
                        </li>
                    </ul>
                    
                </div>
                
            </div>
            

            <div className="col-lg-3">
                <div className="footer-widget">
                    <h5 className="footer-nav-title">Services</h5>
                    <ul className="footer-nav dynamic-nav">
                        <li><Link href="/Services/Cloudservices"><a>Cloud Services</a></Link></li>
                        
                        <li><Link href="/Services/Infrastructure"><a>Infrastructure management</a></Link></li>
                        <li><Link href="/Services/Application"><a>Application Management</a></Link></li>
                        
                        <li><Link href="//Services/Security"><a>Security Audit</a></Link></li>
                        <li><Link href="/Services/Socialmedia"><a>Social Media Marketing</a></Link></li>
                    </ul>
                </div>
            </div>

            <div className="col-lg-3">
                <div className="footer-widget">
                    <h5 className="footer-nav-title">Support</h5>
                    <ul className="footer-nav dynamic-nav">
                         <li><Link href="/About"><a>About us</a></Link></li>
                        <li><Link href="/Contact"><a>Contact</a></Link></li>
                        <li><Link href="/Support/Privacypolicy"><a>Privacy Policy</a></Link></li>
                        <li><Link href="/Support/Termsndcondition"><a>Terms &amp; Conditions</a></Link></li>
            <li><Link href="/Support/Refund"><a>Refund &amp; Cancellation Policy</a></Link></li>

                    </ul>
                </div>
            </div>

            <div className="col-lg-2">
                <div className="footer-widget">
                    <h5 className="footer-nav-title">Solutions</h5>
                    <ul className="footer-nav dynamic-nav">
                        <li><Link href="staffing-solutions"><a>Staffing Solutions</a></Link></li>
                        
                        <li><Link href="Solutions/opensource"><a>Open Source Solution</a></Link></li>
                       
                        <li><Link href="https://dqserv.com"><a>Restaurant POS</a></Link></li>
                        
                        <li><Link href="https://dqserv.com"><a>Customer Issue Tracking System</a></Link></li>
                        
                        <li><Link href="https://dqserv.com"><a>Lead Management System</a></Link></li>
                       
                    </ul>
                </div>
            </div>
        </div>
                    <p className="copywrite-txt text-center" >© 2020 <Link href="https://digitalq.co.in"><a>DigitalQ Information Services Pvt Ltd</a></Link>. All Rights
                        Reserved.</p>
    </div>
</footer>
  )
}

export default Footer