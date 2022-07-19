import React from 'react'
import Footer from '../components/Home/Footer'
import Image from 'next/image'
import Header from '../components/Home/Header'
import Link from 'next/link'
function About() {
  return (
    <div>
  <Header/>

    <div className="banner d-flex align-items-center light-grey-bg">

        <nav className="breadcrumb-wrapper" aria-label="breadcrumb">
            <div className="container">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">About Us</li>
                </ol>
            </div>
        </nav>


        <div className="container">
            <div className="row no-gutters align-items-center">
                <div className="col-lg-6 text-center text-lg-left">
                    <h1>About Us</h1>
                    <p className="larger-txt">Learn how we helped our several clients grow in online <br/>business.It will
                        give you an idea of our capabilities.</p>

                </div>

                <div className="col-lg-6">
                    <div className="img-container text-center text-lg-right">
                        <Image src="/assets/images/banner/about.svg" alt="about banner image" className="img-fluid" width={450} height={316}/>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <section className="features section-gap" id="cynic-about" data-scroll-offset="165">
        <div className="container">


            <div className="features-grid">
                <div className="row align-items-center">
                    <div className="col-lg-6 text-center text-lg-left">
                        <div className="img-container">
                            <Image src="/assets/images/banner/about9.svg" alt="why choose us" className="img-fluid" width={630} height={442}/>

                        </div>
                    </div>

                    <div className="col-lg-5 offset-lg-1">
                        <div className="features-content">
                            <h2 className="section-title">Reasons for choosing us</h2>
                            <p>The Right Technology At The Right Time<br />
We believe in using the right technology for the problems at hand. Because technology advances so rapidly, keeping an open mind is critical. What was the right solution yesterday may have already been replaced by a better one today, and you have to be willing to adapt.

No single individual can be an expert in every possible technology, or have experience in every area. We make sure that we have professionals available from across the technology spectrum, so we can rely on answers that come from experience.</p>





                        </div>
                    </div>
                </div>
            </div>

            <div className="features-grid">
                <div className="row align-items-center">
                    <div className="col-lg-6 order-lg-2 offset-lg-1 text-center text-lg-right">
                        <div className="img-container">
                            <Image src="/assets/images/banner/about2.svg" alt="why choose us" className="img-fluid" width={630} height={442}/>

                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="features-content">
                            <h2 className="section-title">How we do it?</h2>
                            <p>First, we get a feel for what your goals are and how your product will work; we can&apos;t help you out of the muck until everyone knows what needs to be done. Then, we cover all the bases by starting at the bottom of the infrastructure and working our way up.

Work on the Cloud or Corporate Infrastructure, making sure you have all the basic services you need to be successful. (Things like Email, Source Control, Identity Management, File Sharing, Bug Tracking and Collaboration tools.)
 

Design your Production Infrastructure. This covers things like selecting an Operating System, creating a Build System, implementing Configuration Management and automating your application Deployment.
 

Provide Support and Intelligence. This means making Monitoring and Trending essential parts of the system. We&apos;ll work with you to identify what the key metrics are for your application, and build systems that alert you in a timely manner when it has issues.
 

Hire, train, and augment your own Operations Staff. We&apos;ve met a lot of excellent people over the years, and we love to hook them up with awesome companies.</p>





                        </div>
                    </div>
                </div>
            </div>




      <div className="features-grid">
                <div className="row align-items-center">
                    <div className="col-lg-6 text-center text-lg-left">
                        <div className="img-container">
                            <Image src="/assets/images/banner/about8.svg" alt="why choose us" className="img-fluid" width={630} height={442}/>

                        </div>
                    </div>

                    <div className="col-lg-5 offset-lg-1">
                        <div className="features-content">
                            <h2 className="section-title">What does it cost?</h2>
                            <p>We all learned the lessons during the dot-com boom about keeping an eye on the bottom line. The high cost of hiring the best talent drives many startups to cut corners on the infrastructure, or to have people who aren&apos;t experts &apos;wear many hats.&apos; DigitalQ helps drive that cost down by providing a pool of talented people who work on the problems you have. Need a Systems Architect to help design your deployment system on Monday and a Network Engineer on Tuesday? We&apos;ve got it covered.

When the time comes to hire full time Operations staff, we help with that too. We&apos;ll help recruit, hire, and train the right team. Once they are in place, we&apos;ll be around to help out when they need it.</p>





                        </div>
                    </div>
                </div>
            </div>









            <div className="features-grid">
                <div className="row align-items-center">
                    <div className="col-lg-6 order-lg-2 offset-lg-1 text-center text-lg-right">
                        <div className="img-container">
                            <Image src="/assets/images/banner/staff1.svg" alt="why choose us" className="img-fluid" width={630} height={442}/>

                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="features-content">
                            <h2 className="section-title">We can help</h2>
                            <p>If we&apos;re not the experts in the problems you face, we&apos;ll tell you. It&apos;s important to us that your business be successful, and that means making sure you get the right advice at the right time. We know consultants in a wide variety of technologies and we&apos;ll be happy to help you get in touch with them.</p>





                        </div>
                    </div>
                </div>
            </div>







        </div>
    </section>

  

   


    <div className="modal fade team-modal" id="team-modal" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <i className="fas fa-times"></i>
                    </button>
                </div>

                <div className="modal-body text-center">
                    <Image src="/assets/images/team/team-modal-img.png" alt="team modal image"
                        className="img-fluid modal-feat-img" width={630} height={442}/>
                    <div className="modal-title">
                        <h4>Steve Johnson
                            <span>Chief Exicutive Officer</span>
                        </h4>
                    </div>
                    <p>To be fair, in certain contexts, your professional bio does need to be more formal, like Mr.
                        Erickson&apos;s up there. But in many cases, writing a bio that&apos;s readable even conversational is
                        actually a really good thing. But once created, this bio should represent who you are in the
                        eyes.</p>

                    <ul className="social-icons">
                        <li>
                            <Link href="http://www.behance.net/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-behance"></i>
                            </Link>
                        </li>
                        <li>
                            <Link href="http://twitter.com/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter"></i>
                            </Link>
                        </li>
                        <li>
                            <Link href="http://plus.google.com/discover" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-google-plus-g"></i>
                            </Link>
                        </li>
                        <li>
                            <Link href="http://dribbble.com/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-dribbble"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

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
                        <h3>Get a Free Quote</h3>
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
                                <input type="text" name="website" placeholder="Website"/>
                            </div>
                            <div className="col-lg-12">
                                <textarea placeholder="Message" name="message"></textarea>
                                <button type="submit" className="custom-btn secondary-btn w-100">GET A QUOTE</button>
                                <div className="social-icons-wrapper d-flex justify-content-center">
                                    <p>Follow us:</p>
                                    <ul className="social-icons">
                                        <li>
                                            <Link href="http://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                                <i className="fab fa-facebook-f"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="http://twitter.com/" target="_blank" rel="noopener noreferrer">
                                                <i className="fab fa-twitter"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="http://youtube.com/" target="_blank" rel="noopener noreferrer">
                                                <i className="fab fa-youtube"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="http://plus.google.com/discover" target="_blank" rel="noopener noreferrer">
                                                <i className="fab fa-google-plus-g"></i>
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

export default About