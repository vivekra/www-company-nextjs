import React from 'react'
import Link from 'next/link'
function Menu() {
  return (
    <div>
         <button className="navbar-toggler change" type="button" data-toggle="collapse" data-target="#custom-navbar"
                aria-controls="custom-navbar"aria-expanded="true" aria-label="Toggle navigation" onClick={()=>setToggle(!toggle)}>
                <span className="custom-toggler-icon"></span>
                <span className="custom-toggler-icon"></span>
                <span className="custom-toggler-icon"></span>
            </button>


            <div className="navbar-collapse collapse show" id="custom-navbar">
                <ul className="navbar-nav ml-auto align-items-center ">
                
                    
                    
                    <li className="dropdown">
                      <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                       Services
                       </button>
                       <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
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
    </div>
    
  )
}

export default Menu