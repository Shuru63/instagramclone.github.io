import React from 'react'
import Pic1 from '../material-insta/IMG_23.jpg'
import './sugestion.css'
function Sugestion({ Sugestuser, Sugestpostimage }) {
  return (
    <div className='all-suggestion'>
    
      <div className='suggestion-profile'>
        <div className='profile'>
          <div className='profile-pic'>
            <img className='profile-icon' src={Sugestpostimage}></img>

          </div>
          <div className='intro'>
            <span className='highlight'>{Sugestuser}</span>
            <p>New to instagram</p>
          </div>
        </div>
        <button className='switch'>
          Follow
        </button>
      </div>
    </div>
  )
}

export default Sugestion
