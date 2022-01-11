import React, { useEffect,  useState } from 'react'
import './SideBar.css'

function SideBar({inputHandle}) {

  const [category, setCategory] = useState([]);
  const [brand, setBrand] = useState([]);

  // brand 
  const Brand=()=>{
    fetch("http://127.0.0.1:2000/api/brand")
    .then(response => response.json())
    .then(result =>{
        setBrand(result);
        console.log('hello', result);
        
    } )
    .catch(error =>{
        alert("Something went wrong! Please check your internet connection....");
         console.log('error', error)
    
    });
  
}
console.log(brand);
useEffect(() => {
   Brand()

}, [])

  // category 
  const Cat=()=>{
    fetch("http://127.0.0.1:2000/api/cat")
    .then(response => response.json())
    .then(result =>{
        setCategory(result);
        console.log('hello', result);
        
    } )
    .catch(error =>{
        alert("Something went wrong! Please check your internet connection....");
         console.log('error', error)
    
    });
  
}
console.log(category);
useEffect(() => {
   Cat()

}, [])


    return (
        <div className="col-lg-3 ">
              <div>
                <h2 id='title'>Product Brand</h2>

                <ul className="input-search-icon">
                {
               brand.map((item)=>{
                    return(
                      <li>
                      <input
                       className="form-check-input"
                        type="checkbox"
                        value={item.id}
                        onChange={inputHandle}
                        id="flexCheckDefault1" />
                    <label className="form-check-label p-1">{`${item.name}`} </label>
                    </li>
                    );
                   })
               }
              
                  
                 
                </ul>
              </div>
              <div>
                <h2 id='title'>Categories</h2>
                <ul className="input-search-icon">
                 {
                // category.filter((item)=>{ return item.name.includes(text)})
                  category.map((item)=>{
                    return(
                      <li>
                      <input
                       className="form-check-input"
                        type="checkbox"
                        value={item.id}
                        onChange={inputHandle}
                        id="flexCheckDefault1" />
                    <label className="form-check-label p-1">{`${item.name}`} </label>
                    </li>
                    );
                   })
               }
                 
                </ul>
              </div>
              <div>
                <h3 id='title'>price filter</h3>
                <ul className="input-search-icon">
                  <li className>
                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                    <label className="form-check-label p-1">$0.00 - $150.00</label>
                  </li>
                  <li className>
                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                    <label className="form-check-label p-1">$150.00 - $350.00</label>
                  </li>
                  <li className>
                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                    <label className="form-check-label p-1">$150.00 - $504.00</label>
                  </li>
                  <li className>
                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                    <label className="form-check-label p-1">$450.00 +</label>
                  </li>
                </ul>
              </div>
              <span className="bottom-search">
                <input type="text" size className="search-text"  />
                <input type="text" style={{width: '80%', marginLeft:'-5px'}} />
                <i className="fas fa-search input-search-icon" />
              </span>
            </div>
    )
}

export default SideBar
