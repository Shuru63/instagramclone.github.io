import React, {  useState } from 'react'
import Posts from './Post/Posts'
import Sugestion from './Sugestion'
import Story from './Post/Story'
import './Timeline.css'
import Mainacc from './Post/Mainacc'
import Pic1 from '../material-insta/IMG_23.jpg'
import Pic2 from '../material-insta/IMG_24.jpg'
import Pic3 from '../material-insta/IMG_25.jpg'
import Pic4 from '../material-insta/IMG2.jpg'
import Pic5 from '../material-insta/WhatsApp Image 2023-10-30 at 19.14.45_c4809151.jpg'
import Pic6 from '../material-insta/IMG26.jpg'
function Timeline() {
  const [socialPosts, setSocialPosts] = useState([{
    user: "Shubham",
    postimage:Pic1,
    likes: "1888",
    timestamp: "1d",
  }, {
    user: "Manikat",
    postimage: Pic2,
    likes: "1718",
    timestamp: "2d",
  }, {
    user: "Raushan",
    postimage: Pic3,
    likes: "1758",
    timestamp: "5d",
  }, {
    user: "Vicky",
    postimage: Pic4,
    likes: "1785",
    timestamp: "8d",
  }, {
    user: "deepanshu",
    postimage: Pic5,
    likes: "18",
    timestamp: "14d",
  }, {
    user: "Aditya",
    postimage: Pic6,
    likes: "155",
    timestamp: "15d",
  }]);
 
 
  return (
    <div className='timeline'>
      <div className='timeline-left'>
        <div className='timeline_post'>
        <div className='story'>
   
       {socialPosts && socialPosts.map((story,index) => (
            <Story
            key={index}
            storyuser={story.user}
            storypostimage={story.postimage}
              l
            />
          ))}
          </div>
     {socialPosts && socialPosts.map((post_pic,index) => (
            <Posts
              key={index}
              user={post_pic.user}
              postimage={post_pic.postimage}
              likes={post_pic.likes}
              time={post_pic.timestamp}
            />
          ))}
       
         
        </div>
    
      </div>
      <div className='timeline-right'>
        <Mainacc/>
 
    {socialPosts && socialPosts.map((postSugest,index) => (
              <Sugestion

              key={index}
              Sugestuser={postSugest.user}
             Sugestpostimage={postSugest.postimage}
             
            />
          ))}
       
      </div>
    </div>



  )
}

export default Timeline;
