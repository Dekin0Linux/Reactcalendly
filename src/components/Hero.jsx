import React from 'react'
import heroImg from '../assets/images/calendly-header.jpg'

function Hero() {
  return (
    <div className="container mt-5">
        <div className="row hero">
            <div className="col-12 col-md-6">
                <h1 className="fw-bolder display-2">Easy</h1>
                <h1 className="display-2">scheduling</h1>
                <h1 className="text-blue display-2">ahead</h1>
                <p className="my-md-5">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br/> Hic nisi quisquam sapiente laboriosam, perferendis <br/> ipsum asperiores nulla iste nam quo explicabo, <br/> quis ad temporibus dignissimos repellat!
                </p>
                
                <form action="#" className="mt-md-5 mb-3">
                    <div id="input">
                        <input type="email" name="" id="" placeholder="Enter your email"/>
                    </div>
                    <div id="btn"><input type="submit" value="Sign Up"/></div>
                </form>
                <p className="px-3 text-secondary">Create your free account. No credit card required.</p>

            </div>
            <div className="col-md-6 text-center ">
                <img src={heroImg} alt="" className="img-fluid"/>
            </div>
        </div>
    </div>
  )
}

export default Hero