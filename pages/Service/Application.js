import React from 'react'
import Image from 'next/image'
import Header from '../../components/Home/Header'
import Link from 'next/link'
function Application() {
  return (
    <div>
    <Header />
    <div className="banner d-flex align-items-center light-grey-bg">

        <nav className="breadcrumb-wrapper" aria-label="breadcrumb">
            <div className="container">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Application Management</li>
                </ol>
            </div>
        </nav>


        <div className="container">
            <div className="row no-gutters align-items-center">
                <div className="col-lg-6 text-center text-lg-left">
                    <h1>Application Management Outsourcing Services</h1>
                    <p className="larger-txt">DigitalQ provides a comprehensive framework of principles that govern development and maintenance of its customer&apos;s applications in order to seamlessly support their business needs, improve overall efficiency, reduce recurring costs and ensure constant technology upgrades while integrating with changes in business demands.
</p>

                </div>

                <div className="col-lg-6">
                    <div className="img-container text-center text-lg-right">
                        <Image src="/assets/images/banner/app3.svg" alt="application banner image" className="img-fluid" width={630} height={475}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
	
	   <section className="contact-us section-gap">
        <div className="container">
            <h2 className="section-title">Activities in Application lifecycle</h2>
            <p className="larger-txt">Unique Benefits Outsourcing IT application management allows enterprises to focus on their core business, offering benefits across the business spectrum.</p>

<br/>
<p>Application management encompasses quite a few activities in the application&apos;s lifecycle:</p>
<br/>
<b>Code maintenance</b>
<br/>
<p>Minor enhancements and code stabilization (the formal term for bug-fixing) are a critical part of managing an application post-release</p>
<br/>
<b>Migrations</b>
<br/>
<p>Changing market conditions, or in-house policy changes, often necessitate the migration of applications to different platforms, migrate the databases (along with the data) to different databases, change user interfaces, etc.</p>
<br/>
<b>Re-engineering</b>
<br/>
<p>Sometimes, mere code enhancements or platform migrations do not provide the answer to changing the way an application needs to behave to suit the changing needs of its users. A className=cal example is the trend towards Web - based models from desktop-based models for applications - a trend that was important enough for Microsoft to develop the .NET platform. Moving towards a Web-based model does not just mean a technology migration or increased security features, but a sea change in the business logic of the application.</p>
<br/>
<p>Our application development and management services are designed for accelerated time-to-market and reduced costs. Our offshore center in India has talented software and domain professionals with good understanding of business processes.</p>        
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

export default Application;