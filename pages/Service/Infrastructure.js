import React from 'react'
import Footer from '../../components/Home/Footer'

function Infrastructure() {
  return (
    <div>
     
    <div class="banner d-flex align-items-center light-grey-bg">

        <nav class="breadcrumb-wrapper" aria-label="breadcrumb">
            <div class="container">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.php">Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Infrastructure Management</li>
                </ol>
            </div>
        </nav>


        <div class="container">
            <div class="row no-gutters align-items-center">
                <div class="col-lg-6 text-center text-lg-left">
                    <h1>Cloud Computing – Azure, AWS and Google</h1>
                    <p class="larger-txt">DigitalQ differentiates in this space by not forcing the customer to a Cloud Service Provider
(CSP) and it is often referred as ‘Vendor Lock-In’ but our Cloud Assessment Services (CAS)
team chose the right CSP trajectory by answering the right questions.</p>

                </div>

                <div class="col-lg-6">
                    <div class="img-container text-center text-lg-right">
                        <img src="assets/images/banner/cloud1.svg" alt="Infrastructure banner image" class="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
	
	   <section class="contact-us section-gap">
        <div class="container">
          
<h2 class="section-title">Infrastructure management outsourcing services
</h2>
<p>DigitalQ assumes responsibility for managing the customer's IT infrastructure. In some cases this involves transferring the ownership of the customer's IT and personnel assets to DigitalQ.</p>
<br></br>
The relationships are usually based on long-term contracts and delivered on a fixed fee basis.
<br></br> 
<b>Specialized Linux and Windows Support Teams</b>
<br>Unlike other support firms where the same tech handles the Linux and Windows support issues, we have separate and dedicated teams for handling Linux and Windows servers.
</br>
<b>Improved Operational Service Level</b><br>
Access to DigitalQ's recognized Quality processes and methodologies, and contracts based on clearly defined service levels
</br>
<b>Improved User Satisfaction</b>
<br>Our improvements on services, software functionality and quality ensure higher user satisfaction
</br>
<b>Referral Program</b>
<p>Our existing clients can enjoy great discounts and offers by referring DigitalQ to more new clients.</p>

  <h3 class="section-title">How Organisation can engage our Cloud Assessment Services Team</h3>
            <p class="larger-txt">Organisations looking to either start their cloud- journeys on the right foot or realign their
current efforts to meet long-term business objectives should set up a free pre-assessment call
with an DigitalQ expert.<br/>We will use templates and questionnaires to guide you through every
step of the way, leading up to the start of a formal customized Assessment exercise. To
s/chedule a free pre-assessment, please write to us at cloudcas@digitalq.co.in</p>
<br/>
         
        </div>
    </section>

  
    <div class="modal fade full-width-modal quote-modal" id="quote-modal" tabindex="-1" role="dialog"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content white-bg">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <i class="fas fa-times"></i>
                    </button>
                </div>

                <div class="modal-body d-flex align-items-center justify-content-center text-center">
                    <div class="quote-form-wrapper text-center">
                        <h3>We’d love to talk about working together.</h3>
                        <form method="POST" class="quote-form text-center row" action="contact.php#">
                            <div class="col-lg-6">
                                <input type="text" name="fname" placeholder="Name"/>
                            </div>
                            <div class="col-lg-6">
                                <input type="text" name="email" placeholder="Email"/>
                            </div>

                            <div class="col-lg-6">
                                <input type="text" name="phone" placeholder="Phone"/>
                            </div>
                            <div class="col-lg-6">
                                <input type="text" name="linked_url" placeholder="LinkedIn URL"/>
                            </div>
                            <div class="col-lg-12">
                                <textarea placeholder="Message" name="message"></textarea>
                                <button type="submit" class="custom-btn secondary-btn w-100">Submit</button>
                                <div class="social-icons-wrapper d-flex justify-content-center">
                                    <p>Follow us:</p>
                                    <ul class="social-icons">
                                        <li>
                                            <a href="http://www.facebook.com/dqindia" target="_blank" rel="noopener">
                                                <i class="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="http://twitter.com/dqindia" target="_blank" rel="noopener">
                                                <i class="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="http://youtube.com/digitalq" target="_blank" rel="noopener">
                                                <i class="fab fa-youtube"></i>
                                            </a>
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
    
   <Footer></Footer>
    </div>
  )
}

export default Infrastructure