import React from 'react'
import Pic1 from '../../material-insta/IMG_23.jpg';
import './Post.css'
function Story({storypostimage,storyuser}) {
  return (
    <div>
     
       <div className='story'>
                    <div className='story-profile-icon'>
                        <img className='story-profile-logo' src={storypostimage} alt='1ws'></img>
                        <p>{storyuser}</p>
                    </div>


                
                </div>
    </div>
  )
}

export default Story
