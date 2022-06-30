import React from 'react'
import Image from 'next/image'
function Features() {
  return (
    <section className="features light-grey-bg" id="cynic-about" data-scroll-offset="165">
    <div className="container">


        <div className="features-grid">
            <div className="row align-items-center">
                <div className="col-lg-6 order-lg-2 offset-lg-1 text-center text-lg-right">
                    <div className="img-container">
                        <Image src="/assets/images/banner/home3.svg" alt="why choose us" className="img-fluid" width={595} height={457}/>

                    </div>
                </div>

                <div className="col-lg-5">
                    <div className="features-content">
                        <h2 className="section-title">Reasons for choosing us</h2>
                        <p>What was the right solution yesterday may have already been replaced by a better one today, and you have to be willing to adapt. No single individual can be an expert in every possible technology, or have experience in every area. We make sure that we have professionals available from across the technology spectrum, so we can rely on answers that come from experience.</p>





                        <a href="about-overview.php" className="hyperlink">Learn More About Us</a>

                    </div>
                </div>
            </div>
        </div>

        <div className="features-grid">
            <div className="row align-items-center">
                <div className="col-lg-6 text-center text-lg-left">
                    <div className="img-container">
                        <Image src="/assets/images/banner/home5.svg" alt="why choose us" className="img-fluid" width={648} height={517}/>

                    </div>
                </div>

                <div className="col-lg-5 offset-lg-1">
                    <div className="features-content">
                        <h2 className="section-title">What we do ?</h2>
                        <p>From the outset, DigitalQ has been associated with the provision of reliable and effective IT solutions to business.

                            DigitalQ brings together technical innovation and a sound understanding of our clients' business needs to keep their IT systems running smoothly, leaving them to get on with their business.

                            We take the stress out of computing, and we've got the skills and experience to cover everything from telephones to networks, PCs to servers, web development to hosted web applications.

                            Whether you're looking to improve the management of your existing systems or to do something new, DigitalQ can make it easy.</p>





                        <a href="about-overview.php" className="hyperlink">Learn More About Us</a>

                    </div>
                </div>
            </div>
        </div>


    </div>
</section>
  )
}

export default Features