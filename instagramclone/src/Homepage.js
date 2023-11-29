import React from 'react'
import "./Homepage.css"
import Sidenav from './naviagation/Sidenav'
import Timeline from './timeline/Timeline'
function Homepage() {
    return (
        <div className='Homepage'>
            <div className='Homepage_nav'>
                <Sidenav />
            </div>
            <div className='Homepage_time'>
                <Timeline />
            </div>
        </div>
    )
}

export default Homepage
