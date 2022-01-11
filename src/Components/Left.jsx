import React from 'react'
import './Left.css'


export default function Left() {
  return (
    <div>
      
			<div className="card1 mt-3">
				<div className="row">
				<div className="col-lg-4 col-sm-6 mt-5">
				<img src="images/2.png" alt="" className="card-img-top" />
				</div>

				<div className="col-lg-8 col-sm-6 mb-3">
				<h4 className="card-title mt-5 ms-4">Dictum morbi
				 	<span className="sm-circle bg-warning " />
						<span className="sm-circle bg-danger" style={{ marginLeft: '5px' }} />
			 		<span className="sm-circle bg-primary" style={{ marginLeft: '5px' }} / >							
				</h4>
			
				<div className="prices ms-4">
										<span className="card-price">$26.00</span>
				 						<span className="card-price-former">$52.00</span>
										<span>
				 							<i className="far fa-star" />
				 							<i className="far fa-star" style={{ marginLeft: '5px' }} />
											<i className="far fa-star" style={{ marginLeft: '5px' }} />
				 							<i className="far fa-star" style={{ marginLeft: '5px' }} />
											<i className="far fa-star" style={{ marginLeft: '5px' }} />
										</span>
									</div>

									<div className="item-description ms-4">
				 						<p>
											Lorem ipsum dolor sit amet, conse adipiscing elit.<br></br> Magna in est<br></br>
											adipiscing in phasellus non in justo.
										</p>
									</div>

									
							<div className ="icon ms-4">
									<i className="fas fa-cart-plus item-actions p-2" />
			 						<i className="far fa-heart item-actions  p-2" />
									<i className="fas fa-search-plus item-actions p-2" />
								</div>
								
							</div>
				</div>
			</div>

</div>
  
  )
}
