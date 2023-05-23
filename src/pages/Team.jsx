import React from 'react'
import TeamsHero from '../components/TeamsHero'
import Footer from '../components/Footer'
import TeamSection1 from '../components/TeamSection1'
import TeamSection2 from '../components/TeamSection2'

function Team() {
  return (
    <div>
        <TeamsHero/>
        <TeamSection1/>
        <TeamSection2/>
        <Footer/>
    </div>
  )
}

export default Team