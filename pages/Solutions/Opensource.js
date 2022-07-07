import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Footer from '../../components/Home/Footer'
import Header from '../../components/Home/Header'

function Opensource() {
  return (
    <div>
            <Header></Header>
    <div className="banner d-flex align-items-center light-grey-bg">

        <nav className="breadcrumb-wrapper" aria-label="breadcrumb">
            <div className="container">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Open Source</li>
                </ol>
            </div>
        </nav>


        <div className="container">
            <div className="row no-gutters align-items-center">
                <div className="col-lg-6 text-center text-lg-left">
                    <h1>Business Intelligence Solutions</h1>
                    <p className="larger-txt">We improve the quality and speed of your internal reporting and operational decision-making by creating solutions that ensure a unified view of the data and processes in your organization. We work with a Open Source Solutions thereby providing high ROI with robust solutions.</p>

                </div>

                <div className="col-lg-6">
                    <div className="img-container text-center text-lg-right">
                        <Image src="/assets/images/banner/opensource.svg" alt="Opensource banner image" className="img-fluid" width={535} height={311}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
	
	   <section className="contact-us section-gap">
        <div className="container">
            <h2 className="section-title">e-Business solutions</h2>
            <p className="larger-txt">e-Business solutions
DigitalQ&apos;s e-business solutions enable organizations to reduce time to market, get closer to customers and achieve long-term, profitable growth. We can help you to become web connected by providing solutions like
<br/>
<br/>Internet strategy development
<br/>Web enablement of legacy applications
<br/>e-Business development
<br/>Internet and Intranet solutions
<br/>Portal solutions
 <br/>
<br/>
<b>Custom application development</b><br/>
At DigitalQ, we use technology to create powerful solutions that are focused on such critical areas as enhancing customer relations and increasing revenue opportunities. Our software is designed to take advantage of the interactive networking and document interfacing technologies of the future and to ensure a dramatic reduction in your cost of application maintenance and enhancement.</p>
<br/>
We have a track record delivering
<br/>
<br/>Goal driven
<br/>On-time and on-budget
<br/>Perfect fit
<br/>High volume capable
<br/>Truly scalable
<br/>Market leading feature list
<br/>E-marketing / SEO friendly
    
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
                        <form method="POST" className="quote-form text-center row" action="#">
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
                                            <Link href="http://www.facebook.com/dqindia" target="_blank" rel="noopener">
                                                <i className="fab fa-facebook-f"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="http://twitter.com/dqindia" target="_blank" rel="noopener">
                                                <i className="fab fa-twitter"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="http://youtube.com/digitalq" target="_blank" rel="noopener">
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

export default Opensource