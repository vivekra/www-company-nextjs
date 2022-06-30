import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <header className="page-header">
    <div className="container">
        <nav className="navbar navbar-expand-lg align-items-center">
            <a className="navbar-brand" href="index.php">
                <Image src="/assets/images/dq-logo.svg" alt="DigitalQ logo" width={175} height={75}/>
            </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#custom-navbar"
                aria-controls="custom-navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="custom-toggler-icon"></span>
                <span className="custom-toggler-icon"></span>
                <span className="custom-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="custom-navbar">
                <ul className="navbar-nav ml-auto align-items-center dynamic-nav">
                    
                    
                    <li className="nav-item has-dropdown">
                    
                        <a  className="nav-link">Services</a>
                        <ul className="submenu">
                        <li><a href="/Service/Cloudservices">Cloud Services</a></li>
                        <li><a href="/Service/Infrastructure">Infrastructure Management</a></li>
                        <li><a href="/Service/Application">Application Management</a></li>
                        <li><a href="/Service/Security">Security Audit</a></li>
                        <li><a href="/Service/Socialmedia">Social Media Marketing</a></li>
                        
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="/About" className="nav-link">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="/Staffing" className="nav-link">Staffing Solutions</a>
                        
                    </li>
                     <li className="nav-item">
                        <a href="/Careers" className="nav-link">Careers</a>
                    </li>
                    
                    <li className="nav-item">
                        <a href="/Contact" className="custom-btn btn-small" >Contact</a>
                    </li>
                   
                </ul>
            </div>
        </nav>
    </div>
</header>
  )
}

export default Header