import React from 'react'

function Footer() {
  return (
    <div>
    <footer className="page-footer ">
       
            <div className="row">
                
                    <div className="">
					
                   <div className='fcontent-1'>
                   <a href="index.php"><img className="footer-logo" src="assets/images/dq-logo-bottom.svg" alt="footer logo"
                            height="16"/></a>
                    <p>Thanks for visiting us. our services will promote <br></br>your brand, business and our products, tools will <br></br> enchance your 
                        growth in your business domain.</p>
                   </div>
                       
                        <ul className="social-icons">
                            <li>
                                <a href="http://www.facebook.com/dqindia" target="_blank" rel="noopener">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li>
                                <a href="http://twitter.com/dqindia" target="_blank" rel="noopener">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://ca.linkedin.com/company/digitalq-information-services-pvt-ltd" target="_blank" rel="noopener">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/dq.india" target="_blank" rel="noopener">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                        </ul>
                        
                    </div>
					
             
				

                
                    <div className="footer-widget">
                        <h5 className="footer-nav-title">Services</h5>
                        <ul className="footer-nav dynamic-nav">
							<li><a href="cloud-services.php">Cloud Services</a></li>
							<li><a href="infrastructure-management.php">Infrastructure Management</a></li>
							<li><a href="application-management.php">Application Management</a></li>
							
							<li><a href="security-audit.php">Security Audit</a></li>
							<li><a href="internet-marketing.php">Social Media Marketing</a></li>
                        </ul>
                    </div>
               

              
                    <div className="footer-widget">
                        <h5 className="footer-nav-title">Support</h5>
                        <ul className="footer-nav dynamic-nav">
							 <li><a href="about-overview.php">About us</a></li>
                            <li><a href="contact.php">Contact</a></li>
                            <li><a href="privacy.php">Privacy Policy</a></li>
                            <li><a href="terms.php">Terms &amp; Conditions</a></li>
			    <li><a href="refund-policy.php">Refund &amp; Cancellation Policy</a></li>

                        </ul>
                    </div>
              

               
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
                        <p className="copywrite-txt text-center" >© 2020 <a href="https://digitalq.co.in">DigitalQ Information Services Pvt Ltd</a>. All Rights
                            Reserved.</p>
       
    </footer>

   
    </div>
  )
}

export default Footer;