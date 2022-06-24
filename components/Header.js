import React from 'react'

function Header() {
  return (
            <header className="page-header">
        <div className="container">
            <nav className="navbar ">
                <a className="navbar-brand" href="index.php">
                    <img src="assets/images/dq-logo.svg" alt="DigitalQ logo" />
                </a>

               

                <div className="menu" id="custom-navbar">
                    <ul className="navbar-nav ml-auto align-items-center dynamic-nav">
                        
						
						<li className="nav-item has-dropdown">
						
                            <a href="services-overview.php#" className="nav-link">Services</a>
                            <ul className="submenu">
							<li><a href="cloud-services.php">Cloud Services</a></li>
								<li><a href="infrastructure-management.php">Infrastructure Management</a></li>
							<li><a href="application-management.php">Application Management</a></li>
							<li><a href="security-audit.php">Security Audit</a></li>
							<li><a href="internet-marketing.php">Social Media Marketing</a></li>
                            
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="about-overview.php" className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
							<a href="staffing-solutions.php" className="nav-link">Staffing Solutions</a>
                            
                        </li>
                         <li className="nav-item">
                            <a href="careers.php" className="nav-link">Careers</a>
                        </li>
                        
                        <li className="nav-item">
                            <a href="contact.php" className="custom-btn btn-small" >Contact</a>
                            
                        </li>
                       
                    </ul>
                </div>
            </nav>
        </div>
    </header>
  )
}

export default Header