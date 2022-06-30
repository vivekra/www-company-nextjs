import React from 'react'
import Link from 'next/link'
function Location() {
  return (
    <section className="location section-gap light-grey-bg" id="cynic-contact" data-scroll-offset="75"
    data-scroll-offset-mobile="75">
    <div className="container">
        <h2 className="section-title text-center">Our Location</h2>
      <ul className="nav nav-tabs location-tab justify-content-center" role="tablist">
            <li className="nav-item">
                <a className="nav-link active" data-toggle="tab" href="contact.php#location-tab-1">Chennai</a>
            </li>
        
            <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="contact.php#location-tab-2">Maryland</a>
            </li> 
            <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="contact.php#location-tab-3">Colombo</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="contact.php#location-tab-4">Chester</a>
            </li>
            
        </ul>


        <div className="contact-info">
            <div className="row justify-content-between">
                <div className="col-lg-5 ">
                    <div className="info">
                        <h5>DigitalQ UK IT Solutions Ltd</h5>
                        <p>Orega Slough,<br/>The Switch 1-7,<br/>The Grove, Slough - SL1 1PQ.</p>
                    </div>
                </div>
                <div className="col-lg-3 ">
                    <div className="info">
                        <h5>Email</h5>
                        <Link href="mailto:hello@digitalqits.com"><a>hello@digitalqits.com</a></Link>
                    </div>
                </div>
                <div className="col-lg-4 ">
                    <div className="info">
                        <h5>Phone</h5>
                        <Link href="tel:+44175339920"><a>+44 175-339-920</a></Link>
                       
                    </div>
                </div>
                
            </div>
        </div>


  <div className="contact-info">
            <div className="row justify-content-between">
                <div className="col-lg-5 ">
                    <div className="info">
                        <h5>India</h5>
                        <p>#23, Cholan Street, <br/>Myilarasu Nagar,<br/>Chrompet, Chennai - 600 044.</p>
                    </div>
                </div>
                <div className="col-lg-3 ">
                    <div className="info">
                        <h5>Email</h5>
                        <Link href="mailto:hello@digitalq.co.in"><a>hello@digitalq.co.in</a></Link>
                    </div>
                </div>
                <div className="col-lg-4 ">
                    <div className="info">
                        <h5>Phone</h5>
                                                    <Link href="tel:+914422653315"><a>+91 (044) 2265-1990</a></Link>
                        <Link href="tel:+914422653315"><a>+91 (044) 2265-3315</a></Link>
                    </div>
                </div>

            </div>
        </div>





        <div className="contact-info">
            <div className="row justify-content-between">
                <div className="col-lg-5 ">
                    <div className="info">
                        <h5>USA</h5>
                        <p>9 Rockingham Ct, Germantown,<br/> MD, 20874, Montgomery Country,<br/> Maryland</p>
                    </div>
                </div>
                <div className="col-lg-3 ">
                    <div className="info">
                        <h5>Email</h5>
                        <Link href="mailto:cloudcas@digitalq.net"><a>cloudcas@digitalq.net</a></Link>
                    </div>
                </div>
                <div className="col-lg-4 ">
                    <div className="info">
                        <h5>Phone</h5>
                        <Link href="tel:+914422653315"><a>(+202) 629 7029</a></Link>
                       
                    </div>
                </div>
                
            </div>
        </div>
        
        <div className="contact-info">
            <div className="row justify-content-between">
                <div className="col-lg-5 ">
                    <div className="info">
                        <h5>Canada</h5>
                        <p>960 Markham Road, Scarborough,<br/>Ontario - M1H2Y4</p>
                    </div>
                </div>
                <div className="col-lg-3 ">
                    <div className="info">
                        <h5>Email</h5>
                        <Link href="mailto:welcome@digitalqglobal.ca"><a>welcome@digitalqglobal.ca</a></Link>
                    </div>
                </div>
                <div className="col-lg-4 ">
                    <div className="info">
                        <h5>Phone</h5>
                        <Link href="tel:+914422653315"><a>+1 647 819 7401</a></Link>
                       
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</section>
  )
}

export default Location