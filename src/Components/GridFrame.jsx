import React from 'react'
import { useNavigate } from 'react-router';
function GridFrame({picture, name,price,sliced,id}) {
	const navigate = new useNavigate();
	const handleSingle =()=>{
		navigate(`/products/${id}`)
	}
	const addCart = () =>{
		
	}
    return (
        <div>
        <div className="list mb-3">
            <div className="row">
            <div className="col-lg-4 col-sm-6">
            <img src={`http://127.0.0.1:2000/images/${ picture}`} alt="" className="card-img-top" onClick={handleSingle} />
            </div>

            <div className="col-lg-8 col-sm-6">
            <h4 className="card-title mt-5 ms-3">{name}
                 <span className="sm-circle bg-warning " />
                    <span className="sm-circle bg-danger" style={{ marginLeft: '5px' }} />
                 <span className="sm-circle bg-primary" style={{ marginLeft: '5px' }} / >							
            </h4>
        
            <div className="prices ms-3">
                                    <span className="card-price">${sliced}</span>
                                     <span className="card-price-former">${price}</span>
                                    <span>
                                         <i className="far fa-star ms-4" />
                                         <i className="far fa-star" style={{ marginLeft: '5px' }} />
                                        <i className="far fa-star" style={{ marginLeft: '5px' }} />
                                         <i className="far fa-star" style={{ marginLeft: '5px' }} />
                                        <i className="far fa-star" style={{ marginLeft: '5px' }} />
                                    </span>
                                </div>

                                <div className="item-description ms-3">
                                     <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est<br></br>
                                        adipiscing in phasellus non in justo.
                                    </p>
                                </div>
                            <span className ="ms-3 mt-4">
                            <i className="fas fa-cart-plus item-actions p-3"  onClick={addCart}/>
                                 <i className="far fa-heart item-actions p-3" />
                                <i className="fas fa-search-plus item-actions p-3" />
                            </span>
                            
                        </div>
            </div>
        </div>

</div>

)
}

export default GridFrame
