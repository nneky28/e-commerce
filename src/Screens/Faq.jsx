import Nav from '../Components/Nav'
import HeaderCard from '../Components/HeaderCard';
import Supporters from '../Components/Supporters';
import Footer from '../Components/Footer';
import FaqCard from '../Components/FaqCard';
import React, { useEffect, useState } from "react";
import Ask from '../Components/Ask';


export default function Faq() {
  const[list, setList] = useState([]);

  const getAllFaq = ()=>{
 
    fetch('http://127.0.0.1:2000/api/ask')
    .then( response => response.json())
    .then(result => {
      // console.log('result',result)
        setList(result.faqs);
    })

    .catch(error=>{
      alert('something is wrong');
    })
  }
  useEffect(() => {
    getAllFaq();
  }, [ ])

  return (
    <div>
       <Nav />
        <HeaderCard title='Faq Page'/>
        <div className="container">
         <div className="row">
         <div className="col-lg-6 col-md-6 col-xs-12">
            <h2 className='center mt-5'>General Information</h2>
        { 
          list.map((lists,index)=>
            (
              <FaqCard key={index} {...lists}  />
            )
          )
        } 
    </div>
          <div className="col-lg-6 col-md-6 col-xs-12">
             <Ask/>
            </div>
     </div> 
    </div>
        <Supporters/>
       <Footer /> 
    </div>
  )
}
