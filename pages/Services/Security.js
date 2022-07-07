import React from 'react'
import Image from 'next/image'
import Header from '../../components/Home/Header'
import Link from 'next/link'
import Footer from '../../components/Home/Footer'
function Security() {
  return (
    <div>
       <Header/>
    <div className="banner d-flex align-items-center light-grey-bg">

        <nav className="breadcrumb-wrapper" aria-label="breadcrumb">
            <div className="container">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Security Audits</li>
                </ol>
            </div>
        </nav>


        <div className="container">
            <div className="row no-gutters align-items-center">
                <div className="col-lg-6 text-center text-lg-left">
                    <h1>Security Audits
</h1>
                    <p className="larger-txt">As part of our system administration services we offer ongoing security audits at a low monthly fee. We receive alerts from bugtraq and other security lists and match these alerts against a list of installed software for each server that we audit. When we find an alert that matches, we evaluate the need for upgrading the software and notify you of the risks involved. We can also perform automatic scans to verify open ports and to find weak passwords.</p>

                </div>

                <div className="col-lg-6">
                    <div className="img-container text-center text-lg-right">
                        <Image src="/assets/images/banner/security.svg" alt="Security banner image" className="img-fluid" width={630} height={475}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
	
	   <section className="contact-us section-gap">
        <div className="container">
            <h2 className="section-title">Network Vulnerability Services</h2>
            <p className="larger-txt">Network Security Auditing is the first step in truly securing a computer or network environment. The purpose of a network security audit is to ensure that a company has followed the necessary steps to protect data and to track access for accountability.</p>
<br/>

Security audits involve a set of periodic, pro-active compliance and assurance activities that help assess the security of the IT infrastructure of your organization. The audit encompasses security architecture, policy and vulnerability assessment.
<br/>
Our network security audits are performed on entire networks by ethical hackers known as white hat hackers to assess potential network vulnerabilities. Audits may also be performed on a portion of the computer network Using DigitalQ&apos;s ethical hacking team can simulate an attack without interrupting crucial network services that will not only test the network but also staff awareness and response based on the assessment. DigitalQ will create a detailed a report of vulnerabilities and proposed best practices for your network environment.
<br/>
To supplement the network security audit DigitalQ will review and /or draft computer guidelines, policies and procedures. The establishment of clear policies and procedures will help protect the company by advising employees of expected conduct with respect to proprietary information and use of company equipment.</div>
           
       
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

export default Security;
