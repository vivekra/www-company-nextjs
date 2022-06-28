import React from 'react'

function Client() {
  return (
   <>
   <div className="clients" style={{padding: "5rem 0 10rem 0"}}>
    <div className="container">
        <h2 className="section-title text-center" style={{marginBottom: "4rem"}}>Our Clients</h2>
        <div style={{display:"flex", justifyContent:"space-evenly"}}>
            <div className="item client">
                <img src="assets/images/clients/client-1.png" alt="clients' logo"/>
            </div>
            <div className="item client">
                <img src="assets/images/clients/client-2.png" alt="clients' logo"/>
            </div>
            <div className="item client">
                <img src="assets/images/clients/client-3.png" alt="clients' logo"/>
            </div>
            <div className="item client">
                <img src="assets/images/clients/client-4.png" alt="clients' logo"/>
            </div>
            <div className="item client">
                <img src="assets/images/clients/client-5.png" alt="clients' logo"/>
            </div>
           
        </div>
    </div>
</div>
   </>
  )
}

export default Client