import React from 'react'
import './/Blog.css'

export default function BlogLeft() {
  return (
   <div>
              <div className="side ms-2">
              <p id='search'> Search </p>
              <input type="text" name="" id=""  className='inputform'/>
              <i className="fas fa-search input-search-icon" />
              </div>

                <div className="side mt-3 ms-2">
                <p id='search'>Categories</p>
                <div className="row">
                  <div className="col-lg-4">
                    <button className='btn-md btn'>Hobbies (14)</button>
                    <p className='tag mt-2 ms-3'>women (21)</p>
                    <p className='tag mt-2 ms-3'>women (21)</p>
                  </div>

                  <div className="col-lg-4">
                      <p className='tag mt-3 ms-3'>women (21)</p>
                      <p className='tag mt-2 ms-3'>women (21)</p>
                      <p className='tag mt-2 ms-3'>women (21)</p>
                  </div>

                  <div className="recent mt-3 ms-2">
                  <p id='search'>Recent Post</p>
                  <div className="row">
                      <div className="col-lg-3 col-sm-12">
                          <img src="/images/2.png" alt="hello" className='top' />

                      </div>

                      <div className="col-lg-4 col-sm-12">
                      <p className='tag1 mt-3'>It is a long established fact</p>
                      <p className='tag1'>Aug 1,2021</p>
                    </div>

                  </div>
                  </div>

                  <div className="recent mt-3 ms-2">
                  <p id='search'>Sale Product</p>
                  <div className="row">
                      <div className="col-lg-3 col-sm-12">
                          <img src="/images/2.png" alt="hello" className='top' />
                           
                      </div>

                      <div className="col-lg-4 col-sm-12">
                      <p className='tag1 mt-3'>Elit ornare in enim mauris.</p>
                      <p className='tag1'>Aug 1,2021</p>
                    </div>

                  </div>
                  </div>

                  
                  <div className="recent mt-3 ms-2">
                  <p id='search'>Offer Product</p>
                  <div className="row">
                      <div className="col-lg-3 col-sm-12">
                        <div className="card-img px-3">
                          <img src="/images/1.png" alt="hello" className='top ms-1' />
                          </div>

                          <p className='title mt-2 ms-1'>Duis lectus est.</p>
                          <p className='price ms-1'>$21.00-$12.00</p>
                      </div>

                      <div className="col-lg-3 col-sm-12">
                        <div className="card-img px-3">
                          <img src="/images/1.png" alt="hello" className='top ms-1' />
                          </div>
                          <p className='title mt-2 ms-1'>Duis lectus est.</p>
                          <p className='price ms-1'>$21.00-$12.00</p>
                      </div>

                      <div className="recent mt-3 ms-2">
                      <p id='search'>Follow</p>

                      <div className="body">
                      <span><i className="fab fa-facebook" style={{color: 'blue', paddingLeft:'8px'}} /></span>
                      <span><i className="fab fa-instagram-square" style={{color: '#FB2E86', paddingLeft:'8px'}} /></span>
                       <span><i className="fab fa-twitter-square" style={{color:'#37DAF3', borderRadius:'1em', paddingLeft:'8px'}} /></span>
                       </div>
                       </div>

                       <div className="recent mt-3 ms-2">
                      <p id='search'>Tags</p>
                      </div>

                        <div className="row">
                          <div className="col-lg-2 ">
                            <p className='gen ms-2' style={{ textDecoration:'underline',color:'hsla(229, 43%, 43%, 1)' }}>General</p>
                          </div>

                          <div className="col-lg-2">
                            <p className='ms-2'style={{ textDecoration:'underline',color:'#FB2E86' }}>Atsanil</p>
                          </div>

                          <div className="col-lg-4">
                          <p className='ms-2'style={{ textDecoration:'underline',color:'hsla(229, 43%, 43%, 1)' }}>insas</p>
                          </div>

                        </div>

                  </div>
                  </div>

                </div>
                </div>

            


    </div>
  )
}
