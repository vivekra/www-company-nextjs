import React from 'react'
import Image from 'next/image'
import Header from '../../components/Home/Header'
import Link from 'next/link'
function Socialmedia() {
  return (
    <div>
        <Header/>
 <div className="banner d-flex align-items-center light-grey-bg">

        <nav className="breadcrumb-wrapper" aria-label="breadcrumb">
            <div className="container">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Social Media Marketing</li>
                </ol>
            </div>
        </nav>


        <div className="container">
            <div className="row no-gutters align-items-center">
                <div className="col-lg-6 text-center text-lg-left">
                    <h1>Social Media Marketing</h1>
                    <p className="larger-txt">Internet Marketing is the art of optimizing a website on the basis of some search engine criteria and improves its ranking in the search engine result pages. It encompasses Search Engine Optimization and some other online marketing tools to build the WebPages of a website so that they achieve increased Search Engine Visibility. There are many marketing techniques that are employed by different search engine optimization firms during the search engine optimization process.</p>

                </div>

                <div className="col-lg-6">
                    <div className="img-container text-center text-lg-right">
                        <Image src="/assets/images/banner/social.svg" alt="Social media image" className="img-fluid" width={630} height={443}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
	
	   <section className="contact-us section-gap">
        <div className="container">
            <h2 className="section-title">Search Engine Optimization</h2>
            <p className="larger-txt">
Our search engine optimization solution aims at increasing the visibility of your site on the World Wide Web. Search engine optimization strategies, if not undertaken correctly, can incur heavy loses to your business and site. Search Engine Optimization is crucial to the success of your online business in this day and age! We can help you with your search engine marketing concerns. This is where we step in with our team of professionals to do the work for you. At DigitalQ, we have trained and qualified professionals to handle all of the search engine optimization work for you.
<br/>
<b>Website Assessment</b><br/>
Very often a marketing manager wakes up and realizes that he or she has not clue about the standings of their site in the online world. Are they ready to compete with other sites on Google or are they just throwing good money after bad? It is at this point that a good marketing manager should make the decision to get to the bottom line in regards of the website's ability to compete openly. And this is the job of Website Assessment.
<br/>
<b>SEO Consulting</b><br/>
Our search engine optimization solution aims at increasing the visibility of your site on the World Wide Web. Search engine optimization strategies, if not undertaken correctly, can incur heavy loses to your business and site. Search Engine Optimization is crucial to the success of your online business in this day and age! We can help you with your search engine marketing concerns. This is where we step in with our team of professionals to do the work for you. At Comet, we have trained and qualified professionals to handle all of the search engine optimization work for you.
<br/>
<b>Hire A Dedicated SEO Team</b><br/>
When you hire a dedicated SEO team from our company you have a true solution in place to do a great deal of heavy lifting at a fraction of the. You will be freed up to concentrate on the results instead of worrying if your workers have a cafeteria, toiletries and air conditioning. Let's face it, running a business is hard work and truly only 80 percent of the day is efficient with the other 20 percent dedicated to handling infrastructure details. We take all of the inefficiency out of the equation.</p>
           
<br/>
<p>
<b>Interactive Advertising</b><br/>
Interactive Advertising is also another effective tool of Internet Marketing that uses banner ads, flash presentations and interactive media to attract active participation from the visitors. This is extremely useful in promoting your products and services apart from educating your potential visitors to your website. Crafted well, interactive advertising can seriously engage the online consumers in a direct and personal ways. This tool facilitates dialogue between you and your prospective visitors which influence their buying decisions.
<br/>
<b>Email Marketing</b><br/>
Of late, e-mail marketing and online newsletters are being used as an effective forma of permission –based relationship marketing. When people agree to receive newsletters, they stay informed about your products and services. This in turn creates a chance for you to convert the visitors into buyers, retain the existing customers and add immense value to your business. As a progressive SEO consultant, we, at DigitalQ, help you build your brand by creating cost-effective and effective e-mail campaigns that help establish the rapport with your clients.
<br/>
<b>Blog Marketing</b><br/>
Weblog, also popularly known as Blog, is a leading Internet Marketing tool which is being used predominantly used for creating loyal online customers. Blog is usually a piece of write-up written in an engaging, colloquial and yet informative way that catches the fancy of the web visitors. Blogs are regularly updated and added to the site so that they don’t lose their value. Blogs offer a wide range of benefits from a business standpoint. To begin with, they provide an easy way to introduce fresh, relevant content to your site on a regular basis. The addition of fresh content is also favorable to the search engines and they add substantial value to your website. DigitalQ, the SEO company in India, helps you develop a perfect blogging strategy, integrating blogs into your websites and offer the ghostwriting blog content services.
<br/>
<b>White Paper marketing</b><br/>
Though not as much popular as the blogs are, white paper is also considered to be an powerful internet marketing tool and, is designed to promote your business as a leader in a specific field or industry. White papers being typically distributed after receiving the contact information from a prospective customer are extremely effective in generating leads.
<br/>
<b>Pay Per Click</b><br/>
PPC Campaigning is an effective tool of Internet Marketing where the webmasters bid for certain positions in the sponsored listing of Google. Usually, the bidding is carried out for certain keywords. For example, if a company is selling ‘Vacuum Cleaner’ then it would use keywords such as ‘Hoover’ which are frequently used by their prospective online customers. As per the guidelines of the search engines, as a webmaster you have to pay only when a visitor clicks on you add. Google AdWords and Yahoo Search Marketing (formerly known as Overture) are currently the largest providers of PPC Campaigning Services. At DigitalQ, the SEO company in India, we choose the right PPC keywords, craft and place ads for increasing you Rate On Investment.</p>
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
                        <h3>We’d love to talk about working together.</h3>
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

export default Socialmedia;