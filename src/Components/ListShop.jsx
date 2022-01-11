import React from 'react'

export default function ListShop() {
  return (
    <div>
      <div className="main">
            <div className="row">
                <div className="col-lg-3">
                    <div className="right-filter">
                        <p>Product Brand</p>
                        <ul className="right-filter-ul">
                            <li className="">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label">Coaster Furniture</label>
                            </li>
                            <li className="">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label">Fusion Dot High Fashion</label>
                            </li>
                            <li className="">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label">Unique Furnitture Restore</label>
                            </li>
                            <li className="">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label">Dream Furnitture Flipping</label>
                            </li>
                            <li className="">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label">Young Repurposed</label>
                            </li>
                            <li className="">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label">Green DIY furniture</label>
                            </li>
                        </ul>
                    </div>
                    <div className="right-filter">
                        <p>Categories</p>
                        <ul className="right-filter-ul">
                            <li className="">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label">Prestashop</label>
                            </li>
                            <li className="">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label">Magento</label>
                            </li>
                            <li className="">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label">Bigcommerce</label>
                            </li>
                            <li className="">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label">osCommerce</label>
                            </li>
                            <li className="">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label">3dcart</label>
                            </li>
                            <li className="">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label">Bags</label>
                            </li>
                            <li className="">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label">Accessories</label>
                            </li>
                            <li className="">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label">Jewellery</label>
                            </li>
                            <li className="">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label">Watches</label>
                            </li>
                        </ul>
                    </div>
                    <div className="right-filter">
                        <p>Price Filter</p>
                        <ul className="right-filter-ul">
                            <li className="">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label">$0.00 - $150.00</label>
                            </li>
                            <li className="">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label">$150.00 - $350.00</label>
                            </li>
                            <li className="">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label">$150.00 - $504.00</label>
                            </li>
                            <li className="">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label">$450.00 +</label>
                            </li>
                        </ul>
                    </div>
                    <span className="bottom-search">
                        <input type="text" size="5" className="search-text" />
                        <i className="fas fa-search input-search-icon"></i>
                    </span>
                </div>
                <div className="col-lg-9">
                    <div className="card">
                        <div className="card-body">
                            <div className="single-item row">
                                <div className="col-4 ">
                                    <img src="wrist-watch.jpg" alt="" className="card-img-top"/>
                                </div>
                                <div className="col-8">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <p className = "card-title">Dictum morbi</p>
                                        </div>
                                        <div className="col-lg-8">
                                            <div className="">
                                                <span className="sm-circle bg-warning "></span>
                                                <span className="sm-circle bg-danger"></span>
                                                <span className="sm-circle bg-primary"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="prices">
                                        <span className = "card-price">$26.00</span>
                                        <span className = "card-price-former">$52.00</span>
                                        <span>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </span>
                                    </div>
                                    <div className="item-description">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                                            in phasellus non in justo.</p>
                                    </div>
                                    <div className="">
    
                                        <i className="fas fa-cart-plus item-actions" ></i>
                                        <i className="far fa-heart item-actions"></i>
                                        <i className="fas fa-search-plus item-actions"></i>
    
                                    </div>
    
                                </div>
    
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>

    </div>
  )
}
