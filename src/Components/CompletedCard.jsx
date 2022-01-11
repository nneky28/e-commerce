import React from 'react'
import Button from '../Components/Button'
import './Order.css'

export default function CompletedCard() {
  return (
    <div>
       <div className="container mt-5">
           <div className="row mt-5 ">
            <div className="col-lg-3 mt-4">
              <span><img src="./images/clock.png" className='img-responsive img-clock' alt="" /></span>
              
            </div>

            <div className="col-lg-8">
              <div className="tick">
              <img src="./images/good.png" className='img-responsive img-tick' alt="" />
              <h3 className='order'>Your Order Is Completed! </h3>
              <p className='than'>Thank you for your order! Your order is being processed 
              and will be completed within 3-6
              hours. You will receive an email confirmation when your order is completed.
              </p>
              </div>

                  <div className="order-btn">
                  <Button
                      border="0"
                      background="#FB2E86"
                      color="#fff"
                      radius="2px"
                      font="Josefin Sans"
                      padding="3px 25px"
                      name="Continue Shopping"
                    />
              </div>
              <p className='line'></p>
              <img src="./images/check.png" className='img-responsive img-icon' alt="" />
            </div>
            
           </div>
           
      </div>
      </div> 
  )
}
