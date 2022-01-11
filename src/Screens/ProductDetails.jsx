import React, {useState, useEffect} from 'react';
import Nav from '../Components/Nav'
import HeaderCard from '../Components/HeaderCard';
import Supporters from '../Components/Supporters';
import Footer from '../Components/Footer';
import Details from '../Components/Details';
import Description from '../Components/Description';
import Related from '../Components/Related';
import { useParams } from "react-router-dom";


function ProductDetails() {
    const {id} = useParams();
    const [products, setProducts]= useState({});




    const Product=()=>{
        fetch(`http://127.0.0.1:2000/api/products/${id}`)
        .then(response => response.json())
        .then(result =>{
            // console.log(result)
            setProducts(result.products);

        } )
        .catch(error =>{
            alert("Something went wrong! Please check your internet connection....");
             console.log('error', error)
        });
      
    }
    useEffect(() => {
        Product()
    }, [])
    // console.log(products)
	return (
		<div >
			<Nav />
                <HeaderCard title='Product Details'/>
			        <div className="container mt-5">
				<Details description={products.description} picture1={products.picture_url1} picture2={products.picture_url2} picture3={products.picture_url3} picture4={products.picture_url4} sliced={products.price-(Math.ceil((products.slicedPercentage/100) *products.price))} name={products.name} color={products.color} size={products.size} price={products.price} inCart={products.inCart}/>
                <div className="container">
                <Description description={products.description} info ={products['Additional Info']} video={products.video_id} review={products.review_id}/>
                </div>
                <div className=' container ms-2 mt-5'>
                    <p  style={{fontFamily:'Roboto', fontWeight:'900', fontSize:'36px', color: '#101750'}}>Related Products </p>
                    <div className='row'>
                        <Related/> 
                        <Related/>
                        <Related/>
                        <Related/>   
                    </div>
                </div>
			</div>
            <Supporters/>
            <Footer/>
		</div>
	);
}

export default ProductDetails;
