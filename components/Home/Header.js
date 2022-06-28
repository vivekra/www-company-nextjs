import React from 'react'

function Header() {
  return (
    <header className="page-header">
    <div className="container">
        <nav className="navbar navbar-expand-lg align-items-center">
            <a className="navbar-brand" href="index.php">
                <img src="assets/images/dq-logo.svg" alt="DigitalQ logo"/>
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
                            <li><a href="infrastructure-management.php">Infrastructure Management</a></li>
                        <li><a href="application-management.php">Application Management</a></li>
                        <li><a href="security-audit.php">Security Audit</a></li>
                        <li><a href="internet-marketing.php">Social Media Marketing</a></li>
                        
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="/about" className="nav-link">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="/Staffing" className="nav-link">Staffing Solutions</a>
                        
                    </li>
                     <li className="nav-item">
                        <a href="/careers" className="nav-link">Careers</a>
                    </li>
                    
                    <li className="nav-item">
                        <a href="/contact" className="custom-btn btn-small" >Contact</a>
                    </li>
                   
                </ul>
            </div>
        </nav>
    </div>
</header>
  )
}

export default Header