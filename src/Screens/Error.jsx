import React from 'react'
import Nav from '../Components/Nav'
import HeaderCard from '../Components/HeaderCard';
import Supporters from '../Components/Supporters';
import Footer from '../Components/Footer';
import ErrorCard from '../Components/ErrorCard';

export default function Error() {
  return (
    <div>
       <Nav />
        <HeaderCard title='404 Not Found'/>
         <ErrorCard/>

        <Supporters/>
       <Footer /> 
    </div>
  )
}
