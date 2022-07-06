import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function Section() {
  return (
    <section className="services light-grey-bg" id="cynic-services" data-scroll-offset="165">
     <div className="floating-service-wrapper section-gap">
        <div className="container">
            <h2 className="section-title text-center">Services We Provide</h2>
            <p className="larger-txt text-center">DigitalQ provides IT professional services, Software development to Digital Marketing.</p>
            <div className="grid-wrapper">
                <div className="row justify-content-center">

                    <div className="col-xl-4 col-lg-6">
                        <Link href="/Service/Infrastructure" className="service-block text-center">
                        <Image src="/assets/images/services/service-icon-1.png" alt="Logo and branding" width={51} height={50}/>
                                                  </Link>
                            <h4>Cloud Infrastructure Management</h4>
                            <p>Whilst the whole world looks moving towards Cloud based solution, DigitalQ pioneers in
                                assisting organisation of any size which has interest in transitioning their IT entities to Cloud
                                in a phased, structured and using industry proven migration framework.<br/>
                            </p>
                    </div>

                    <div className="col-xl-4 col-lg-6">
                        <Link href="application-management" className="service-block text-center">
                            <Image src="/assets/images/services/service-icon-2.png" alt="undefined"width={66} height={50}/>
                        </Link>
                            <h4>Website Development</h4>
                            <p> DigitalQ has developed several entreprise-ready software products that can be deployed on a server-centric environment and can be accessed through a thin client like a Web browser.
                                DigitalQ also helps enterprises to migrate their existing desktop systems into a Web-based environment</p>
                    </div>

                    <div className="col-xl-4 col-lg-6">
                        <Link href="application-management" className="service-block text-center">
                        <Image src="/assets/images/services/service-icon-3.png" alt="undefined" width={41} height={50}/>
                        </Link>
                            <h4>Mobile App Development</h4>
                            <p>DigitalQ helps you to capitalize the opportunities in the mobile Internet space. We design end-to-end m-commerce solutions that facilitate you to exploit the full potential of the emerging wireless communication technologies</p>
                    </div>

                    <div className="col-xl-4 col-lg-6">
                        <Link href="internet-marketing" className="service-block text-center">
                        <Image src="/assets/images/services/service-icon-4.png" alt="Search Engine Optimization" width={74} height={50}/>
                        </Link>
                            <h4>Search Engine Optimization</h4>
                            <p>Our search engine optimization solution aims at increasing the visibility of your site on the World Wide Web. Search engine optimization strategies, if not undertaken correctly, can incur heavy loses to your business and site. Search Engine Optimization is crucial to the success of your online business in this day and age!</p>
                    </div>

                    <div className="col-xl-4 col-lg-6">
                        <Link href="security-audit" className="service-block text-center">
                        <Image src="/assets/images/services/service-icon-5.png" alt="Pay-Per-Click" width={66} height={50}/>
                        </Link>
                            <h4>Security Audit</h4>
                            <p>DigitalQ offers an effective dynamic Cybersecurity protection
                                vulnerability assessment, end point protection, application security, code analysis, identity and access
                                management.</p>
                    </div>

                    <div className="col-xl-4 col-lg-6">
                        <Link href="internet-marketing" className="service-block text-center">
                        <Image src="/assets/images/services/service-icon-6.png" alt="Social Media Marketing" width={74} height={50}/>
                        </Link>
                            <h4>Social Media Marketing</h4>
                            <p>DigitalQ will take care of your social media presence and engage your customer timely manner, our strategic marketing process are not limtied to social presence alone wherease it leads to high growth in terms of lead generation and promoting your branding in Digital Platform.</p>
                    </div>

                </div>
            </div>
        </div>
    </div> 
</section>
  )
}

export default Section

// import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// <section className="services light-grey-bg" id="cynic-services" data-scroll-offset="165">
//     <div className="floating-service-wrapper section-gap">
//         <div className="container">
//         <h2 className="section-title text-center">Services We Provide</h2>
//         <p className="larger-txt text-center">DigitalQ provides IT professional services, Software development to Digital Marketing.</p>
//         <div className="grid-wrapper">
//             <div className="row justify-content-center">

//                     <Link href="infrastructure-management" className="service-block text-center">
//                         <Image src="/assets/images/services/service-icon-1.png" alt="Logo and branding" width={51} height={50}/>
//                         <h4>Cloud Infrastructure Management</h4>
//                         <p>Whilst the whole world looks moving towards Cloud based solution, DigitalQ pioneers in
//                             assisting organisation of any size which has interest in transitioning their IT entities to Cloud
//                             in a phased, structured and using industry proven migration framework.<br/>
//                         </p>
//                     </Link>
//                 </div>

//                 <div className="col-xl-4 col-lg-6">
//                     <Link href="application-management" className="service-block text-center">
//                         <Image src="/assets/images/services/service-icon-2.png" alt="undefined"width={66} height={50}/>
//                         <h4>Website Development</h4>
//                         <p> DigitalQ has developed several entreprise-ready software products that can be deployed on a server-centric environment and can be accessed through a thin client like a Web browser.
//                             DigitalQ also helps enterprises to migrate their existing desktop systems into a Web-based environment</p>
//                     </Link>
//                 </div>

//                 <div className="col-xl-4 col-lg-6">
//                     <Link href="application-management" className="service-block text-center">
//                         <Image src="/assets/images/services/service-icon-3.png" alt="undefined" width={41} height={50}/>
//                         <h4>Mobile App Development</h4>
//                         <p>DigitalQ helps you to capitalize the opportunities in the mobile Internet space. We design end-to-end m-commerce solutions that facilitate you to exploit the full potential of the emerging wireless communication technologies</p>
//                     </Link>
//                 </div>

//                 <div className="col-xl-4 col-lg-6">
//                     <Link href="internet-marketing" className="service-block text-center">
//                         <Image src="/assets/images/services/service-icon-4.png" alt="Search Engine Optimization"width={74} height={50}/>
//                         <h4>Search Engine Optimization</h4>
//                         <p>Our search engine optimization solution aims at increasing the visibility of your site on the World Wide Web. Search engine optimization strategies, if not undertaken correctly, can incur heavy loses to your business and site. Search Engine Optimization is crucial to the success of your online business in this day and age!</p>
//                     </Link>
//                 </div>

//                 <div className="col-xl-4 col-lg-6">
//                     <Link href="security-audit" className="service-block text-center">
//                         <Image src="/assets/images/services/service-icon-5.png" alt="Pay-Per-Click" width={66} height={50}/>
//                         <h4>Security Audit</h4>
//                         <p>DigitalQ offers an effective dynamic Cybersecurity protection
//                             framework. Our full spectrum of services includes -infrastructure security, infrastructure audit,
//                             vulnerability assessment, end point protection, application security, code analysis, identity and access
//                             management.</p>
//                     </Link>
//                 </div>

//                 <div className="col-xl-4 col-lg-6">
//                     <Link href="internet-marketing" className="service-block text-center">
//                         <Image src="/assets/images/services/service-icon-6.png" alt="Social Media Marketing"width={74} height={50}/>
//                         <h4>Social Media Marketing</h4>
//                         <p>DigitalQ will take care of your social media presence and engage your customer timely manner, our strategic marketing process are not limtied to social presence alone wherease it leads to high growth in terms of lead generation and promoting your branding in Digital Platform.</p>
//                     </Link>
//                 </div>

//             </div>
//         </div>
//     </div>
// </section>


// export default Section