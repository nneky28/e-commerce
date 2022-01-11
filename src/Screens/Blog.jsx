import Nav from '../Components/Nav'
import HeaderCard from '../Components/HeaderCard';
import Supporters from '../Components/Supporters';
import Footer from '../Components/Footer';
import BlogCard from '../Components/BlogCard';
import React, {  useEffect, useState } from "react";

export default function Blog() {
  const [data, setData]  = useState([]);
  const [updateBlogs, setUpdateBlogs]  = useState([]);


  
  const getAllBlog = () => {
    fetch('http://localhost:2000/api/blog')
    .then( response => response.json())
    .then(json => {

      console.log(json.data)
      // saving in a state
        setData(json.data);
    })
    
  }
    useEffect(() => {
      getAllBlog();
    }, [updateBlogs])

    console.log('data', data)
  
    const updateBlogss=(json)=>{
          setUpdateBlogs(json);
    }
  return (
    <div>
     <Nav />
        <HeaderCard title='Blog Page'/>
        {data.map((blog, index) => 
           (
            <BlogCard key={index} {...blog} updateBlogs={updateBlogss} /> 
           )
        )}
        <Supporters/>
       <Footer /> 
    </div>
  )
}
