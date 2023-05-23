import React from 'react'
import client from '../assets/images/smiling-group-clients.png'

function IndividualClient1() {
  return (
    <div class="container">
            <div class="row my-5">
                <div class="col-md-6">
                    <img src={client} alt="" class="img-fluid" width="70%"/>
                </div>
                <div class="col-md-6">
                    <p class="text-muted lead mb-3">A CURATED CALENDAR</p>
                    <h1 class="heavy-font">Book up efficiently</h1>
                    <p class="my-5 lh-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis architecto cupiditate exercitationem adipisci facilis iusto ratione rem facere necessitatibus blanditiis natus quod magni ipsa molestias voluptas eos dicta, cumque labore sapiente sunt. Voluptate minus iste adipisci ipsa quibusdam doloribus dolorum reiciendis, harum, eius dicta vitae aliquam laborum doloremque optio cumque.</p>
                </div>
            </div>
        </div>
  )
}

export default IndividualClient1