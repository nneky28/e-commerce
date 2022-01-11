import React from 'react'
import { Link } from 'react-router-dom'
import './/Blog.css'
import BlogLeft from './BlogLeft'


export default function BlogCard({updateBlogs,id,title,content,image,desc,image1,image2,video,created_at}) {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-sm-12 mt-5">
          <Link to={`/blog/${id}`}> <img
          src={ `http://127.0.0.1:2000/images/${image} `}
          alt="blog"
        /></Link>
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
                    <button className='btn mt-1'>hello</button>
                    </span>
                    </div>
               </div>
               <h2 className='sit mt-2'>{title}. </h2>
               <p className='lorem mt-3'>{content}.</p>

               <Link to={`/blog/${id}`}>
               <h2 className='more'> Read More <span className='dot'>.</span></h2>
               </Link>

               </div>
            <div className="col-lg-5 col-sm-12 mt-5 ">
              <BlogLeft />
            </div>
            {/* end */}
        </div>
      </div>
    </div>
  )
}
