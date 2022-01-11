import React from 'react'
import Button from './Button'
import './Error.css'

export default function ErrorCard() {
  return (
    <div className="container ">
    <div className="task">
    <img className='img-responsive img-top'
     src="./images/error.png" alt="" />
   
    <div className="bnm">
            <Button
								border="0"
								background="#FB2E86"
								color="#fff"
								radius="2px"
								font="Josefin Sans"
								padding="2% 9%"
								name="Back to Home"
                // press={handleSubmit}
							/>
     </div>
     </div>
  </div>
  )
}
