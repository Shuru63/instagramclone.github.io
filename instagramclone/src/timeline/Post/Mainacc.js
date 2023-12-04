import React from 'react'
import Pic1 from '../../material-insta/IMG_23.jpg';
import  '../sugestion.css'

function Mainacc() {
  return (
    <div>
          <div className='off-on'>
        <span class="material-symbols-outlined">
          dark_mode
        </span>
      </div>
          <div className='suggestion'>
        <div className='suggestion-profile'>
        <div className='profile'>
          <div className='profile-pic'>
              <img className='profile-main' src={Pic1}></img>
            
          </div>
          <div className='intro'>
          <span className='highlight'>Shubham</span>
          <p>shubham_</p>
          <p>web-developer</p>
          </div>
        </div>
        <button className='switch'>
          switch
        </button>
      </div>
      <div className='suggestion-head'>
        <div className='suggestion-title'>Sugestion for you
        </div>
        <div className='seeall'>see all</div>
      </div>
      </div>
    </div>
  )
}

export default Mainacc
