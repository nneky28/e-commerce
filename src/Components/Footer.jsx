import React from 'react'
import './Footer.css'
function Footer() {
    return (
     
            <>
              <div class="supporter">
                <img src="images/supporters.jpg" alt=""/>
             </div>
          <div className="footer">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-xs-12">
                  <p className="footer-logo ms-4">Hekto</p>
                  <div className="row">
                    <div className="col-lg-9">
                  <input placeholder="Enter email address" type="text" className="input" />
                  </div>
                  <div className="col-lg-3 bottom">
                  <button className="btn button">Signup</button>
                  </div>
                  </div>
                  <p className="contact-info mt-3 ms-4">Contact info</p>
                  <p className='ms-4'>17 Princess Road, London, Greater London NW1 8JR, UK</p>
                </div>

                <div className="col-lg-3 col-xs-12">
                <div className="footer-two ms-4">
                      <p className="foot">Categories</p>
                      <p>Laptops &amp; Computers</p>
                       <p>Cameras &amp; Photography</p>
                      <p>Smart Phones &amp; Tablets</p>
                      <p>Video Games &amp; Consoles</p>
                      <p>Waterproof Headphones</p>
                     </div>
                </div>

            <div className="col-lg-3 col-xs-12">
            <div className="footer-four ms-4">
                       <p className="foot">Customer Care</p>
                       <p>My Account</p>
                      <p>Discount</p>
                      <p>Returns</p>
                      <p>Orders History</p>
                      <p>Order Tracking</p>
                     </div>
                 </div>

                 <div className="col-lg-3 col-xs-12">
                   <div className="footer-four ms-4">
                      <p className="foot">Pages</p>
                      <p>Browse the Shop</p>
                      <p>Category</p>
                      <p>Pre-Built Pages</p>
                       <p>Visual Composer Elements</p>
                      <p>WooCommerce Pages</p>
                   </div>
              </div>

              </div>

            </div>
          </div>

          <div className="last-row">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <p> ©Webecy - All Rights Reserved</p>
              </div>
              <div className="col-lg-6">
                <i className="fab fa-facebook" />
                <i className="fab fa-instagram" />
                <i className="fab fa-twitter-square" />
              </div>   
          
          </div>
          </div>
          </div>

           </>

         
    )
}

export default Footer;
