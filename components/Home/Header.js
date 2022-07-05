import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function Header() {
  return (
    <>
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
                        {/* <ul className="submenu">
                        <li><Link href="/Service/Cloudservices"><a>Cloud Services</a></Link></li>
                        <li><Link href="/Service/Infrastructure"><a>Infrastructure Management</a></Link></li>
                        <li><Link href="/Service/Application"><a>Application Management</a></Link></li>
                        <li><Link href="/Service/Security"><a>Security Audit</a></Link></li>
                        <li><Link href="/Service/Socialmedia"><a>Social Media Marketing</a></Link></li>
                        
                        </ul> */}
                    </li>
                    <li className="nav-item">
                        <Link href="#" className="nav-link"><a>About</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="#" className="nav-link"><a>Staffing Solutions</a></Link>
                        
                    </li>
                     <li className="nav-item">
                        <Link href="#" className="nav-link"><a>Careers</a></Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link href="#" className="custom-btn btn-small" ><a>Contact</a></Link>
                    </li>
                   
                </ul>
            </div>
        </nav>
    </div>
</>
  )
}

export default Header;