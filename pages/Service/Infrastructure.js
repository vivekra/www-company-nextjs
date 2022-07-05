import React from 'react'
import Footer from '../../components/Home/Footer'
import Image from 'next/image'
import Header from '../../components/Home/Header'
import {Link} from 'next/link'
function Infrastructure() {
  return (
    <div>
          <Header/>
    <div className="banner d-flex align-items-center light-grey-bg">

        <nav className="breadcrumb-wrapper" aria-label="breadcrumb">
            <div className="container">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Infrastructure Management</li>
                </ol>
            </div>
        </nav>


        <div className="container">
            <div className="row no-gutters align-items-center">
                <div className="col-lg-6 text-center text-lg-left">
                    <h1>Cloud Computing - Azure, AWS and Google</h1>
                    <p className="larger-txt">DigitalQ differentiates in this space by not forcing the customer to a Cloud Service Provider
(CSP) and it is often referred as &apos;Vendor Lock-In&apos; but our Cloud Assessment Services (CAS)
team chose the right CSP trajectory by answering the right questions.</p>

                </div>

                <div className="col-lg-6">
                    <div className="img-container text-center text-lg-right">
                        <Image src="/assets/images/banner/cloud1.svg" alt="Infrastructure banner image" className="img-fluid" width={630} height={451}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
	
	   <section className="contact-us section-gap">
        <div className="container">
          
<h2 className="section-title">Infrastructure management outsourcing services
</h2>
<p>DigitalQ assumes responsibility for managing the customer&apos;s IT infrastructure. In some cases this involves transferring the ownership of the customer&apos;s IT and personnel assets to DigitalQ.</p>
<br/>
The relationships are usually based on long-term contracts and delivered on a fixed fee basis.
<br/> 
<b>Specialized Linux and Windows Support Teams</b>
<br/>Unlike other support firms where the same tech handles the Linux and Windows support issues, we have separate and dedicated teams for handling Linux and Windows servers./

<b>Improved Operational Service Level</b><br/>
Access to DigitalQ's recognized Quality processes and methodologies, and contracts based on clearly defined service levels
<br/>
<b>Improved User Satisfaction</b>
<br/>Our improvements on services, software functionality and quality ensure higher user satisfaction/

<b>Referral Program</b>
<p>Our existing clients can enjoy great discounts and offers by referring DigitalQ to more new clients.</p>

  <h3 className="section-title">How Organisation can engage our Cloud Assessment Services Team</h3>
            <p className="larger-txt">Organisations looking to either start their cloud- journeys on the right foot or realign their
current efforts to meet long-term business objectives should set up a free pre-assessment call
with an DigitalQ expert.<br/>We will use templates and questionnaires to guide you through every
step of the way, leading up to the start of a formal customized Assessment exercise. To
s/chedule a free pre-assessment, please write to us at cloudcas@digitalq.co.in</p>
<br/>
         
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
                        <h3>We'd love to talk about working together.</h3>
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
                                                <a><i className="fab fa-facebook-f"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="http://twitter.com/dqindia" target="_blank" rel="noopener noreferrer">
                                             <a><i className="fab fa-twitter"></i></a>   
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="http://youtube.com/digitalq" target="_blank" rel="noopener noreferrer ">
                                            <a><i className="fab fa-youtube"></i></a>   
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

export default Infrastructure