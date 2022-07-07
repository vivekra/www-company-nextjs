import React from 'react'
import Link from 'next/link'
import Header from '../../components/Home/Header'
import Footer from '../../components/Home/Footer'
function Privacypolicy() {
  return (
    <div>
  
      <Header/>

	   <section className="contact-us section-gap">
        <div className="container">
            <h2 className="section-title">Privacy Policy</h2>
            <p className="larger-txt">

<b>Information Collection</b>
<br></br>
DigitalQ uses cookies, IP addresses, and browser information. This information provides us with insight into how effective certain areas of our Web site are to users and how we might improve it.
<br></br>
DigitalQ collects the information you provide when you send us e-mail and when you register.
<br></br>
<b>Sharing Collected Information</b>
<br></br>
DigitalQ shares information with our partners ONLY for the sole purpose of better supporting our current and future customers.
<br></br>
<b>Third-Party Sites</b>
<br></br>
Please be aware that other Web sites that may be accessed through our site may collect personally identifiable information about you. DigitalQ does not share your personal information with those Web sites and is not responsible for their privacy practices. Please check the applicable Privacy Policy of those sites.
<br></br>
<b>Security</b>
<br></br>
No site can guarantee that data transmission over the Internet is 100% secure. However, this Web site has security measures in place to protect against the loss, misuse and alteration of the information under our control.
<br></br>
<b>Our Consent to this Privacy Policy</b>
<br></br>
By using this Web site, you agree to this Privacy Policy. This Policy appears in its completed form and supersedes any earlier version. This Privacy Policy is subject to change without notice; updates to our Privacy Policy will be posted here. This Privacy Policy is effective January 1, 2008.
<br></br>
<b>Questions or Suggestions</b>
<br></br>
If you have questions or suggestions concerning our privacy policy, please contact us.</p>
        </div>
    </section>

  
    <div className="modal fade full-width-modal quote-modal" id="quote-modal" tabIndex="-1" role="dialog"
        aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content white-bg">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <i className="fas fa-times"></i>
                    </button>
                </div>

                <div className="modal-body d-flex align-items-center justify-content-center text-center">
                    <div className="quote-form-wrapper text-center">
                        <h3>We&apos;d love to talk about working together.</h3>
                        <form method="POST" className="quote-form text-center row" action="contact.php#">
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
                                <input type="text" name="linked_url" placeholder="LinkedIn URL"/>
                            </div>
                            <div className="col-lg-12">
                                <textarea placeholder="Message" name="message"></textarea>
                                <button type="submit" className="custom-btn secondary-btn w-100">Submit</button>
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
                                            <Link href="http://youtube.com/digitalq" target="_blank" rel="noopener noreferrer">
                                                <i className="fab fa-youtube"></i>
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
 


	    <Footer/>
   

    </div>
  )
}

export default Privacypolicy