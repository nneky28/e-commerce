
import './Faq.css'
import React from "react"


export default function FaqCard({questions,answers}) {
  
  return (
    <div>
      <div className="container">
        <div className="row">
          
            <h4 className='one mt-2 ms-2'>{questions}</h4>
            <p className='two ms-1 mt-2'>{answers}</p>
          </div>

         
        </div>
      </div>
    
  )
}
