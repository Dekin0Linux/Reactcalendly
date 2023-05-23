import React from 'react'
import man from '../assets/images/man-checking-mobile.png'

function TeamSection1() {
  return (
    <div>
        <div className="container mt-5 mb-5 text-center spacer">
        <h1 className="display-3 heavy-font">Streamline task, extend team <br/> reach</h1>
    </div>

    <div className="container">
        <div className="row my-5">
            <div className="col-md-6">
                <img src={man} alt="" className="img-fluid" width="70%"/>
            </div>
            <div className="col-md-6">
                <p className="fw-bold lead mb-3 text-blue">AUTOMATED ASSIGNMENT</p>
                <h1 className="heavy-font">Control how your team gets booked</h1>
                <p className="my-5 lh-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis architecto cupiditate exercitationem adipisci facilis iusto ratione rem facere necessitatibus blanditiis natus quod magni ipsa molestias voluptas eos dicta, cumque labore sapiente sunt. Voluptate minus iste adipisci ipsa quibusdam doloribus dolorum reiciendis, harum, eius dicta vitae aliquam laborum doloremque optio cumque.</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default TeamSection1