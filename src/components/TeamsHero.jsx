import React from 'react'
import client from '../assets/images/smiling-group-clients.png'

function TeamsHero() {
  return (
    <div className="container mt-5">
        <div className="row hero">
            <div className="col-12 col-md-6">
                <h1 className="display-3"><span className="text-blue">Power up</span> your <br/>teams</h1>
               
                <p className="my-md-5 lh-lg">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aut aliquid <br/> exercitationem doloremque! Sunt cupiditate inventore dolorem alias sapiente molestiae magnam odit soluta omnis illo <br/> temporibus quas vero suscipit, quam et eligendi excepturi qui vitae similique. Odio fugiat consequatur hic?
                </p>
                <button className="btn bg-primary text-light rounded-pill p-4 px-5 fw-bold me-md-4">Start for free</button>
                <button className="btn btn-outline-dark text-dark border border-4 border-dark rounded-pill p-4 px-5 fw-bold">Contact Sales</button>
    
            </div>
            <div className="col-md-6 text-center">
                <img src={client} alt="" className="img-fluid"/>
            </div>
        </div>
    </div>
  )
}

export default TeamsHero