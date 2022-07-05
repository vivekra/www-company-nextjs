import React from 'react'
import Link from 'next/link'

function Termsndcondition() {
  return (
    <div>
    
	   <section className="contact-us section-gap">
        <div className="container">
            <h2 className="section-title">Terms And Conditions</h2>
            <p className="larger-txt">
The material contained in this web site is copyrighted and owned by DigitalQ, together with any other intellectual property rights in such material, unless otherwise indicated. All rights reserved.
<br></br>
All content present on this site is the exclusive property of DigitalQ. The software, text, images, graphics, video and audio used on this site belong to DigitalQ. No material from this site may be copied, modified, reproduced, republished, uploaded, transmitted, posted or distributed in any form without prior written permission from DigitalQ. All rights not expressly granted herein are reserved. Unauthorized use of the materials appearing on this site may violate copyright, trademark and other applicable laws, and could result in criminal or civil penalties.
<br></br>
<b>Terms of Use</b><br></br>
1. The following terms and conditions will be deemed to have been accepted by the User on usage of the website http://www.dqserv.com/. You are requested to read them carefully before you use the services of this site.
<br></br>
2. By using the Site, you agree to follow and be bound by the following terms and conditions concerning your use of the Site. DigitalQ may revise the Terms of Use at any time without notice to you. Areas of the Site may have different terms of use posted. If there is a conflict between the Terms of Use and terms of use posted for a specific area of the Site, the latter shall have precedence with respect to your use of that area of the Site.
<br></br>
3. DigitalQ may terminate User&apos;s access at any time for any reason. The provisions regarding to disclaimer of warranty, accuracy of information and indemnification shall survive such termination. DigitalQ may monitor access to the Site.
<br></br>
4. DigitalQ shall have no responsibility for any damage to User&apos;s computer system or loss of data that result from the download of any content, materials, information from the Site.
<br></br>
5. DigitalQ may change or discontinue any aspect of its website at any time, including, its content or features. DigitalQ reserves the right to change the terms and conditions applicable to use of the Site. Such changes shall be effective immediately upon notice, which shall be placed on the Site.
<br></br>
6. In no event will Digtial-Q be liable for damages of any kind, including without limitation, direct, incidental or consequential damages (including, but not limited to, damages for lost profits, business interruption and loss of programs or information) arising out of the use of or inability to use DigitalQ&apos;s website, or any information provided on the website, or any claim attributable to errors, omissions or other inaccuracies or interpretations thereof. Some jurisdictions do not allow the limitation or exclusion of liability. Accordingly, some of the above limitations may not apply to the User.</p>
            <div className="quote-form-wrapper contact-form-wrapper text-center grid-wrapper">
              
                   
                
            </div>
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
   
    </div>
  )
}

export default Termsndcondition