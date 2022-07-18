import React from 'react'
import Footer from '../../components/Home/Footer'
import Header from '../../components/Home/Header'
import Image from 'next/image'
import Link from 'next/link'
function Cloudservices() {
  return (
    <div>
 
        <Header />

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
                            <h1>Cloud Sevices</h1>
                            <p className="larger-txt">You know what your business needs. We know how to support it with Technology. We assure you that our services will provide a secure, robust and uninterrupted IT service. We focus on design, architecture, migrations, deployment and managing business continuity for our customers. As a Certified Cloud MSP,
                                                DigitalQ manages the Digital Assets for over 50 large enterprise customers across domains.</p>

                        </div> 

                        <div className="col-lg-6">
                            <div className="img-container text-center text-lg-right">
                                <Image src="/assets/images/banner/cloud3.svg" alt="Infrastructure banner image" className="img-fluid" width={630} height={438}/>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            
                <section className="contact-us section-gap"> 
                <div className="container"> 
                
        <h2 className="section-title">Assessment  Strategy
        </h2>
        <p>As a Certified Global Cloud MSP (Managed Service Provider), we provide comprehensive Managed services-remote and onsite. You&apos;ll get the benefits of a
        certified IT support team at a fraction of the cost of hiring in-house</p>
        <br/>
        <ul>
            <li>With a plethora of options, CIO s need to formulate a comprehensive cloud strategy, and an execution plan for adopting Cloud as a business model for IT</li>
            <li>Our Consulting experts help you formulate the principles, roadmap and an action plan for cloud adoption</li>
            <li>Continuously trained and up-to-date on technology features that align best with business objectives, our consultants recommend the best-fit and best-of-breed models</li>
            <li>Cloud OEM comparison and best fit strategy</li>
            <li>Optimal migration roadmap recommendations</li>
            <li>nvestment outlay and ROI models</li>
            <li>Migration Models presentation and recommendations</li>
            <li>IT requirements Assessment</li>
            
        </ul>
        <br/>
        <h2 className="section-title">Migration Services
        </h2>
        <p>DigitalQ s Cloud Migration services help design, architecture, build and moving IT infrastructure to the optimal Public cloud, thus freeing infrastructure capital.</p>
        <br/>
        <ul>
            <li>With a roadmap in place, the &apos;How&apos; become a key question. Leveraging the right deployment model will drive the Transformation strategy</li>
            <li>DigitalQs Cloud Migration services help design, architecture , build and moving IT infrastructure to the optimal Public cloud, thus freeing infrastructure capital</li>
            <li>Aligned to your key business goals — high- availability, scale, compliance or cost-control — CK provides the Turnkey engineering service - from design to build - with trained, certified architects</li>
            <li>DataCenter-on-cloud presentation</li>
            <li>Project planning for migration</li>
            <li>Architecture</li>
            <li>Pilot Deployments</li>
            <li>DevOps  Infrastructure-as-Code development</li>
            <li>Go-Live cutover support</li>
            
        </ul>
        <br/>
        <h2 className="section-title">Managed Services
        </h2>
        <p>As a Certified Global Cloud MSP (Managed Service Provider), we provide comprehensive Managed services-remote and onsite. You&apos;ll get the benefits of a certified IT support team at a fraction of the cost of hiring in-house</p>
        <br/>
        <ul>
            <li>Like all our clients, what you really care about is that IT supports business  in an agile, proactive and reliable model</li>
            <li>As a Certified Global Cloud MSP (Managed Service Provider), we provide comprehensive Managed services- remote and onsite</li>
            <li>With DigitalQ s Managed Cloud Services, we provide round- the-clock service with a team of experienced engineers. You&apos;ll get the benefits of a IT support team -at a fraction of the cost of hiring in-house</li>
            <li>24 X7 Monitoring  Incident Management Service</li>
            <li>Cloud Operations, DevOps, DataOps, SecOps, TechOps</li>
            <li>SLA-driven Cloud IT Support</li>
            <li>Migration Models presentation and recommendations</li>
            <li>Self-service platform as SaaS</li>
            <li>Automated reports, dashboards</li>
            
        </ul>
        <br/>
        <h2 className="section-title">DevOps
        </h2>
        <p>We adopt a pragmatic approach that helps clients drive DevOps adoption in an integrated way. We enable intelligent automation on platforms of our clients&apos; choice and make improvements as required</p>
        <br/>
        <ul>
            <li>Version Control for All Production Artifacts</li>
            <li>Continuous Integration and Deployment</li>
            <li>Automated Acceptance Testing</li>
            <li>Peer Review of Production Changes</li>
            <li>High-Trust Culture</li>
            <li>Low-Failure rates of new releases</li>
            <li>Short lead time between fixes</li>
            <li>Continuous Performance Monitoring</li>
            
        </ul>
        <br></br>
                </div>
        </section>  

        
            
        
            <Footer />
     
    </div>
  )
}

export default Cloudservices;

