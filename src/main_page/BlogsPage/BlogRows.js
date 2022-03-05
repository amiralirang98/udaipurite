const BlogsRows = (props) => {
    const id =props.blog.id
    const url = `/blogs/${id}`
    return (  
        <div className="container row blogs-row">
            <div className="col-md-8 blog-row-text-block">
                <h4><a href={url}>{props.blog.title}</a></h4>
            </div>
            <div className="col-md-4 blog-row-image-block">
            <img src={props.blog.url} class="blog-row-image" alt="blog pic" />
            </div>

        </div>
    );
}
 
export default BlogsRows;