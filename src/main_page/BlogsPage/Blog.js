import {useParams} from 'react-router-dom'
const Blog = (props) => {
    const {id} = useParams()
    if(props.AllBlogs==""){
    return ( 
        <div>
            <h3>Blog will come here</h3>
        </div>
     );
    }
    else{
        const selectedBlog = props.AllBlogs.filter((h) => h.id===parseInt(id))
       return(
           <div className="container blog-body-block">
               <div className='blog-title-block'>
               <h3>{selectedBlog[0].title}</h3>
               </div>
               <div className="blog-image-block">
                   <img src={selectedBlog[0].url} alt='blog Pic' className='blog-image' />
               </div>
               <div className='blog-text-block'>
               <p>{selectedBlog[0].description}</p>
               </div>
           </div>
       )
    }
}
 
export default Blog;