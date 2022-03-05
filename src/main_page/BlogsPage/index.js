import "./BlogPage.css"
import BlogRows from "./BlogRows"
import React, {useState,useEffect} from 'react'
const Blogs = (props) => {
    if(props.AllBlogs==""){
        
    return ( 
        <div>
            <h1>Blogs not yet arrived</h1>
        </div>
     );
    }
    else{
        const blogs=props.AllBlogs
        return(
            <div className="container">
                {blogs.map((b) => (
                    <BlogRows key={b.id} blog={b}/>    
                ))}
            </div>
        );
    }
}
 
export default Blogs;