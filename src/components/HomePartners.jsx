import React from 'react'
import appleIcon from '../assets/images/apple.png'

function HomePartners() {
  return (
    <div class="container-fluid bg-light my-5 ">
        <h1 class="text-center py-5">Simplified scheduling for more than <br/><span class="text-blue">10,000,000</span> users worldwide</h1>
        <div class="container mt-3 mb-5">
            <div class="row pb-5 text-center">
                <div class="col-3">
                   <img src={appleIcon} alt="" class="img-fluid" width="150px"/>
                </div>
                <div class="col-3">
                    <img src={appleIcon} alt="" class="img-fluid" width="150px"/>
                </div>
                <div class="col-3">
                    <img src={appleIcon} alt="" class="img-fluid" width="150px"/>
                </div>
                <div class="col-3">
                    <img src={appleIcon} alt="" class="img-fluid" width="150px"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePartners