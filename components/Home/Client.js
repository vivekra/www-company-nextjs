import Image from 'next/image'
import React from 'react'

function Client() {
  return (
   <>
   <div className="clients" style={{padding: "5rem 0 10rem 0"}}>
    <div className="container">
        <h2 className="section-title text-center" style={{marginBottom: "4rem"}}>Our Clients</h2>
        <div style={{display:"flex", justifyContent:"space-evenly"}}>
            <div className="item client">
                <Image src="/assets/images/clients/client-1.png" alt="clients' logo" width={150} height={60}/>
            </div>
            <div className="item client">
                <Image src="/assets/images/clients/client-2.png" alt="clients' logo" width={165} height={60}/>
            </div>
            <div className="item client">
                <Image src="/assets/images/clients/client-3.png" alt="clients' logo" width={285} height={60}/>
            </div>
            <div className="item client">
                <Image src="/assets/images/clients/client-4.png" alt="clients' logo" width={313} height={60}/>
            </div>
            <div className="item client">
                <Image src="/assets/images/clients/client-5.png" alt="clients' logo" width={94} height={60}/>
            </div>
           
        </div>
    </div>
</div>
   </>
  )
}

export default Client