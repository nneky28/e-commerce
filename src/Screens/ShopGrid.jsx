import React, { useEffect,  useState } from 'react'
import Nav from '../Components/Nav'
import HeaderCard from '../Components/HeaderCard';
import Supporters from '../Components/Supporters';
import Footer from '../Components/Footer';
import Center from '../Components/Center';
import Card from '../Components/Card';

function ShopGrid() {
const [products, setProducts]= useState([]);
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
        <div>
           	<Nav />
                <HeaderCard title='ShopGrid'/> 
                    <Center/> 
                    <div className="container">
                    <div className="row">
                    
                    
                    {
                            products.map((product,index)=>(
                                <Card key={product.id}
                                 product={product} color={product.color}
                                  size={product.size} id = {product.id}
                                   fav={product.favourites?.favourite}
                                    name={product.name} picture={product.picture_url1}
                                    price={product.price} sliced={Math.ceil(product.price-(product.slicedPercentage/100 * product.price))} 
                                    key={index} product ={product} />

                            ))
                        }

                    
                 </div>
             </div>
           
            <Supporters/>
       <Footer />
        </div>
    )
}

export default ShopGrid
