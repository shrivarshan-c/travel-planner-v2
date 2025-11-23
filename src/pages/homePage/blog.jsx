import React from 'react'
import './blog.css';
import BlogDetails from '../../components/uilayouts/BlogDetail';

function Blog() {
  return (
    <div className='blog'>

        <div className='blog-text'>
      <h3 className='text-green-500/90'>  Articles </h3>

 <h2>  Discover the Best Blogs </h2>
 <p>  Explore our collection of Informative and Engaging Blog Articles </p>
        </div>
        <div className='flex justify-center items-center mt-10'>
            <BlogDetails/>

        </div>

    </div>
  )
}

export default Blog
