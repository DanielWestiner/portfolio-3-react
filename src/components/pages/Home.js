import React from 'react';
import '../../styles/Home.css'
import profileImg from "../../images/profilepic.jpg"

export default function Home() {
  return (
    <div className="intro container-fluid">
      <div className='intro-left row'>
      <img className='profileImg .img-responsive mx-auto col-sm-5' src={profileImg} alt=''></img>
        <div className='intro-left-wrapper container-fluid'>
          <h2 className='introduction row'>👋  Hi, my name is </h2>
          <h1 className='intro-name row'>Daniel Westiner</h1>
            <div className='intro-title row'>
              <div className='intro-title-wrapper row'>
                <div className='intro-title-item col-sm-12'>Experience in:</div>
                <div className='intro-title-item col-sm-12'>HTML</div>
                <div className='intro-title-item col-sm-12'>CSS</div>
                <div className='intro-title-item col-sm-12'>JavaScript</div>
                <div className='intro-title-item col-sm-12'>Node.js</div>
                <div className='intro-title-item col-sm-12'>Express</div>
                <div className='intro-title-item col-sm-12'>MySQL</div>
                <div className='intro-title-item col-sm-12'>MongoDB</div>
                <div className='intro-title-item col-sm-12'>React</div>
              </div>
            </div>
            <p className='intro-description'>I'm a Philadelphia-based full-stack web developer currently enrolled in UPenn's Coding Bootcamp.  I love learning about web development and creating projects.</p>
        </div>
      </div>
      <div className='intro-right'>
        <div className='intro-bg'></div>
        <div className = 'container'>
          {/* <img className='profileImg .img-responsive' src={profileImg} alt=''></img> */}
          </div>
      </div>
    </div>
  );
}
