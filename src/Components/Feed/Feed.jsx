import React from "react";
import "./Feed.css";
import thumbnail1 from "../../assets/thumbnail1.png";
import thumbnail2 from "../../assets/thumbnail2.png";
import thumbnail3 from "../../assets/thumbnail3.png";
import thumbnail4 from "../../assets/thumbnail4.png";
import thumbnail5 from "../../assets/thumbnail5.png";
import thumbnail6 from "../../assets/thumbnail6.png";
import thumbnail7 from "../../assets/thumbnail7.png";
import thumbnail8 from "../../assets/thumbnail8.png";
import { Link } from "react-router-dom";

const Feed = () => {
  return (
    <div className="feed">
      <Link to={`video/20/5511`} className="card">
        <img src={thumbnail1} alt="" />
        <h2>Best Channel for Learning About Money and the Stock Market</h2>
        <h3>Durjoy</h3>
        <p>60k Views &bull; 2 Days ago</p>
      </Link>
      <div className="card">
        <img src={thumbnail2} alt="" />
        <h2>Top 10 Travel Destinations You Must Visit in 2024</h2>
        <h3>Wanderlust</h3>
        <p>120k Views &bull; 1 Week ago</p>
      </div>
      <div className="card">
        <img src={thumbnail3} alt="" />
        <h2>The Future of Technology: What to Expect in the Next Decade</h2>
        <h3>TechGuru</h3>
        <p>95k Views &bull; 3 Days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail4} alt="" />
        <h2>How to Cook the Perfect Steak Every Time</h2>
        <h3>Culinary Arts</h3>
        <p>80k Views &bull; 5 Days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail5} alt="" />
        <h2>10 Mindfulness Practices to Reduce Stress and Anxiety</h2>
        <h3>Wellness World</h3>
        <p>150k Views &bull; 1 Month ago</p>
      </div>
      <div className="card">
        <img src={thumbnail6} alt="" />
        <h2>Latest Gadgets and Gizmos You Need to Know About</h2>
        <h3>Gizmo Geek</h3>
        <p>200k Views &bull; 1 Week ago</p>
      </div>
      <div className="card">
        <img src={thumbnail7} alt="" />
        <h2>The Ultimate Guide to Personal Finance Management</h2>
        <h3>Finance Pro</h3>
        <p>180k Views &bull; 3 Days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail8} alt="" />
        <h2>Top 5 Workouts for Building Muscle Fast</h2>
        <h3>Fitness Fanatic</h3>
        <p>220k Views &bull; 2 Weeks ago</p>
      </div>
      <div className="card">
        <img src={thumbnail1} alt="" />
        <h2>Best Channel for Learning About Money and the Stock Market</h2>
        <h3>Durjoy</h3>
        <p>60k Views &bull; 2 Days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail2} alt="" />
        <h2>Top 10 Travel Destinations You Must Visit in 2024</h2>
        <h3>Wanderlust</h3>
        <p>120k Views &bull; 1 Week ago</p>
      </div>
      <div className="card">
        <img src={thumbnail3} alt="" />
        <h2>The Future of Technology: What to Expect in the Next Decade</h2>
        <h3>TechGuru</h3>
        <p>95k Views &bull; 3 Days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail4} alt="" />
        <h2>How to Cook the Perfect Steak Every Time</h2>
        <h3>Culinary Arts</h3>
        <p>80k Views &bull; 5 Days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail5} alt="" />
        <h2>10 Mindfulness Practices to Reduce Stress and Anxiety</h2>
        <h3>Wellness World</h3>
        <p>150k Views &bull; 1 Month ago</p>
      </div>
      <div className="card">
        <img src={thumbnail6} alt="" />
        <h2>Latest Gadgets and Gizmos You Need to Know About</h2>
        <h3>Gizmo Geek</h3>
        <p>200k Views &bull; 1 Week ago</p>
      </div>
      <div className="card">
        <img src={thumbnail7} alt="" />
        <h2>The Ultimate Guide to Personal Finance Management</h2>
        <h3>Finance Pro</h3>
        <p>180k Views &bull; 3 Days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail8} alt="" />
        <h2>Top 5 Workouts for Building Muscle Fast</h2>
        <h3>Fitness Fanatic</h3>
        <p>220k Views &bull; 2 Weeks ago</p>
      </div>
    </div>
  );
};

export default Feed;
