import React from 'react'
import IndividualsHero from '../components/individualsHero'
import IndividualClient1 from '../components/IndividualClient1'
import IndividualClient2 from '../components/IndividualClient2'
import IndividualBanner from '../components/IndividualBanner'
import Footer from '../components/Footer'


function Individuals() {
  return (
    <div>
        <IndividualsHero/>
        <IndividualClient1/>
        <IndividualClient2/>
        <IndividualBanner/>
        <Footer/>
    </div>
  )
}


export default Individuals