import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import BlogLeft from "../Components/BlogLeft";
import Nav from '../Components/Nav'
import HeaderCard from '../Components/HeaderCard';
import Supporters from '../Components/Supporters';
import Footer from '../Components/Footer';
// import '../Components/blog.css'



export default function BlogSingle() {


  const [blog, setBlog] = useState({});
  const { id } = useParams();

  const getSingleBlog = (id) => {
    fetch(`http://localhost:2000/api/blogSingle/${id}`)
      .then((res) => res.json())
      .then((json) => {
        console.log("blogSingle", json);
       
        setBlog(json);
      });
  };

  useEffect(() => {
    getSingleBlog(id);
  }, []);
 
  return (
    <div>
        <Nav />
        <HeaderCard title='Blog Single'/>
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-sm-12 mt-5">
           <img
          src={ `http://127.0.0.1:2000/images/${blog.image} `}
          alt="blog"
        />
            <div className="row mt-4">
               <div className="col-lg-3">
                 <span>
                   <img src="/images/pin.png" alt="helo" className='img-responsive p-2' />
                   <button className='btn mt-1'>Surf Axion</button>
                   </span>
                  </div>

                 <div className="col-lg-3">
                   <span>
                     <img src="/images/task.png" alt=""  className='img-responsive p-2' />
                    <button className='btn mt-1'>{blog.created_at}</button>
                    </span>
                    </div>
               </div>
               <h2 className='sit mt-2'>{blog.title}. </h2>
               <p className='lorem mt-3'>{blog.content}.</p>

               <p className='desc'>{blog.desc}</p>
               <div className="row">
               <div className="col-lg-5 col-md-6 col-xs-12">
                <video width="320" height="240" controls>
                <source src={ `http://127.0.0.1:2000/images/${blog.image1} `}
                 type="video/ogg"/>
              </video> 
                  </div>
                  
                <div className="col-lg-5 col-md-6 col-xs-12">
                <img
                style={{ width:'90%' }}
                  src={ `http://127.0.0.1:2000/images/${blog.image1} `}
                  alt="blog"
                />
                </div>

              </div>

               <p className="lorem">{blog.content}</p>
              <div className="row">
                .div
              </div>
               </div>
            <div className="col-lg-5 col-sm-12 mt-5 ">
              <BlogLeft />
            </div>
            {/* end */}
        </div>
      </div>


      <Supporters/>
       <Footer /> 
    </div>
  )
}
