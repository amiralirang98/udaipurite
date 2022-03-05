import TextBlock from './textblock'
import ImageBlock from './imageblock'
import MainImage from './main_image_component'
import {useState} from 'react'

const IndexPage = (props) =>
{
    const images = ['img1','img2','img3','img4','img5','img6']
    const [ImageCount,setImageCount]=useState(0)
    const interval= setInterval(() => {
      if(ImageCount===images.length-1)
      {
          setImageCount(0)
      }
      else{
          setImageCount(ImageCount+1)
      }
      clearInterval(interval)
  },5000)
    return(
        <div>
        <MainImage url={`/images/main_image/${images[ImageCount]}.jpg`}/>
        <div className="row blockcont">
        <div className="col-md-7">
           <TextBlock title={"The City Of Lakes"} /> 
        </div>
        <div className="col-md-5 img-right-cont">
            <ImageBlock url={"/images/blog_image/img1.jpg"}/>
        </div>
      </div>
      <div className="row blockcont">
      <div className="col-md-5">
         <ImageBlock url={"/images/main_image/img5.jpg"}/> 
      </div>
      <div className="col-md-7 img-right-cont">
          <TextBlock title={"Venice of The East"}/>
      </div>
    </div>
    </div>
    )
}
export default IndexPage