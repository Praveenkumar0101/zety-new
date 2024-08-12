

import React from 'react';

import profilePic  from '../Resume/profilePic.jpg'; // Add the correct path to the profile picture
import './Resume-format.css'

function Resumeformat(){
    return(
        <>
   <div className="container1-main">
      <nav className="breadcrumb">
        <a href="/">Blog  </a>
        <span className="separator"> &gt; </span>
        <a href="/">Resume Help</a>
        <span className="separator"> &gt; </span>
        <span>How to Make a Resume: Writing Guide & Examples for 2024</span>
      </nav>
      <header className="header">
        <h1>How to Make a Resume: Writing <br/>Guide & Examples for 2024</h1>
        <button className="create-resume-button">Create Your Resume Now</button>
        <div className="author-info">
          <img src={profilePic} alt="Author" className="author-pic" />
          <div className="author-details">
            <p>Maciej Tomaszewicz, CPRW</p>
            <p>Career Expert</p>
            <p>Updated: July 26, 2024</p>
            <div/>
            <div className="rating">
            <p>Reviewed by: Roma Kończak, CPRW</p>
            <p> Helpfulness:<span >⭐⭐⭐⭐ 4.64</span></p>
              
              <span></span>
            </div>
            <div className="share-icons">
              <a href="#share"><i className="fas fa-share-alt"> <span style={{fontFamily:"initial"}}>Share</span></i></a>
              <a href=''><i className="fa-brands fa-x-twitter" ></i></a>
              <a href="#facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#linkedin"><i className="fab fa-linkedin-in"></i></a>
              <a href="#whatsapp"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>
        </div>
      </header>
</div>

        </>
    )
}
export default Resumeformat;