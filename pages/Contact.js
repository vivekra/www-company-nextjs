import React from 'react'
import Location from '../components/Home/Location'
import Image from 'next/image'
import Header from '../components/Home/Header'
import Footer from '../components/Home/Footer'
import Link from 'next/link'

function Contact() {
  return (
    <div>
      <Header/>
<div className="banner d-flex align-items-center light-grey-bg">
    
    <nav className="breadcrumb-wrapper" aria-label="breadcrumb">
        <div className="container">
            <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link href="/">Home</Link></li>

                <li className="breadcrumb-item active" aria-current="page">Contact</li>
            </ol>
        </div>
    </nav>
    

    <div className="container">
        <div className="row no-gutters align-items-center">
            <div className="col-lg-6 text-center text-lg-left">
                <h1>Contact</h1>
                <p className="larger-txt">Learn how we helped our several clients grow in online <br/>business.It will give you an idea of our capabilities.</p>
                
            </div>

            <div className="col-lg-6">
                <div className="img-container text-center text-lg-right">
                    <Image src="/assets/images/banner/contact3.svg" alt="Contact banner image" className="img-fluid" width={630} height={330}/>
                </div>
            </div>
        </div>
    </div>
</div>


<section className="contact-us section-gap"> 
    <div className="container">
        <h2 className="section-title text-center">Contact Us</h2>
        <p className="larger-txt text-center">Thank you for visiting our web site.
Your feedback is important to us in order to provide the very best service possible.</p>
		 {/* <div className='success-msg larger-txt' style="text-align:center;"></div> */}
				{/* <div className='err-msg larger-txt' style="text-align:center;"></div> */}
        <div className="quote-form-wrapper contact-form-wrapper text-center grid-wrapper">
            <form method="POST" className="contact-form text-center row" id="contactForm" name="contactForm" action="assets/email/email.php">
				
		
                <div className="col-lg-6">
                    <input type="text" name="fname" placeholder="Name"/>
                </div>
                <div className="col-lg-6">
                    <input type="text" name="email" placeholder="Email"/>
                </div>

                <div className="col-lg-6">
                    <input type="text" name="phone" placeholder="Phone"/>
                </div>
                <div className="col-lg-6">
                    <input type="text" name="subject" placeholder="Subject"/>
                </div>
                <div className="col-lg-12">
                    <textarea placeholder="Message" name="message"></textarea>
		    <button type="submit" className="custom-btn secondary-btn" id="contact_us">Contact Us</button>
		    
                    <div className="social-icons-wrapper d-flex justify-content-center">
                        <p>Follow us:</p>
                        <ul className="social-icons">
                             <li>
                                <Link href="http://www.facebook.com/dqindia" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook-f"></i>
                                </Link>
                            </li>
                            <li>
                                <Link href="http://twitter.com/dqindia" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-twitter"></i>
                                </Link>
                            </li>
                            <li>
                                <Link href="https://ca.linkedin.com/company/digitalq-information-services-pvt-ltd" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin"></i>
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.instagram.com/dq.india" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram"></i>
                                </Link>
                            </li>
                        </ul> 
                    </div> 
                </div> 
            </form> 
        </div> 
    </div> 
</section> 


<Location />

 <div className="modal fade full-width-modal quote-modal" id="quote-modal" tabIndex="-1" role="dialog" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content white-bg">
            <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <i className="fas fa-times"></i>
                </button>
             </div> 

            <div className="modal-body d-flex align-items-center justify-content-center text-center">
                <div className="quote-form-wrapper text-center">
                    <h3>Get a Free Quote</h3>
                    <form method="POST" className="quote-form text-center row" action="#">
                        <div className="col-lg-6">
                            <input type="text" name="fname" id="fname" placeholder="Name"/>
                        </div>
                        <div className="col-lg-6">
                            <input type="text" name="email" placeholder="Email"/>
                        </div>

                        <div className="col-lg-6">
                            <input type="text" name="phone" placeholder="Phone"/>
                        </div>
                        <div className="col-lg-6">
                            <input type="text" name="website" placeholder="Website"/>
                        </div>
                        <div className="col-lg-12">
                            <textarea placeholder="Message" name="message"></textarea>
                            <button type="submit" className="custom-btn secondary-btn w-100">GET A QUOTE</button>
                            <div className="social-icons-wrapper d-flex justify-content-center">
                                <p>Follow us:</p>
                                <ul className="social-icons">
                                    <li>
                                <Link href="http://www.facebook.com/dqindia" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook-f"></i>
                                </Link>
                            </li>
                            <li>
                                <Link href="http://twitter.com/dqindia" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-twitter"></i>
                                </Link>
                            </li>
                            <li>
                                <Link href="https://ca.linkedin.com/company/digitalq-information-services-pvt-ltd" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin"></i>
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.instagram.com/dq.india" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram"></i>
                                </Link>
                            </li>
                                </ul>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

   

<Footer />
    </div>
  )
}

export default Contact;