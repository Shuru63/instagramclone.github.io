import React from 'react'
import img23 from '../../material-insta/IMG_23.jpg';
import img24 from '../../material-insta/WhatsApp Image 2023-10-30 at 19.14.45_c4809151.jpg'
import '../Post/Post.css'

function Posts({ user, postimage, likes, time }) {
    return (
        <div>
            <div className='post'>
               
                <div className='post-all'>
                    <div className='post-all-2'>
                    <div className='post-header'>
                        <div className='post-header-icon'>
                            <img className='logo-icon' src={postimage} alt='ghj'></img>
                        {user }  <span className='time-post'> &#9679;{time}</span>
                        </div>
                        <div className='dot'>
                            <span class="material-symbols-outlined">
                                more_horiz
                            </span>
                        </div>
                    </div>


                    <div className='post-image'>
                        <img src={postimage}></img>
                    </div>
                    <div className='post-fotter'>
                        <div className='post-fotter-icon'>
                            <div className='main-icon'>
                                <span class="material-symbols-outlined">
                                    favorite
                                </span>
                                <span class="material-symbols-outlined love" >
                                    chat
                                </span>
                                <span class="material-symbols-outlined">
                                    send
                                </span>
                            </div>
                            <div className='icon-save'>
                                <span class="material-symbols-outlined">
                                    bookmark
                                </span>
                            </div>
                        </div>
                        Liked by {likes} people.
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Posts
