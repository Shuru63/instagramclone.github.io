import React from 'react'
import Posts from './Post/Posts'
import Sugestion from './Sugestion'
import './Timeline.css'
function Timeline() {
  return (
    <div className='timeline'>
      <div className='timeline-left'>
      <div className='timeline_post'>
     
        <Posts/>
        <Posts/>
        <Posts/>
      </div>
      </div>
      <div className='timeline-right'>
        <Sugestion/>
      </div>
    </div>
  )
}

export default Timeline
