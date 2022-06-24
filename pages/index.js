import React from 'react'
import Header from '../components/Header'
import Section from '../components/section'
import Features from '../components/Features'
import Clients from '../components/Clients'
import Footer from '../components/Footer'
import { Location } from '../components/Location'
export default function Home() {
    return (
        <>
            <Header />
            <div className="container">
                
                 
               <div className='index'>
               <div className="welcome">
                    <h1>Right Technology<br />at the right time</h1>
                    <p className="larger-txt">We believe in using the right technology for the problems at hand.<br /> Because technology advances so rapidly, keeping an open mind is critical</p>
                    <button className='custom-btn'>
                        <a href="https://dqserv.com" className="custom-btn secondary-btn">Check our Products</a>
                    </button>
                </div>

                <div className="bannerImg">
                    <div className="banner">
                        <img src="assets/images/banner/home1.svg" alt="Home banner image" className="img-fluid" />
                    </div>
                </div>
               </div>

             
            </div>
            <Section/>
            <Features/>
            <Clients/>
            <Location/>
            <Footer/>
        </>
    )
}
