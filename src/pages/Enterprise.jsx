import React from 'react'
import EnterpriseHero from '../components/EnterpriseHero'
import EnterpriseBanner from '../components/EnterpriseBanner'
import Footer from '../components/Footer'
import EntCard from '../components/EntCard'
import sales from '../assets/images/sales.jpg'

function Enterprise() {
  return (
    <div>
        <EnterpriseHero/>
        <EnterpriseBanner/>
        <div class="container mt-5 spacer">
            <div class="row my-5 gy-3 px-5">
                <EntCard image={sales} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa consequuntur possimus, ullam, ipsum amet soluta quos vel quibusdam facere cumque eum deserunt, temporibus maiores minus!'} title='Sales'/>
                <EntCard image={sales} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa consequuntur possimus, ullam, ipsum amet soluta quos vel quibusdam facere cumque eum deserunt, temporibus maiores minus!'} title='Customer Success'/>
                <EntCard image={sales} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa consequuntur possimus, ullam, ipsum amet soluta quos vel quibusdam facere cumque eum deserunt, temporibus maiores minus!'} title='Recuriting'/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Enterprise