import React from 'react'
import Footer from '../components/Home/Footer';
import Image from 'next/image'
import Header from '../components/Home/Header'

function Staffing() {
  return (
   <div>
    <Header/>
        <div className="banner d-flex align-items-center light-grey-bg">

<nav className="breadcrumb-wrapper" aria-label="breadcrumb">
    <div className="container">
        <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Solutions</li>
        </ol>
    </div>
</nav>


<div className="container">
    <div className="row no-gutters align-items-center">
        <div className="col-lg-6 text-center text-lg-left">
            <h1>Staffing Solutions</h1>
            <p className="larger-txt">
                In a tight labor market, finding proficient and talented professionals remains a challenge for many companies. With our core capability in contingent staffing, we are equipped with the right resources to give you a complete solution.
                DigitalQ is one-stop shop for your staffing requirements.
            </p>

        </div>

        <div className="col-lg-6">
            <div className="img-container text-center text-lg-right">
                <Image src="/assets/images/banner/contact2.svg" alt="Solutions banner image" className="img-fluid" width={630} height={469}/>
            </div>
        </div>
    </div>
</div>
</div>
<section className="contact-us">
        <div className="container">
           
            <p className="larger-txt">
            DigitalQ is designed to help you during every aspect of your recruitment journey.
            We are  here to listen, diagnose and consult with you to deliver a truly tailormade IT staffing solution that satisfies your needs.We know that the working world has undergone massive changes since the beginning of 2020, and we are here to support you whether it is IT contract staffing, permanent staffing, or Volume-based project staffing.</p>

            <br/><br/>
            <h3>Team</h3>
            <p>Our experts team possess outspread knowledge and wide ranging experience.
            We will work with you to ensure you have access to the right resources to fulfil your staffing needs quickly and effectively.
            If your requirements change, our specialised team advise on any additional support you may need to help manage and maintain a
            successful resourcing strategy.</p>

            <br/><br/>
            <h3>Sevices</h3>
            <p>We have the skills and processes to match your business critical needs and provide contract staffing and direct
            placement services. Our talent acquisition team supports staffing solutions needs
            in IT, engineering, HR, marketing, creative, accounting, professional and scientific</p>

                <ul>
                    <li>Contract staffing</li>
            <li>Permanent/Direct</li>
            <li>Volume based project staffing</li>
            <li>Payroll Services</li>
                </ul>
                <br/><br/>
                <h3>Technology Focused</h3>
                <ul> <li ><span style={{fontWeight:"bold"}}> IT</span>
                <ul>
                    <li>Application Development</li>
                    <li>BI/DW Tools</li>
                    <li>Mobile App Development</li>
                    <li>Cloud</li>
                    <li>Big Data</li>
                    <li>eCommerce Tools</li>
                    <li>EA Frameworks</li>
                </ul>
                </li>
                </ul>
                <br/>
                <ul> <li ><span style={{fontWeight:"bold"}}> Non IT</span>
                <ul>
                    <li> Health Industry</li>
                    <li>Manufacturing Industry/Engineering</li>
                    <li>Energy/Power Industry</li>
                    <li>HR/finance</li>
                    
                </ul>
                </li>
                </ul>
                <br/><br/>
                    </div>
    </section>
    <Footer/>
   </div>
  )

}
export default Staffing;