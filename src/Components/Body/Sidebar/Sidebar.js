import React from 'react';
import './Sidebar.css';
import { Avatar } from '@material-ui/core';
import BannerImage from './code-hobby.jpg';
import { selectUser } from '../../../features/userSlice';
import { useSelector } from 'react-redux';

const recentItems =(topic)=>{
    return(
        <div className="recentItem">
        <span className="sidebar_hash">#</span>
        <p>{topic}</p>
        </div>
    )
}

function Sidebar() {

  const user = useSelector(selectUser)
    return (
        <div className="sidebar">
          <div className="sidebar_top">
            <img 
              src={BannerImage}
              alt="cover pics" 
            />
            <Avatar className="sidebar_avatar">
              User
            </Avatar>
            {/* <h2>{user.displayName}</h2>
            <h4>{user.email}</h4> */}
            <h2>{user?.displayName}</h2>
            <h4>{user?.email}</h4>
          </div>
          <div className="sidebar_stats">
            <div className="sidebar_stat">
              <p>Who viewed you</p>
              <p className="stat_number">2,432</p>
            </div>
            <div className="sidebar_stat">
              <p>Views on post</p>
              <p className="stat_number">1,232</p>
            </div>
          </div>
    
          <div className="sidebar_bottom">
            <p>Recent</p>
            {recentItems("reactjs")}
            {recentItems('JavaScript')}
            {recentItems('Ruby')}
            {recentItems('Ruby on Rails')}
          </div>
        </div>
      )
}

export default Sidebar
