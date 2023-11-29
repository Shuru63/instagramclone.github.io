import React from 'react'
import './Sidenav.css'
import Img from '../material-insta/insta.png';

function Sidenav() {
  return (
    <div className='sidenav'>
      <div className='image'><img className="logo" src={Img} alt="papa" /></div>
      <div className='sidenav_buttons'>
        <button className='sidenav-btn'>
          <span class="material-symbols-outlined">
            home
          </span>
          <span className='icon-name'>Home</span>
        </button >
        <button className='sidenav-btn'>
          <span class="material-symbols-outlined">
            search
          </span>
          <span className='icon-name'>Search</span>
        </button >
        <button className='sidenav-btn'>
          <span class="material-symbols-outlined">
            explore
          </span>
          <span className='icon-name'>Explore</span>
        </button >
        <button className='sidenav-btn'>
          <span class="material-symbols-outlined">
            slideshow
          </span>
          <span className='icon-name'>Reel</span>
        </button >
        <button className='sidenav-btn'>
          <span class="material-symbols-outlined">
            chat
          </span>
          <span className='icon-name'>Messages</span>
        </button >
        <button className='sidenav-btn'>
          <span class="material-symbols-outlined">
            favorite
          </span>
          <span className='icon-name'>Notifiacation</span>
        </button >
        <button className='sidenav-btn'>
          <span class="material-symbols-outlined">
            add_circle
          </span>
          <span className='icon-name'>Create</span>
        </button >
         <button className='sidenav-btn more'>
          <span class="material-symbols-outlined">
            menu
          </span>
          <span className='icon-name'>More</span>
        </button >
      </div>
    </div>
  )
}

export default Sidenav
