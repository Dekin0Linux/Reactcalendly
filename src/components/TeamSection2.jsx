import React from 'react'
import lady from '../assets/images/lady1.jpg'

function TeamSection2() {
  return (
    <div className="container mt-5 spacer">
        <p className="text-center text-blue fw-semibold">SOLUTIONS</p>
        <h3 className="text-center display-5 fw-bold">The right Calendly for the work you do</h3>
        <div className="row my-5">
           <div className="col-md-3 col-6 ">
            <div className="card shadow">
                <img src={lady} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Sales</h5>
                  <p className="card-text mb-5 mt-4">Some quick example text to build </p>
                  <a href="#" className="btn text-blue fw-bold ">Go somewhere <span className="mx-3"></span></a>
                </div>
              </div>
           </div>

           <div className="col-md-3 col-6">
            <div className="card shadow">
                <img src={lady} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Recruiting</h5>
                  <p className="card-text mb-5 mt-4">Some quick example text to build </p>
                  <a href="#" className="btn text-blue fw-bold ">Go somewhere <span className="mx-3"></span></a>
                </div>
              </div>
           </div>

           <div className="col-md-3 col-6">
            <div className="card shadow">
                <img src={lady} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Customer success</h5>
                  <p className="card-text mb-5 mt-4">Some quick example text to build </p>
                  <a href="#" className="btn text-blue fw-bold ">Go somewhere <span className="mx-3"></span></a>
                </div>
              </div>
           </div>

           <div className="col-md-3 col-6">
            <div className="card shadow">
                <img src={lady} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Education</h5>
                  <p className="card-text mb-5 mt-4">Some quick example text to build </p>
                  <a href="#" className="btn text-blue fw-bold ">Go somewhere <span className="mx-3"></span></a>
                </div>
              </div>
           </div>
            
        </div>
    </div>
  )
}

export default TeamSection2