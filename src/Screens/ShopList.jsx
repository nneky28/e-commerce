import { userContext } from '../context/userContext';
import React, { useEffect,  useState ,useContext} from 'react'
import Nav from '../Components/Nav'
import HeaderCard from '../Components/HeaderCard';
import Supporters from '../Components/Supporters';
import Footer from '../Components/Footer';
import ListFrame from '../Components/ListFrame';
import Center from '../Components/Center';

function ShopList() {
	const [products, setProducts]= useState([]);
  const{payload, setPayload}= useContext(userContext);
  const {updatedFavourite, setUpdatedFavourite}=useContext(userContext);

    const Product=()=>{
        fetch("http://127.0.0.1:2000/api/products")
        .then(response => response.json())
        .then(result =>{
            setProducts(result.products);

        } )
        .catch(error =>{
            alert("Something went wrong! Please check your internet connection....");
             console.log('error', error)
        
        });
    }

    useEffect(() => {
        Product()
    }, [updatedFavourite])
    return (
        <div>
          <Nav/>
          <HeaderCard title='Shop Left'/> 
          <Center/>
        <div className="container">
        <div className="main">
          <div className="row mt-5">
        
            <div className="col-lg-9">
            {
              products.map((product)=>(
                <ListFrame key={product.id}  id = {product.id} fav={product.favourites?.favourite} name={product.name} picture={product.picture_url1} description ={product.description} price={product.Price} sliced={Math.ceil(product.price-(product.slicedPercentage/100 * product.price))}/>
              ))
            }
            {/* <ListFrame/> */}
            </div>
          </div>
        </div>
      </div>
            <Supporters/>
            <Footer/>
		</div>
	);
}

export default ShopList;
