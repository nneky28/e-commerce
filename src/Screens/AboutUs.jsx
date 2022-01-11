import React from 'react'
import Nav from '../Components/Nav'
import HeaderCard from '../Components/HeaderCard';
import Supporters from '../Components/Supporters';
import Footer from '../Components/Footer';
import AboutCard from '../Components/AboutCard';


export default function AboutUs() {
  return (
    <div>
       <Nav />
        <HeaderCard title='About us'/>
        <AboutCard/>
        <Supporters/>
       <Footer /> 
    </div>
  )
}
