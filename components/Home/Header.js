import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Menu from './Menu'
function Header() {
    const [toggle, setToggle] = useState(false)
  return (
    <>
    <div className="container">
        <nav className="navbar navbar-expand-lg align-items-center">
            <Link className="navbar-brand" href="/">
                <Image src="/assets/images/dq-logo.svg" alt="DigitalQ logo" width={175} height={75}/>
            </Link>

            {toggle && <Menu />}

          {toggle ?  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#custom-navbar"
                aria-controls="custom-navbar" aria-expanded="true" aria-label="Toggle navigation" onClick={()=>setToggle(!toggle)}>
                <span className="custom-toggler-icon"></span>
                <span className="custom-toggler-icon"></span>
                <span className="custom-toggler-icon"></span>
            </button>:
             <button className="navbar-toggler change" type="button" data-toggle="collapse" data-target="#custom-navbar"
                aria-controls="custom-navbar"aria-expanded="false" aria-label="Toggle navigation" onClick={()=>setToggle(!toggle)} >
                <span className="custom-toggler-icon"></span>
                <span className="custom-toggler-icon"></span>
                <span className="custom-toggler-icon"></span>
            </button> }


            <div className="collapse navbar-collapse" id="custom-navbar">
                <ul className="navbar-nav ml-auto align-items-center dynamic-nav">
                    
                    
                    <li className="nav-item has-dropdown">
                    
                        <a  className="nav-link">Services</a>
                         <ul className="submenu">
                        <li><Link href="/Services/Cloudservices"><a>Cloud Services</a></Link></li>
                        <li><Link href="/Services/Infrastructure"><a>Infrastructure Management</a></Link></li>
                        <li><Link href="/Services/Application"><a>Application Management</a></Link></li>
                        <li><Link href="/Services/Security"><a>Security Audit</a></Link></li>
                        <li><Link href="/Services/Socialmedia"><a>Social Media Marketing</a></Link></li>
                        
                        </ul> 
                    </li>
                    <li className="nav-item">
                        <Link href="/About" className="nav-link"><a>About</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/Staffing" className="nav-link"><a>Staffing Solutions</a></Link>
                        
                    </li>
                     <li className="nav-item">
                        <Link href="/Careers" className="nav-link"><a>Careers</a></Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link href="/Contact" className="custom-btn btn-small" ><a>Contact</a></Link>
                    </li>
                   
                </ul>
  
            </div>
        </nav>
    </div>
</>
  )
}

export default Header;