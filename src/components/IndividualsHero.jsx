import React from 'react'
import imgIndi from '../assets/images/hero_img1.png'

function IndividualsHero() {
  return (
    <div class="container mt-5">
        <div class="row hero">
            <div class="col-12 col-md-6">
                <h1>The genius way</h1>
                <h1>to work <span class="text-blue">better</span></h1>
                <p class="my-md-5 lh-lg">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br/> Hic nisi quisquam sapiente laboriosam, perferendis <br/> ipsum asperiores nulla iste nam quo explicabo, <br/> quis ad temporibus dignissimos repellat!
                </p>
                <button class="btn bg-dark text-light rounded-pill p-4 px-5">Sign up for free</button>
                

            </div>
            <div class="col-md-6 text-center ">
                <img src={imgIndi} alt="" class="img-fluid"/>
            </div>
        </div>
    </div>
  )
}

export default IndividualsHero