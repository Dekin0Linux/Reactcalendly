import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.png'

function Router() {
  return (

    <div className="container-fluid sticky-top sticky">
        <div className="container">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid mt-3">
                  <NavLink to={'/'} className="navbar-brand ml-lg-5" href="#">
                    <img src={logo} alt="" className="img-fluid" width="150px"/></NavLink>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-5 mb-2 mb-lg-0">
                      <li className="nav-item">  
                        <NavLink to={'/individuals'} className="nav-link text-dark fs-5 mx-md-4"  href="./individuals.html"><strong> Individuals </strong>
                        </NavLink>
                      </li> 

                      <li className="nav-item">
                        <NavLink to='/teams' className="nav-link text-dark fs-5 mx-md-4"  href="teams.html"><strong> Teams </strong></NavLink>
                      </li>
                      
                      <li className="nav-item">
                        <NavLink to={'/enterprise'} className="nav-link text-dark fs-5 mx-md-4"  href="enterprise.html"><strong> Enterprise </strong></NavLink>
                      </li>
                    </ul>
                    
                  </div>
                </div>
            </nav>
        </div>
        
    </div>
  )
}

export default Router