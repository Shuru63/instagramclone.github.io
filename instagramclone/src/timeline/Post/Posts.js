import React from 'react'
import img23 from '../../material-insta/IMG_23.jpg';
import img24 from '../../material-insta/WhatsApp Image 2023-10-30 at 19.14.45_c4809151.jpg'
import '../Post/Post.css'
function Posts() {
    return (
        <div>
            <div className='post'>
                <div className='post-header'>
                    <div className='post-header-icon'>
                        <img className='logo-icon' src={img23}></img>
                        shubham_    <span className='time-post'> &#9679;12h</span>
                    </div>
                    <div className='dot'>
                        <span class="material-symbols-outlined">
                            more_horiz
                        </span>
                    </div>
                </div>


                <div className='post-image'>
                    <img src={img24}></img>
                </div>
                <div className='post-fotter'>
                    <div className='post-fotter-icon'>
                        <div className='main-icon'>
                            <span class="material-symbols-outlined">
                                favorite
                            </span>
                            <span class="material-symbols-outlined">
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
                    Liked by 21 people.
                </div>
            </div>
        </div>
    )
}

export default Posts
