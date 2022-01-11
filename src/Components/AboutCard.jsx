import React from 'react'
import './About.css'
import Button from './Button'
export default function AboutCard() {
  return (
    <div >
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-6 ccol-md-6 col-xs-12 mt-4">
            <img className='ceo img-fluid' src="./images/ceo.png" alt="" />
          </div>
          <div className="col-lg-6 col-md-6 col-xs-12 mt-3">
            <h2 className='about-title'>Know About Our Ecomerce
              Business, History</h2>
              <p className='about-sub'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
              
              <div className="ms-1">
              <Button
								border="0"
								background="#FB2E86"
								color="#fff"
								radius="2px"
								font="Josefin Sans"
								padding="5px 12px"
								name="Contact Us"
							/>
              </div>
          </div>

        </div>
        </div>

    <h1 className='three text-center mt-5 p-5'>Our Features</h1>
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-xs-12">
          <div className="carda mb-3">
            <img src="./images/free.png" className='icon img-responsive px-1' alt="" />
            <h4 className='four mt-2 text-center'>Free Delivery</h4>
            <p className='two px-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-xs-12">
          <div className="carda mb-3" style={{ borderBottom:'3px solid #FF9100' }}>
             <img src="./images/hand.png" className='icon img-responsive px-1' alt="" />
            <h4 className='four mt-2 text-center'>100% Cash Back</h4>
            <p className='two px-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-xs-12">
          <div className="carda mb-3">
            <img src="./images/badge.png" alt="" className='icon img-responsive px-1' />
            <h4 className='four mt-2 text-center'>Quality Product</h4>
            <p className='two px-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-xs-12">
          <div className="carda">
          <img src="./images/hour.png" alt="" className='icon img-responsive '/>
          <h4 className='four mt-2 text-center'>24/7 Support</h4>
            <p className='two px-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
          </div>

        </div>
      </div>
    </div>
    
<div className="client " id='bup'>
<h1 className='three text-center '>Our Client Say!</h1>
{/* starts */}

  <div class="carousel-inner">
   
    <img className='img-fluid p-2 mt-2' src="./images/min.png" alt="" />
    <img className='img-fluid p-2' src="./images/gl.png" alt="" />
    <img className='img-fluid p-2 mt-2' src="./images/man.png" alt="" />
    </div>
        <h5 className='foura mt-2'>Selina Gomez</h5>
        <p className='twob'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam 
          vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. 
          Tristique ultrices dolor aliquam lacus volutpat praesent.</p>

  {/* carousal button  */}
       <div
            id="carouselx"
            class="carousel carousel-dark slide mt-5"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
          </div>

  

{/* ends */}

</div>

</div>
  )
}
