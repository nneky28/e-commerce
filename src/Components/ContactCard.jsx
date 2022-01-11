import React from 'react'
import Button from './Button'
import './Contact.css'

export default function ContactCard() {
  return (
    <div className='container-flu'>
        <div className="row mt-5 p-2">
          <div className="col-lg-6 col-md-6 col-xs-12">
            <h2 className='one'>Information About us</h2>
            <p className='two'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
             <p className='dots p-3'> 
              <span className='dut'>.</span>
              <span className='dot' >.</span>
              <span className='dit'>.</span>
              </p>
          </div>

          <div className="col-lg-6 col-md-6 col-xs-12">
          <h2 className='contact'>Contact Way</h2>
            <div className="row">
            <div className="col-lg-5 col-md-6 col-xs-12">
            <div className="row">
    
              <div className="col-lg-3 col-xs-6">
                <div className="side">
                  <p className='stubborn'>.</p>
                  </div>
              </div>
              <div className="col-lg-9 col-xs-6">
                <div className="left">
                  <p className='tel'>Tel: 877-67-88-99</p>
                  <p className='email'>E-Mail: shop@store.com</p>
                  </div>
              </div>
            </div>
            </div>
    {/* right side */}
            <div className="col-lg-6 col-md-6 col-xs-12">
            <div className="row">
          <div className="col-lg-3 col-xs-6">
            <div className="sideb">
              <p className='stut'>.</p>
              </div>
          </div>
            <div className="col-lg-7 col-xs-6">
              <div className="right">
                <p className='tel'>Tel: 877-67-88-99</p>
                <p className='email'>E-Mail: shop@store.com</p>
                </div>
            </div>
          </div>
            </div>
            </div>

            {/* second part  */}
  
            <div className="row">
            <div className="col-lg-5 col-md-6 col-xs-12">
            <div className="row">
    
              <div className="col-lg-3 col-xs-6">
                <div className="side">
                  <p className='yellow'>.</p>
                  </div>
              </div>
              <div className="col-lg-9 col-xs-6">
                <div className="left">
                  <p className='tel'>Tel: 877-67-88-99</p>
                  <p className='email'>E-Mail: shop@store.com</p>
                  </div>
              </div>
            </div>
            </div>
    {/* right side */}
            <div className="col-lg-6 col-md-6 col-xs-12">
            <div className="row">
          <div className="col-lg-3 col-xs-6">
            <div className="sideb">
              <p className='green'>.</p>
              </div>
          </div>
            <div className="col-lg-7 col-xs-6">
              <div className="right">
                <p className='tel'>Tel: 877-67-88-99</p>
                <p className='email'>E-Mail: shop@store.com</p>
                </div>
            </div>
          </div>
            </div>
            </div>
        </div>
        </div>
        <section>
          <div className="row mt-5">
            <div className="col-lg-6 col-md-6 col-xs-12">
            <h2 className='get'>Get in Touch</h2>
            <p className='two'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Mattis neque ultrices  tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>
               <div className="row">
                <div className="col-lg-5 mb-3">
                  <input type="text" name="" id=""  className='small' placeholder='Your Name*'/>
                </div>
                <div className="col-lg-5 mb-3">
                  <input type="text" name="" id=""  className='small' placeholder='Your Email*' />
                </div>

               <input type="text" name="" id=""  className='big mb-3' placeholder='Subject*'/>

                <textarea name="" id="" cols="10" rows="10" className='big' placeholder='Type Your Message*'></textarea>

                <div className="num mt-3">
            < Button
								border="0"
								background="#FB2E86"
								color="#fff"
								radius="2px"
								font="Josefin Sans"
								padding="2% 9%"
								name="Send Mail"
                // press={handleSubmit}
							/>
     </div>
               </div>
            </div>

            <div className="col-lg-6 col-md-6 col-xs-12">
              <img src="./images/contact.png" alt="" className='img' />
          </div>
          </div>
        </section>
      </div>



   
  )
}
