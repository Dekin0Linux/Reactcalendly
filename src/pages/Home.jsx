import React from 'react'
import Hero from '../components/Hero'
import HomePartners from '../components/HomePartners'
import HomeProcessTabs from '../components/HomeProcessTabs'

function Home() {
  return (
    <div>
        <Hero/>
        {/* partners */}
        <HomePartners/>
        {/* process tabs */}
        <HomeProcessTabs/>
    </div>
  )
}

export default Home