import React from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'

const PlayVideo = () => {
  return (
    <div className='play-video'>
      <video src={video1} controls autoPlay muted></video>
      <div className='abc'>
      <h3>Best YT Channel to learn Stock Market</h3>
      <div className="play-video-info">
        <p>11525 Video &bull; 2 days ago</p>
        <div>
          <span><img src={like} alt="" />1222</span>
          <span><img src={dislike} alt="" />195</span>
          <span><img src={share} alt="" />Share</span>
          <span><img src={save} alt="" />Save</span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={jack} alt="Publisher" />
        <div>
          <p>Durjoy Money</p>
          <span>6.4M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-desc">
        <p>Channel that makes you money</p>
        <p>Subscribe to Watch More</p> 
      </div>
      <hr />
      <h4>785 comments</h4>
      <div className="comment">
        <img src={user_profile} alt="User profile" />
        <div>
          <h3>Mike Oxlong <span>1 day ago</span></h3>
          <p>Why did you create so many folders? It's really confusing... One more thing. Just for adding functionality into sidebar, I got confused how many times I have used and where. I didn't get the flow and logic. Can you explain please?</p>
          <div className="comment-action">
            <img src={like} alt="Like" />
            <span>511</span>
            <img src={dislike} alt="Dislike" />
          </div>
        </div>
      </div>

      <div className="comment">
        <img src={user_profile} alt="User profile" />
        <div>
          <h3>Mike Oxlong <span>1 day ago</span></h3>
          <p>Why did you create so many folders? It's really confusing... One more thing. Just for adding functionality into sidebar, I got confused how many times I have used and where. I didn't get the flow and logic. Can you explain please?</p>
          <div className="comment-action">
            <img src={like} alt="Like" />
            <span>511</span>
            <img src={dislike} alt="Dislike" />
          </div>
        </div>
      </div>

      <div className="comment">
        <img src={user_profile} alt="User profile" />
        <div>
          <h3>Mike Oxlong <span>1 day ago</span></h3>
          <p>Why did you create so many folders? It's really confusing... One more thing. Just for adding functionality into sidebar, I got confused how many times I have used and where. I didn't get the flow and logic. Can you explain please?</p>
          <div className="comment-action">
            <img src={like} alt="Like" />
            <span>511</span>
            <img src={dislike} alt="Dislike" />
          </div>
        </div>
      </div>

      <div className="comment">
        <img src={user_profile} alt="User profile" />
        <div>
          <h3>Mike Oxlong <span>1 day ago</span></h3>
          <p>Why did you create so many folders? It's really confusing... One more thing. Just for adding functionality into sidebar, I got confused how many times I have used and where. I didn't get the flow and logic. Can you explain please?</p>
          <div className="comment-action">
            <img src={like} alt="Like" />
            <span>511</span>
            <img src={dislike} alt="Dislike" />
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default PlayVideo
