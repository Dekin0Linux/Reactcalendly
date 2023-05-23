import React from 'react'
import img2 from  '../assets/images/Calendly-Recruiting-Small.png'

function IndividualClient2() {
  return (
    <div class="container mt-5">
        <div class="row my-5">
           
            <div class="col-md-6">
                <p class="text-muted fw-bold mb-3">AUTOMATEDD NOTIFICATION & FOLLOW-UPS</p>
                <h1 class="heavy-font">Work like you have a personal assistant</h1>
                <p class="my-4 lh-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis architecto cupiditate exercitationem adipisci facilis iusto ratione rem facere necessitatibus blanditiis natus quod magni ipsa molestias voluptas eos dicta, cumque labore sapiente sunt. Voluptate minus iste adipisci ipsa quibusdam doloribus dolorum reiciendis, harum, eius dicta vitae aliquam laborum doloremque optio cumque.</p>
            </div>
            <div class="col-md-6 text-center">
                <img src={img2} alt="" class="img-fluid" width="70%"/>
            </div>
        </div>
    </div>
  )
}

export default IndividualClient2