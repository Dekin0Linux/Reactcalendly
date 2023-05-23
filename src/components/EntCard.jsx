import React from 'react'

function EntCard({image,text,title}) {
  return (
    <div class="col-md-4 col-6 ">
        <div class="shadow rounded-5 p-4">
            <h4 class="text-blue mt-2">{title}</h4>
            <div class="text-center my-4">
                <img src={image} alt="art" class="img-fluid " width="180px"/>
            </div>
            <p class="my-5">{text}</p>
        </div>
    </div>
    
  )
}

export default EntCard