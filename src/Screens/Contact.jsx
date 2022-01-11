import React from 'react'
import Nav from '../Components/Nav'
import HeaderCard from '../Components/HeaderCard';
import Supporters from '../Components/Supporters';
import Footer from '../Components/Footer';
import ContactCard from '../Components/ContactCard';

export default function Contact() {
  return (
    <div>
       <Nav />
        <HeaderCard title='Contact Us'/>
        <ContactCard/>
        <Supporters/>
       <Footer /> 
    </div>
  )
}
