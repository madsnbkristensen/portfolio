import './ProjectCard.css'
import parse from "html-react-parser"

export default function ProjectCard({ post }) {

   const image = post._embedded['wp:featuredmedia'][0].source_url;


   return (
      <div className="flipcard-wrapper">
         <div className="flip-card">
            <div className="flip-card-inner">
               <div className="flip-card-front">
                  <img src={image} alt="Image of website"></img>
                  <p className='project-title'>{parse(post.title.rendered)}</p>
               </div>
               <div className="flip-card-back">
                  <div className='content-rendered'>{parse(post.content.rendered)}</div>
               </div>
            </div>
         </div>
      </div>
   )
}