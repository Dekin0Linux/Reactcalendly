import React from 'react'

function Footer() {
  return (
    <div class="container">
        <div class="row">
            <div class="col-6 col-md-3">
                <h1 class="heavy-font text-blue my-3">Easy <br/>ahead</h1>
                <p class="my-4">We take the work out of connecting with others so you can accomplish more.</p>
                <div class="input-group my-5 w-100">
                    <select class="form-select py-3" id="inputGroupSelect03" aria-label="Example select with button addon">
                      <option selected>Choose...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
            </div>
            <div class=" col-6 col-md-3 gap-3">
                <h4 class="heavy-font text-black my-3">About</h4>
                <ul>
                    <li>About Calendly</li>
                    <li>Contact Sales</li>
                    <li>Newsroom</li>
                    <li>Careers</li>
                    <li>Security</li>
                </ul>
            </div>
            <div class="col-md-3 col-6">
                <h4 class="heavy-font text-black my-3">Solutions</h4>
                <ul>
                    <li>About Calendly</li>
                    <li>Contact Sales</li>
                    <li>Newsroom</li>
                    <li>Careers</li>
                    <li>Security</li>
                </ul>
            </div>
            <div class="col-md-3 col-6">
                <h4 class="heavy-font text-black my-3">Popular Features</h4>
                <ul>
                    <li>About Calendly</li>
                    <li>Contact Sales</li>
                    <li>Newsroom</li>
                    <li>Careers</li>
                    <li>Security</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer