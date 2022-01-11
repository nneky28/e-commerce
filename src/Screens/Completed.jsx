import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import Supporters from '../Components/Supporters'
import CompletedCard from '../Components/CompletedCard'
import HeaderCard from '../Components/HeaderCard'

export default function Completed() {
  return (
    <div>
      <Nav />
        <HeaderCard title='Order Completed'/>
           <CompletedCard/>
        <Supporters />
     <Footer />
    </div>
  )
}
