import {Link} from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import './Center.css'
import Card from './Card';

export default function Center() {

    const [text, setText] = useState();
    const [products, setProducts] = useState([]);

    const handleSubmit = (e) => {
        setText(e.target.value);
    }
    const Product=()=>{
        fetch("http://127.0.0.1:2000/api/products")
        .then(response => response.json())
        .then(result =>{
            setProducts(result.products);
            console.log(products);
            

        } )
        .catch(error =>{
            alert("Something went wrong! Please check your internet connection....");
             console.log('error', error)
        
        });
      
    }
   console.log(products);
    useEffect(() => {
        Product()
    }, [])
  return (
  
       <div className="container mt-5 mb-5">
        <div className="section-4">
            <div className="row">
                <div className="col-lg-6 col-xs-6">
                    <div className="search-right">
                        <p className='title'>Ecommerce Acceories & Fashion item </p>
                        <p className='stat'>About 9,620 results (0.62 seconds)</p>
                    </div>
                </div>
                <div className="col-lg-6 col-xs-6">
                    <div className="row">
                    <div className="col-lg-3 col-sm-4">
                    <span className="search-text">per page:
                    <input type="text" className="search-input1 ms-2"/></span>
                    </div>



                    <div className="col-lg-4 col-sm-4 ">
                    <div className="search-div2">
                        <span className="search-text">Sort By: </span>
                        <select className="search-input ms-2" aria-label=".form-select-sm select example">
                            <option selected>Best Match</option>
                            <option value={1}>One</option>
                            <option value={2}>Two</option>
                            <option value={3}>Three</option>
                        </select>
                    </div>
                    </div>
                    <div className="col-lg-5 col-sm-4">
                    <div className="search-div3">
                        <span className="search-text">View:</span>
                        <Link to='/left'> <i className="fas fa-list p-2"></i></Link>
                        <Link to="/grid"><i className="fas fa-th-large"></i></Link>
                        <input type="text" className="search-input1 ms-2" onChange={handleSubmit} value={text}/>

{/* filter and map starts */}


                       
    {/* ends*/}
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}
